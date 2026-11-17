// Arcana Tarot
// Built on the live Arcana Flow app. The reading engine (layouts, styles, scripts,
// clarifier, real deck no-repeat) is kept from the original.
// Added: Fate & Feather deck, autosave, Continue Reading, Saved Readings,
// and a step-by-step Question > Spread > Cards > Reading flow.

const cards = deck.map(function(item) { return item.name; });
const deckByName = {};
deck.forEach(function(item) { deckByName[item.name] = item; });

const layouts = {
  one: ["Main Message"],
  three: ["Past", "Present", "Future"],
  situation: ["Situation", "Obstacle", "Advice"],
  love: ["Their Energy", "Your Energy", "Where It Is Going"],
  career: ["Current Work Energy", "Challenge", "Best Next Step"],
  yesno: ["Answer", "Why", "Advice"],
  celtic: [
    "Present Situation",
    "Challenge",
    "Root Cause",
    "Recent Past",
    "Possible Outcome",
    "Near Future",
    "Your Power",
    "Outside Influence",
    "Hopes and Fears",
    "Final Outcome"
  ]
};

const DRAFT_KEY = "arcanaTarot.draft";
const SAVED_KEY = "arcanaTarot.savedReadings";
const DELETED_KEY = "arcanaTarot.deletedIds";

let lastReadingText = "";
let currentStep = 1;
let currentReadingId = null;
let openSavedId = null;
let restoring = false;
let wizardLoaded = false;

/* ---------- Saving on this device ---------- */

function storageWorks() {
  try {
    localStorage.setItem("arcanaTarot.test", "1");
    localStorage.removeItem("arcanaTarot.test");
    return true;
  } catch (error) {
    return false;
  }
}

// Readings are kept in two places on the device: localStorage and an IndexedDB backup.
// If Android or the app wrapper ever loses one, the other restores it on the next open.
const memoryStore = {};
let backupDb = null;
let localStorageOk = true;

function openBackup() {
  return new Promise(function(resolve) {
    try {
      if (!window.indexedDB) { resolve(null); return; }
      const request = indexedDB.open("arcanaTarotBackup", 1);
      request.onupgradeneeded = function() { request.result.createObjectStore("data"); };
      request.onsuccess = function() { resolve(request.result); };
      request.onerror = function() { resolve(null); };
      request.onblocked = function() { resolve(null); };
    } catch (error) {
      resolve(null);
    }
  });
}

function backupGet(key) {
  return new Promise(function(resolve) {
    if (!backupDb) { resolve(undefined); return; }
    try {
      const request = backupDb.transaction("data", "readonly").objectStore("data").get(key);
      request.onsuccess = function() { resolve(request.result); };
      request.onerror = function() { resolve(undefined); };
    } catch (error) {
      resolve(undefined);
    }
  });
}

function backupPut(key, value) {
  if (!backupDb) return;
  try {
    const store = backupDb.transaction("data", "readwrite").objectStore("data");
    if (value === null) store.delete(key); else store.put(value, key);
  } catch (error) {}
}

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw) return JSON.parse(raw);
  } catch (error) {}
  return memoryStore[key] !== undefined && memoryStore[key] !== null ? memoryStore[key] : fallback;
}

function writeJSON(key, value) {
  memoryStore[key] = value;
  backupPut(key, value);
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    localStorageOk = false;
    if (!backupDb) document.getElementById("storageWarning").style.display = "block";
    return !!backupDb;
  }
}

function mergeReadings(a, b) {
  const byId = {};
  (a || []).concat(b || []).forEach(function(reading) {
    if (!reading || !reading.id) return;
    const known = byId[reading.id];
    if (!known || (reading.updatedAt || 0) > (known.updatedAt || 0)) byId[reading.id] = reading;
  });
  return Object.keys(byId).map(function(id) { return byId[id]; })
    .sort(function(x, y) { return y.createdAt - x.createdAt; });
}

async function restoreFromBackup() {
  backupDb = await openBackup();
  if (backupDb) document.getElementById("storageWarning").style.display = "none";
  else if (!localStorageOk) document.getElementById("storageWarning").style.display = "block";
  if (!backupDb) return;

  const deletedIds = readJSON(DELETED_KEY, []).concat((await backupGet(DELETED_KEY)) || []);
  const fromLocal = readJSON(SAVED_KEY, []);
  const fromBackup = (await backupGet(SAVED_KEY)) || [];
  const merged = mergeReadings(fromLocal, fromBackup).filter(function(r) { return !deletedIds.includes(r.id); });
  if (merged.length || fromLocal.length || fromBackup.length) writeJSON(SAVED_KEY, merged);
  if (deletedIds.length) writeJSON(DELETED_KEY, Array.from(new Set(deletedIds)).slice(-500));

  const localDraft = readJSON(DRAFT_KEY, null);
  const backupDraft = await backupGet(DRAFT_KEY);
  if (!localDraft && backupDraft) writeJSON(DRAFT_KEY, backupDraft);
  else if (localDraft && (!backupDraft || (localDraft.updatedAt || 0) >= (backupDraft.updatedAt || 0))) backupPut(DRAFT_KEY, localDraft);
  else if (backupDraft) writeJSON(DRAFT_KEY, backupDraft);

  updateHomeButtons();
}

function getSavedReadings() {
  const list = readJSON(SAVED_KEY, []);
  return Array.isArray(list) ? list : [];
}

function setSavedReadings(list) {
  return writeJSON(SAVED_KEY, list);
}

function getDraftCards() {
  const layoutName = document.getElementById("layout").value;
  return layouts[layoutName].map(function(position, index) {
    const cardSelect = document.getElementById("card" + index);
    const directionSelect = document.getElementById("direction" + index);
    return {
      card: cardSelect ? cardSelect.value : "",
      direction: directionSelect ? directionSelect.value : "upright"
    };
  });
}

function saveDraft() {
  if (restoring || !wizardLoaded) return;
  const draft = {
    question: document.getElementById("clientQuestion").value,
    layout: document.getElementById("layout").value,
    cards: getDraftCards(),
    style: document.getElementById("style").value,
    step: currentStep,
    readingId: currentReadingId,
    updatedAt: Date.now()
  };
  writeJSON(DRAFT_KEY, draft);
  updateHomeButtons();
}

function getDraft() {
  return readJSON(DRAFT_KEY, null);
}

function draftHasContent(draft) {
  if (!draft) return false;
  if (draft.readingId) return true;
  if (draft.question && draft.question.trim()) return true;
  return Array.isArray(draft.cards) && draft.cards.some(function(item) { return item.card; });
}

function clearDraft() {
  try { localStorage.removeItem(DRAFT_KEY); } catch (error) {}
  memoryStore[DRAFT_KEY] = null;
  backupPut(DRAFT_KEY, null);
}

function newId() {
  return "r" + Date.now() + Math.floor(Math.random() * 1000);
}

function formatDate(time) {
  const date = new Date(time);
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) +
    ", " + date.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- Screens ---------- */

function inAppHistory() {
  try { return !!(history.state && history.state.arcana === "inside"); } catch (error) { return false; }
}

function showSection(sectionName) {
  ["home", "live", "saved", "savedDetail", "lookup", "help"].forEach(function(id) {
    document.getElementById(id).style.display = "none";
  });
  document.getElementById(sectionName).style.display = "block";
  window.scrollTo(0, 0);

  // Leaving the opening screen adds one history step, so the phone's Back button
  // comes back here (with everything saved) instead of closing the app.
  if (sectionName !== "home" && !inAppHistory()) {
    try { history.pushState({ arcana: "inside" }, ""); } catch (error) {}
  }
}

function showHomeScreen() {
  saveDraft();
  updateHomeButtons();
  showSection("home");
}

function goHome() {
  if (inAppHistory()) {
    history.back();
  } else {
    showHomeScreen();
  }
}

window.addEventListener("popstate", function() {
  if (document.getElementById("home").style.display !== "block") showHomeScreen();
});

function updateHomeButtons() {
  const draft = getDraft();
  const continueButton = document.getElementById("continueButton");
  const continueInfo = document.getElementById("continueInfo");

  if (draftHasContent(draft)) {
    continueButton.style.display = "block";
    continueInfo.style.display = "block";
    const question = draft.question && draft.question.trim() ? "“" + draft.question.trim() + "”" : "No question entered";
    const stepNames = ["", "Question", "Spread", "Cards", "Reading"];
    continueInfo.textContent = question + " · stopped at " + (stepNames[draft.step] || "Question");
  } else {
    continueButton.style.display = "none";
    continueInfo.style.display = "none";
  }

  const count = getSavedReadings().length;
  document.getElementById("savedButton").textContent = "Saved Readings" + (count ? " (" + count + ")" : "");
}

function goToStep(step) {
  if (step === 4 && currentStep === 3) {
    const missing = getDraftCards().some(function(item) { return !item.card; });
    document.getElementById("cardsMissing").style.display = missing ? "block" : "none";
    if (missing) return;
  }

  currentStep = step;
  for (let i = 1; i <= 4; i++) {
    document.getElementById("step" + i).style.display = i === step ? "block" : "none";
    const dot = document.getElementById("dot" + i);
    dot.className = "dot" + (i === step ? " active" : (i < step ? " done" : ""));
  }
  document.getElementById("stepCounter").textContent = "Step " + step + " of 4";
  if (step === 2) showLayoutPositions();
  saveDraft();
  window.scrollTo(0, 0);
}

function showLayoutPositions() {
  const positions = layouts[document.getElementById("layout").value];
  document.getElementById("layoutPositions").textContent =
    positions.length + (positions.length === 1 ? " card: " : " cards: ") + positions.join(", ") + ".";
}

/* ---------- Start, continue, new ---------- */

function resetReadingScreen() {
  document.getElementById("readingOutput").style.display = "none";
  document.getElementById("clarifierOutput").style.display = "none";
  document.getElementById("afterReading").style.display = "none";
  document.getElementById("copyMessage").style.display = "none";
  document.getElementById("savedMessage").style.display = "none";
  document.getElementById("cardsMissing").style.display = "none";
}

function startNewReading() {
  restoring = true;
  document.getElementById("clientQuestion").value = "";
  document.getElementById("layout").value = "one";
  document.getElementById("style").value = "Professional Reader";
  changeLayout();
  restoring = false;

  wizardLoaded = true;
  currentReadingId = null;
  lastReadingText = "";
  resetReadingScreen();
  showSection("live");
  goToStep(1);
}

function loadIntoWizard(data, step) {
  wizardLoaded = true;
  restoring = true;
  document.getElementById("clientQuestion").value = data.question || "";
  document.getElementById("layout").value = layouts[data.layout] ? data.layout : "one";
  document.getElementById("style").value = data.style || "Professional Reader";
  changeLayout();

  (data.cards || []).forEach(function(item, index) {
    const cardSelect = document.getElementById("card" + index);
    const directionSelect = document.getElementById("direction" + index);
    if (cardSelect && item.card && deckByName[item.card]) cardSelect.value = item.card;
    if (directionSelect) directionSelect.value = item.direction === "reversed" ? "reversed" : "upright";
  });
  updateCardMenusForRealDeck();
  restoring = false;

  resetReadingScreen();
  currentReadingId = null;
  lastReadingText = "";

  const reading = data.readingId ? getSavedReadings().find(function(r) { return r.id === data.readingId; }) : null;
  if (reading) {
    currentReadingId = reading.id;
    showReadingOutput(reading);
  }

  showSection("live");
  goToStep(step || 1);
}

function continueReading() {
  const draft = getDraft();
  if (!draftHasContent(draft)) {
    startNewReading();
    return;
  }
  loadIntoWizard(draft, draft.step || 1);
}

function clearEnergy() {
  // The finished reading is already in Saved Readings, so nothing is lost here.
  clearDraft();
  startNewReading();
}

/* ---------- Fate & Feather meanings ---------- */

function toPhrase(text) {
  const trimmed = text.trim().replace(/\.$/, "");
  return trimmed.charAt(0).toLowerCase() + trimmed.slice(1);
}

function getExactMeaning(card, direction) {
  const item = deckByName[card];
  if (!item) return "";
  return direction === "reversed" ? item.reversed : item.upright;
}

function getUprightMeaning(card) {
  const item = deckByName[card];
  return item ? toPhrase(item.upright) : "a message that depends on the question and the cards around it";
}

function getReversedMeaning(card) {
  const item = deckByName[card];
  return item ? toPhrase(item.reversed) : "blocked, delayed, or inward energy around this card";
}

function getMeaning(card, direction) {
  if (direction === "reversed") return getReversedMeaning(card);
  return getUprightMeaning(card);
}

function cardImage(card) {
  const item = deckByName[card];
  return item ? item.image : "";
}

/* ---------- Reading engine (kept from the live app) ---------- */

function cardName(item) {
  return item.card + (item.direction === "reversed" ? " reversed" : "");
}

function getArticleForCard(name) {
  if (name.startsWith("The ")) return "";
  if (/^(Ace|Eight)/.test(name)) return "an ";
  return "the ";
}

function cardDisplayName(item) {
  return getArticleForCard(item.card) + cardName(item);
}

function sentenceCardDisplayName(item) {
  const name = cardDisplayName(item);
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function pickRandom(lines) {
  return lines[Math.floor(Math.random() * lines.length)];
}

function getSelectedReadingCards() {
  const layoutName = document.getElementById("layout").value;
  const positions = layouts[layoutName];

  return positions.map(function(position, index) {
    const card = document.getElementById("card" + index).value;
    const direction = document.getElementById("direction" + index).value;

    return {
      position: position,
      card: card,
      direction: direction,
      meaning: card ? getMeaning(card, direction) : ""
    };
  });
}

function makeCardList(readingCards) {
  return readingCards.map(function(item) {
    return `<p><strong>${item.position}:</strong> ${cardName(item)}. ${getExactMeaning(item.card, item.direction)}</p>`;
  }).join("");
}

function makePlainCardList(readingCards) {
  return readingCards.map(function(item) {
    return `${item.position}: ${cardName(item)}. ${getExactMeaning(item.card, item.direction)}`;
  }).join("\n");
}

function makeCardPictures(readingCards) {
  return `<div class="reading-cards">` + readingCards.map(function(item) {
    return `<div class="reading-card"><img class="reading-art${item.direction === "reversed" ? " reversed" : ""}" src="${cardImage(item.card)}" alt="${item.card}">${item.position}</div>`;
  }).join("") + `</div>`;
}

function makeQuickMessage(readingCards, layoutName, style) {
  const first = readingCards[0];
  const question = document.getElementById("clientQuestion") ? document.getElementById("clientQuestion").value.trim() : "";
  let opening = question ? `For the question, “${question}${/[?!.]$/.test(question) ? "" : ","}” ` : "";

  if (layoutName === "one") {
    return pickRandom([
      `${opening}${cardDisplayName(first)} points to ${first.meaning}.`,
      `${opening}the main card is ${cardDisplayName(first)}, bringing attention to ${first.meaning}.`,
      `${opening}${cardDisplayName(first)} sets the tone of the reading with ${first.meaning}.`
    ]);
  }

  if (layoutName === "celtic") {
    return `${opening}this Celtic Cross gives a fuller picture of what is happening, what is blocking movement, and where the energy may be heading next.`;
  }

  if (layoutName === "love" || style === "Love Reading") {
    return `${opening}this reading is centred on emotion, connection, consistency, and whether actions are matching feelings.`;
  }

  if (layoutName === "career" || style === "Career and Money") {
    return `${opening}this reading is focused on direction, stability, timing, and the next practical choice.`;
  }

  if (layoutName === "yesno") {
    return `${opening}this yes or no reading gives an answer with context, not just a flat yes or no.`;
  }

  return `${opening}this spread shows the main energy, the pressure around it, and the part that needs attention before moving forward.`;
}

function getFollowUp(style, layoutName) {
  if (layoutName === "one") return "“Would you like me to pull one more card for clarity or the next step?”";
  if (layoutName === "celtic") return "“Would you like me to pull one more card for what you should focus on first?”";
  if (layoutName === "yesno") return "“Would you like one more card for why this answer is showing up?”";
  if (style === "Love Reading" || layoutName === "love") return "“Would you like one more card for how they feel, their next move, or what you should do next?”";
  if (style === "Career and Money" || layoutName === "career") return "“Would you like one more card for the best next step or the opportunity worth watching?”";
  return "“Would you like me to pull one more card for clarity or the best next step?”";
}

/* ---------- Building and saving a reading ---------- */

function paragraphsHtml(text) {
  return String(text).split(/\n\n+/).map(function(p) {
    return "<p>" + escapeHtml(p).replace(/\n/g, "<br>") + "</p>";
  }).join("");
}

// Older saved readings (made before The Message of Your Reading existed) get their
// message added the first time they are opened. Their original script is left as it was.
function ensureMessage(reading) {
  let changed = false;
  if (!Array.isArray(reading.message)) {
    reading.message = buildReadingMessage(reading);
    changed = true;
  }
  if (reading.clarifier && !reading.clarifierMessage) {
    reading.clarifierMessage = buildClarifierMessage(reading);
    changed = true;
  }
  if (changed) storeReading(reading);
  return reading;
}

function messageText(reading) {
  let text = reading.message.join("\n\n");
  if (reading.clarifier && reading.clarifierMessage) {
    text += "\n\nWhat the clarifier adds:\n" + reading.clarifierMessage;
  }
  return text;
}

function buildReadingText(reading) {
  ensureMessage(reading);
  let text =
`Arcana Tarot Reading
${formatDate(reading.createdAt)}

Question:
${reading.question || "No question entered."}

Layout:
${reading.layoutLabel}

Reading style:
${reading.style}

The Message of Your Reading:
${messageText(reading)}

Quick message:
${reading.quickMessage}

Card breakdown:
${makePlainCardList(reading.cards)}

Say this:
${reading.sayThis}

Follow-up question:
${reading.followUp}`;

  if (reading.clarifier) {
    text += `

Clarifier Card:
${cardName(reading.clarifier)}. ${getExactMeaning(reading.clarifier.card, reading.clarifier.direction)}`;
    if (!clarifierInSpokenReading(reading)) {
      text += `

Clarifier script:
${reading.clarifier.script}`;
    }
  }
  return text;
}

function readingHtml(reading) {
  ensureMessage(reading);
  const question = reading.question ? escapeHtml(reading.question) : "No question entered.";
  let clarifierPart = "";
  if (reading.clarifier && reading.clarifierMessage) {
    clarifierPart = `<h4>What the Clarifier Adds</h4><p>${escapeHtml(reading.clarifierMessage)}</p>`;
  }
  let html = `
    <h3>Your Reading Script</h3>
    ${makeCardPictures(reading.cards)}
    <p><strong>Question:</strong> ${question}</p>
    <p><strong>Layout:</strong> ${reading.layoutLabel}</p>
    <p><strong>Reading style:</strong> ${reading.style}</p>
    <div class="message-block">
      <h3>The Message of Your Reading</h3>
      ${paragraphsHtml(reading.message.join("\n\n"))}
      ${clarifierPart}
    </div>
    <p><strong>Quick message:</strong> ${escapeHtml(reading.quickMessage)}</p>
    <p><strong>Card breakdown:</strong></p>
    ${makeCardList(reading.cards)}
    <div class="say-this">
      <p><strong>Say this:</strong></p>
      ${paragraphsHtml(reading.sayThis)}
    </div>
    <p><strong>Follow-up question:</strong> ${reading.followUp}</p>
  `;
  return html;
}

function clarifierInSpokenReading(reading) {
  return !!(reading.clarifier && reading.clarifier.script && reading.sayThis && reading.sayThis.indexOf(reading.clarifier.script) !== -1);
}

function clarifierHtml(clarifier, reading) {
  const spoken = reading && clarifierInSpokenReading(reading)
    ? `<p class="small note-muted">This clarifier is part of the spoken reading above.</p>`
    : `<p><strong>Say this:</strong> ${escapeHtml(clarifier.script)}</p>`;
  return `
    <h3>Clarifier Card</h3>
    ${makeCardPictures([clarifier])}
    <p><strong>${cardName(clarifier)}</strong>. ${getExactMeaning(clarifier.card, clarifier.direction)}</p>
    ${spoken}
  `;
}

function showReadingOutput(reading) {
  const output = document.getElementById("readingOutput");
  output.style.display = "block";
  output.innerHTML = readingHtml(reading);

  const clarifierOutput = document.getElementById("clarifierOutput");
  if (reading.clarifier) {
    clarifierOutput.style.display = "block";
    clarifierOutput.innerHTML = clarifierHtml(reading.clarifier, reading);
  } else {
    clarifierOutput.style.display = "none";
  }

  document.getElementById("afterReading").style.display = "block";
  lastReadingText = buildReadingText(reading);
}

function storeReading(reading) {
  const list = getSavedReadings();
  const index = list.findIndex(function(r) { return r.id === reading.id; });
  if (index >= 0) list[index] = reading; else list.unshift(reading);
  return setSavedReadings(list);
}

function createReading() {
  const layoutName = document.getElementById("layout").value;
  const style = document.getElementById("style").value;
  const readingCards = getSelectedReadingCards();

  const missingCards = readingCards.filter(function(item) {
    return !item.card;
  });

  if (missingCards.length > 0) {
    goToStep(3);
    document.getElementById("cardsMissing").style.display = "block";
    return;
  }

  // Same question and cards with a new style: update that saved reading instead of making a copy.
  const existing = currentReadingId ? getSavedReadings().find(function(r) { return r.id === currentReadingId; }) : null;
  const now = Date.now();
  const reading = {
    id: existing ? existing.id : newId(),
    createdAt: existing ? existing.createdAt : now,
    updatedAt: now,
    question: document.getElementById("clientQuestion").value.trim(),
    layout: layoutName,
    layoutLabel: document.getElementById("layout").selectedOptions[0].textContent,
    style: style,
    cards: readingCards.map(function(item) {
      return { position: item.position, card: item.card, direction: item.direction, meaning: item.meaning };
    }),
    quickMessage: makeQuickMessage(readingCards, layoutName, style),
    followUp: getFollowUp(style, layoutName),
    clarifier: existing ? existing.clarifier : null
  };

  reading.message = buildReadingMessage(reading);
  if (reading.clarifier) {
    reading.clarifier.script = buildClarifierScript(reading);
    reading.clarifierMessage = buildClarifierMessage(reading);
  }
  reading.sayThis = buildSpokenReading(reading);

  const saved = storeReading(reading);
  currentReadingId = reading.id;
  showReadingOutput(reading);

  const message = document.getElementById("savedMessage");
  message.style.display = "block";
  message.textContent = saved ? "Saved to Saved Readings." : "This device would not save the reading. Copy it before closing the app.";
  document.getElementById("copyMessage").style.display = "none";

  saveDraft();
}

function pullClarifier() {
  const reading = getSavedReadings().find(function(r) { return r.id === currentReadingId; });
  if (!reading) return;

  // Real deck style: the clarifier comes from cards not already in the spread.
  const used = reading.cards.map(function(item) { return item.card; });
  const available = cards.filter(function(card) { return !used.includes(card); });
  const randomCard = available[Math.floor(Math.random() * available.length)];
  const direction = Math.random() > 0.75 ? "reversed" : "upright";
  const clarifier = {
    position: "Clarifier",
    card: randomCard,
    direction: direction,
    meaning: getMeaning(randomCard, direction)
  };
  reading.clarifier = clarifier;
  ensureMessage(reading);
  clarifier.script = buildClarifierScript(reading);
  reading.clarifierMessage = buildClarifierMessage(reading);
  // The spoken reading is rebuilt so the clarifier becomes part of the conversation.
  reading.sayThis = buildSpokenReading(reading);
  reading.updatedAt = Date.now();
  storeReading(reading);
  showReadingOutput(reading);

  const message = document.getElementById("savedMessage");
  message.style.display = "block";
  message.textContent = "Clarifier added to this saved reading.";
}

function copyText(text, message, doneText) {
  function fallback() {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let worked = false;
    try { worked = document.execCommand("copy"); } catch (error) {}
    document.body.removeChild(area);
    message.style.display = "block";
    message.textContent = worked ? doneText : "Copy did not work on this device. Highlight the script and copy manually.";
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function() {
      message.style.display = "block";
      message.textContent = doneText;
    }).catch(fallback);
  } else {
    fallback();
  }
}

function copyReadingScript() {
  const message = document.getElementById("copyMessage");

  if (!lastReadingText) {
    message.style.display = "block";
    message.textContent = "Create a reading first, then copy it.";
    return;
  }

  copyText(lastReadingText, message, "Reading script copied.");
}

/* ---------- Saved Readings ---------- */

function openSaved() {
  const list = getSavedReadings().slice().sort(function(a, b) { return b.createdAt - a.createdAt; });
  const holder = document.getElementById("savedList");
  holder.innerHTML = "";

  if (!list.length) {
    holder.innerHTML = `<p class="small">No saved readings yet. They will appear here as soon as you create one.</p>`;
  }

  list.forEach(function(reading) {
    const button = document.createElement("button");
    button.className = "saved-item";
    const question = reading.question ? "“" + escapeHtml(reading.question) + "”" : "No question entered";
    const cardNames = reading.cards.map(cardName).join(", ");
    button.innerHTML = `<strong>${question}</strong><span class="meta">${formatDate(reading.createdAt)} · ${reading.layoutLabel}</span><br>${cardNames}`;
    button.onclick = function() { openSavedReading(reading.id); };
    holder.appendChild(button);
  });

  showSection("saved");
}

function openSavedReading(id) {
  const reading = getSavedReadings().find(function(r) { return r.id === id; });
  if (!reading) { openSaved(); return; }
  openSavedId = id;

  let html = `<p class="small reading-date">${formatDate(reading.createdAt)}</p>` + readingHtml(reading);
  if (reading.clarifier) html += "<hr>" + clarifierHtml(reading.clarifier, reading);
  document.getElementById("savedDetailOutput").innerHTML = html;

  const deleteButton = document.getElementById("deleteButton");
  deleteButton.classList.remove("confirm");
  deleteButton.textContent = "Delete This Reading";
  document.getElementById("savedCopyMessage").style.display = "none";

  showSection("savedDetail");
}

function reopenSavedReading() {
  const reading = getSavedReadings().find(function(r) { return r.id === openSavedId; });
  if (!reading) return;
  loadIntoWizard({
    question: reading.question,
    layout: reading.layout,
    style: reading.style,
    cards: reading.cards,
    readingId: reading.id
  }, 4);
}

function copySavedReading() {
  const reading = getSavedReadings().find(function(r) { return r.id === openSavedId; });
  if (!reading) return;
  copyText(buildReadingText(reading), document.getElementById("savedCopyMessage"), "Reading script copied.");
}

function deleteSavedReading() {
  const button = document.getElementById("deleteButton");
  if (!button.classList.contains("confirm")) {
    button.classList.add("confirm");
    button.textContent = "Tap again to delete for good";
    return;
  }

  const list = getSavedReadings().filter(function(r) { return r.id !== openSavedId; });
  setSavedReadings(list);
  writeJSON(DELETED_KEY, readJSON(DELETED_KEY, []).concat([openSavedId]).slice(-500));

  const draft = getDraft();
  if (draft && draft.readingId === openSavedId) {
    draft.readingId = null;
    writeJSON(DRAFT_KEY, draft);
  }
  if (currentReadingId === openSavedId) currentReadingId = null;

  openSavedId = null;
  updateHomeButtons();
  openSaved();
}

/* ---------- Card picking ---------- */

function showSlotArt(index) {
  const cardSelect = document.getElementById("card" + index);
  const direction = document.getElementById("direction" + index);
  const art = document.getElementById("art" + index);
  if (!cardSelect || !art) return;
  if (cardSelect.value) {
    art.src = cardImage(cardSelect.value);
    art.alt = cardSelect.value;
    art.className = "slot-art" + (direction.value === "reversed" ? " reversed" : "");
    art.style.display = "block";
  } else {
    art.style.display = "none";
  }
}

function cardsChanged() {
  // Changing the cards starts a fresh reading. The earlier one stays in Saved Readings.
  if (!restoring && currentReadingId) {
    currentReadingId = null;
    lastReadingText = "";
    resetReadingScreen();
  }
  document.getElementById("cardsMissing").style.display = "none";
  updateCardMenusForRealDeck();
  saveDraft();
}

function drawCardsForMe() {
  const layoutName = document.getElementById("layout").value;
  const positions = layouts[layoutName];
  const shuffled = cards.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }

  restoring = true;
  positions.forEach(function(position, index) {
    document.getElementById("card" + index).value = "";
  });
  updateCardMenusForRealDeck();
  positions.forEach(function(position, index) {
    document.getElementById("card" + index).value = shuffled[index];
    document.getElementById("direction" + index).value = Math.random() > 0.75 ? "reversed" : "upright";
  });
  restoring = false;
  cardsChanged();
}

function updateCardMenusForRealDeck() {
  const layoutName = document.getElementById("layout").value;
  const positions = layouts[layoutName];

  positions.forEach(function(position, index) {
    const currentSelect = document.getElementById("card" + index);
    if (!currentSelect) return;

    const currentValue = currentSelect.value;

    const chosenInOtherMenus = positions.map(function(otherPosition, otherIndex) {
      if (otherIndex === index) return "";
      const otherSelect = document.getElementById("card" + otherIndex);
      return otherSelect ? otherSelect.value : "";
    }).filter(function(value) {
      return value !== "";
    });

    currentSelect.innerHTML = "";

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a card";
    currentSelect.appendChild(placeholder);

    cards.forEach(function(card) {
      if (!chosenInOtherMenus.includes(card) || card === currentValue) {
        const option = document.createElement("option");
        option.value = card;
        option.textContent = card;
        currentSelect.appendChild(option);
      }
    });

    currentSelect.value = currentValue;
    showSlotArt(index);
  });
}

function changeLayout() {
  const layoutName = document.getElementById("layout").value;
  const positions = layouts[layoutName];
  const holder = document.getElementById("cardInputs");

  holder.innerHTML = "";

  const note = document.createElement("p");
  note.className = "small";
  note.textContent = "Chosen cards are removed from the other card lists so the reading acts more like a real deck.";
  holder.appendChild(note);

  positions.forEach(function(position, index) {
    const wrap = document.createElement("div");
    wrap.className = "card-slot";

    const label = document.createElement("label");
    label.textContent = (index + 1) + ". " + position;

    const select = document.createElement("select");
    select.id = "card" + index;
    select.onchange = cardsChanged;

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a card";
    select.appendChild(placeholder);

    cards.forEach(function(card) {
      const option = document.createElement("option");
      option.value = card;
      option.textContent = card;
      select.appendChild(option);
    });

    const directionLabel = document.createElement("label");
    directionLabel.textContent = "Card Direction";

    const direction = document.createElement("select");
    direction.id = "direction" + index;
    direction.onchange = cardsChanged;

    const upright = document.createElement("option");
    upright.value = "upright";
    upright.textContent = "Upright";

    const reversed = document.createElement("option");
    reversed.value = "reversed";
    reversed.textContent = "Reversed";

    direction.appendChild(upright);
    direction.appendChild(reversed);

    const art = document.createElement("img");
    art.id = "art" + index;
    art.className = "slot-art";
    art.style.display = "none";

    wrap.appendChild(label);
    wrap.appendChild(select);
    wrap.appendChild(directionLabel);
    wrap.appendChild(direction);
    wrap.appendChild(art);
    holder.appendChild(wrap);
  });

  updateCardMenusForRealDeck();
  showLayoutPositions();

  if (!restoring && currentReadingId) {
    currentReadingId = null;
    lastReadingText = "";
    resetReadingScreen();
  }
  saveDraft();
}

/* ---------- Card lookup ---------- */

function lookupMeaning() {
  const card = document.getElementById("lookupCard").value;
  const direction = document.getElementById("lookupDirection").value;
  const item = deckByName[card];
  const meaning = getMeaning(card, direction);
  const displayName = card + (direction === "reversed" ? " reversed" : "");

  const output = document.getElementById("lookupOutput");
  output.style.display = "block";

  output.innerHTML = `
    <img class="lookup-art${direction === "reversed" ? " reversed" : ""}" src="${item.image}" alt="${card}">
    <h3>${displayName}</h3>
    <p><strong>${direction === "reversed" ? "Reversed" : "Upright"}:</strong> ${getExactMeaning(card, direction)}</p>
    <p><strong>Why the picture fits:</strong> ${item.picture}</p>
    <p><strong>Reader wording:</strong> “${displayName} is pointing toward ${meaning}. It is showing something worth paying attention to in the situation, especially if this message already connects with what you have been feeling or noticing.”</p>
  `;
}

function fillCardMenus() {
  const lookupMenu = document.getElementById("lookupCard");
  lookupMenu.innerHTML = "";

  cards.forEach(function(card) {
    const option = document.createElement("option");
    option.value = card;
    option.textContent = card;
    lookupMenu.appendChild(option);
  });

  restoring = true;
  changeLayout();
  restoring = false;
}

/* ---------- Start up ---------- */

document.getElementById("clientQuestion").addEventListener("input", function() {
  if (currentReadingId) {
    currentReadingId = null;
    lastReadingText = "";
    resetReadingScreen();
  }
  saveDraft();
});

window.addEventListener("pagehide", saveDraft);
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === "hidden") saveDraft();
});

if (!storageWorks()) {
  localStorageOk = false;
}

try {
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist();
} catch (error) {}

try { history.replaceState({ arcana: "home" }, ""); } catch (error) {}

fillCardMenus();
updateHomeButtons();
showSection("home");
restoreFromBackup();

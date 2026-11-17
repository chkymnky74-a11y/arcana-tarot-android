// The Message of Your Reading
// A reader's voice for every Fate & Feather card, upright and reversed.
// Each entry: [what it means for the person, practical guidance, tone]
// Tone: s = supportive, c = needs care, t = turning point.
// These sit alongside the exact card meanings in deck.js. They never replace them.

const readerVoice = {
  "The Fool": {
    up: ["a willingness to begin before everything is figured out", "Take the first small step and let the path show you the next one.", "s"],
    rev: ["a leap that needs a little more thought first", "Pause long enough to pack what you need, then go.", "c"]
  },
  "The Magician": {
    up: ["everything you need already in your hands", "Use what you already have instead of waiting for something more.", "s"],
    rev: ["talent that is being scattered or second-guessed", "Pick one thing and give it your full attention.", "c"]
  },
  "The High Priestess": {
    up: ["a quiet knowing you can trust", "Listen to the part of you that already senses the answer.", "s"],
    rev: ["an inner voice that has been drowned out", "Make some quiet space so your own instincts can be heard again.", "c"]
  },
  "The Empress": {
    up: ["room to grow, nurture and create", "Give this the same care you would give something you love.", "s"],
    rev: ["giving so much that there is little left for you", "Tend to your own needs before you pour out any more.", "c"]
  },
  "The Emperor": {
    up: ["steady structure and firm ground", "Put a simple plan and clear boundaries in place.", "s"],
    rev: ["control that has become too tight, or not steady enough", "Notice where you need firmer footing and where you need to loosen your grip.", "c"]
  },
  "The Hierophant": {
    up: ["wisdom that comes from tradition and trusted guidance", "Lean on someone who has walked this road before you.", "s"],
    rev: ["rules that no longer fit who you are becoming", "Question what you were taught and keep only what still rings true.", "t"]
  },
  "The Lovers": {
    up: ["a choice that lines up with your values", "Choose what honours your heart and your values together.", "s"],
    rev: ["a pull between what you want and what you believe", "Be honest about where your choices and your values have drifted apart.", "c"]
  },
  "The Chariot": {
    up: ["the drive to move forward with purpose", "Decide on your direction and keep your hands on the reins.", "s"],
    rev: ["being pulled in two directions at once", "Stop trying to go everywhere at once and choose a single direction.", "c"]
  },
  "Strength": {
    up: ["gentle courage", "Meet this with patience and kindness, including toward yourself.", "s"],
    rev: ["self-doubt that is louder than it deserves to be", "Remind yourself of what you have already come through.", "c"]
  },
  "The Hermit": {
    up: ["a need to step back and reflect", "Give yourself some quiet time before you decide anything.", "t"],
    rev: ["solitude that has started to feel like isolation", "Let someone you trust back in.", "c"]
  },
  "Wheel of Fortune": {
    up: ["a turning point already in motion", "Stay flexible, because the situation is still moving.", "t"],
    rev: ["a cycle that keeps repeating", "Look for the pattern and change one thing about how you respond to it.", "c"]
  },
  "Justice": {
    up: ["fairness and honest accounting", "Make the choice you could explain with a clear conscience.", "s"],
    rev: ["something that hasn't been weighed fairly", "Look honestly at what is being avoided, by you or by someone else.", "c"]
  },
  "The Hanged Man": {
    up: ["a pause that offers a new way of seeing", "Let yourself wait without forcing the answer.", "t"],
    rev: ["waiting that has turned into being stuck", "Make one small decision that gets things moving again.", "c"]
  },
  "Death": {
    up: ["an ending that clears the way for something new", "Let go of what has already run its course.", "t"],
    rev: ["holding on to something that is ready to end", "Loosen your grip on what you already know is finished.", "c"]
  },
  "Temperance": {
    up: ["balance and patient healing", "Take the middle path and give it time.", "s"],
    rev: ["things tipping too far one way", "Bring a little more balance back into your days.", "c"]
  },
  "The Devil": {
    up: ["a pattern or attachment that holds more power than it should", "Name the hook honestly, because seeing it clearly is how it starts to loosen.", "c"],
    rev: ["a hold that is finally starting to loosen", "Keep choosing the freedom you are beginning to feel.", "t"]
  },
  "The Tower": {
    up: ["a sudden truth that shakes things loose", "Let what was shaky fall, and build again on something honest.", "t"],
    rev: ["a change you can feel coming but have been holding back", "Face the crack now, gently, before it widens.", "c"]
  },
  "The Star": {
    up: ["hope and quiet renewal", "Let yourself believe that things can get better, because they can.", "s"],
    rev: ["hope that has worn thin", "Do one small thing today that feeds your hope.", "c"]
  },
  "The Moon": {
    up: ["uncertainty and feelings that aren't fully clear yet", "Hold off on big decisions while things still feel foggy.", "c"],
    rev: ["confusion that is beginning to clear", "Trust what is coming into focus now.", "t"]
  },
  "The Sun": {
    up: ["warmth, clarity and real joy", "Let yourself enjoy what is going well.", "s"],
    rev: ["joy that is there but clouded for now", "Look for the good that is already here, even if it feels faint.", "t"]
  },
  "Judgement": {
    up: ["a wake-up call and a second chance", "Answer the call you already know you have been hearing.", "t"],
    rev: ["self-judgement that keeps you from moving on", "Forgive yourself enough to take the next step.", "c"]
  },
  "The World": {
    up: ["completion, and arriving somewhere you have worked toward", "Honour how far you have come before you start the next chapter.", "s"],
    rev: ["a chapter that is almost, but not quite, finished", "Tie up the loose end that is still holding you back.", "t"]
  },

  "Ace of Wands": {
    up: ["a spark of new energy and inspiration", "Act on the idea while the spark is still fresh.", "s"],
    rev: ["a spark that hasn't quite caught yet", "Be patient with the idea and give it some air.", "t"]
  },
  "Two of Wands": {
    up: ["a bigger plan taking shape", "Look past where you are now and plan for where you want to be.", "s"],
    rev: ["fear of leaving what feels familiar", "Ask yourself whether safe is the same thing as right for you.", "c"]
  },
  "Three of Wands": {
    up: ["growth and opportunities on the horizon", "Keep watching for the opening you have been working toward.", "s"],
    rev: ["delays that test your patience", "Adjust the timeline without giving up on the goal.", "c"]
  },
  "Four of Wands": {
    up: ["celebration and a real sense of home", "Let yourself enjoy the milestone you have reached.", "s"],
    rev: ["unsettled ground at home or within yourself", "Look after the foundation before you build any higher.", "c"]
  },
  "Five of Wands": {
    up: ["friction and competing voices", "Pick the battle that actually matters and let the others go.", "c"],
    rev: ["conflict that is ready to ease", "Look for the common ground everyone has been missing.", "t"]
  },
  "Six of Wands": {
    up: ["recognition and well-earned confidence", "Accept the credit you have earned.", "s"],
    rev: ["worry about how others see you", "Measure yourself by your own standards for a while.", "c"]
  },
  "Seven of Wands": {
    up: ["the need to stand your ground", "Hold firm on what matters to you.", "t"],
    rev: ["feeling worn down from defending yourself", "Choose which fights are still worth your energy.", "c"]
  },
  "Eight of Wands": {
    up: ["things beginning to move quickly", "Keep up with the momentum and answer what comes in.", "s"],
    rev: ["rushing, or plans that have stalled", "Slow down enough to get the timing right.", "c"]
  },
  "Nine of Wands": {
    up: ["resilience after a long stretch", "Hold on a little longer, because you may be closer than you think.", "t"],
    rev: ["exhaustion from carrying too much for too long", "Put something down and let yourself rest.", "c"]
  },
  "Ten of Wands": {
    up: ["a heavy load you have been carrying alone", "Share the weight or set some of it aside.", "c"],
    rev: ["the chance to finally put a burden down", "Let go of what was never yours to carry.", "t"]
  },
  "Page of Wands": {
    up: ["curiosity and an eagerness to explore", "Follow your interest and see where it leads.", "s"],
    rev: ["enthusiasm without a clear direction", "Give your excitement a simple plan to land in.", "c"]
  },
  "Knight of Wands": {
    up: ["bold, passionate momentum", "Go after it, but keep an eye on where you are heading.", "s"],
    rev: ["impulsive energy that could burn out fast", "Think it through before you charge ahead.", "c"]
  },
  "Queen of Wands": {
    up: ["warm confidence and creative presence", "Show up as yourself, fully and warmly.", "s"],
    rev: ["confidence that has been knocked", "Reclaim the warmth you usually give everyone else.", "c"]
  },
  "King of Wands": {
    up: ["vision and steady leadership", "Take the lead and set the direction.", "s"],
    rev: ["pushing too hard or demanding too much", "Lead with vision rather than force.", "c"]
  },

  "Ace of Cups": {
    up: ["an open heart and the start of a new feeling", "Let yourself receive what is being offered.", "s"],
    rev: ["feelings that are being held back", "Give your emotions somewhere safe to go.", "c"]
  },
  "Two of Cups": {
    up: ["a real, mutual connection", "Meet the other person halfway.", "s"],
    rev: ["a connection that feels out of balance", "Talk honestly about what each of you needs.", "c"]
  },
  "Three of Cups": {
    up: ["friendship and shared joy", "Lean on the people who make you feel like yourself.", "s"],
    rev: ["tension or distance within a circle of people", "Notice who truly supports you and give your energy there.", "c"]
  },
  "Four of Cups": {
    up: ["emotional weariness, or missing what is being offered", "Look up from what has been disappointing you, because something new may be within reach.", "c"],
    rev: ["renewed interest after a flat stretch", "Say yes to what is stirring your interest again.", "t"]
  },
  "Five of Cups": {
    up: ["grief over what was lost", "Let yourself feel it, then turn toward what is still standing.", "c"],
    rev: ["acceptance slowly taking the place of regret", "Keep moving toward what remains.", "t"]
  },
  "Six of Cups": {
    up: ["tenderness and memories of the past", "Let the past comfort you without letting it hold you back.", "s"],
    rev: ["being held too tightly by the past", "Bring your attention back to the life in front of you.", "c"]
  },
  "Seven of Cups": {
    up: ["many choices and some wishful thinking", "Separate what is real from what is only appealing.", "c"],
    rev: ["clarity cutting through too many options", "Commit to the option that is actually within reach.", "t"]
  },
  "Eight of Cups": {
    up: ["walking away from what no longer fulfils you", "Give yourself permission to leave what feels empty.", "t"],
    rev: ["uncertainty about whether to stay or go", "Be honest about what is keeping you where you are.", "c"]
  },
  "Nine of Cups": {
    up: ["satisfaction, and wishes coming within reach", "Let yourself feel glad about what you have.", "s"],
    rev: ["a wish that hasn't brought the happiness you expected", "Look for what would truly satisfy you, not just what looks good.", "c"]
  },
  "Ten of Cups": {
    up: ["emotional fulfilment and a sense of belonging", "Invest in the people and the home that fill you up.", "s"],
    rev: ["a gap between the ideal and the way things really are", "Love what is real instead of waiting for it to be perfect.", "c"]
  },
  "Page of Cups": {
    up: ["a tender message or a new feeling", "Stay open to the gentle surprise.", "s"],
    rev: ["mixed signals and feelings that aren't settled", "Hold off on building a story from signals that aren't clear yet.", "c"]
  },
  "Knight of Cups": {
    up: ["a heartfelt offer", "Follow your heart, but check it against what is actually happening.", "s"],
    rev: ["moods and promises that may not hold", "Watch what is done more than what is said.", "c"]
  },
  "Queen of Cups": {
    up: ["compassion and emotional wisdom", "Trust your feelings, and look after yourself as kindly as you look after others.", "s"],
    rev: ["absorbing too much of other people's feelings", "Protect your energy and let others carry their own feelings.", "c"]
  },
  "King of Cups": {
    up: ["calm emotional steadiness", "Stay steady and kind, even when feelings run high.", "s"],
    rev: ["feelings that are being bottled up", "Let your feelings out somewhere safe, rather than letting them leak sideways.", "c"]
  },

  "Ace of Swords": {
    up: ["a breakthrough of clarity", "Say the true thing plainly.", "s"],
    rev: ["clouded thinking, or a hard truth being avoided", "Gather the facts before you decide.", "c"]
  },
  "Two of Swords": {
    up: ["a decision you have been putting off", "Take the blindfold off and look at both options honestly.", "c"],
    rev: ["too much information and pressure to choose", "Narrow it down to the one thing that matters most.", "t"]
  },
  "Three of Swords": {
    up: ["heartache that needs to be felt", "Let the hurt be real, because healing starts by admitting it.", "c"],
    rev: ["a wound that is beginning to heal", "Let go of the story that keeps reopening it.", "t"]
  },
  "Four of Swords": {
    up: ["a real need for rest and recovery", "Rest first. The answers will still be there when you come back.", "t"],
    rev: ["restlessness, or burnout from skipping rest", "Stop pushing and let yourself recover properly.", "c"]
  },
  "Five of Swords": {
    up: ["a conflict where winning may cost too much", "Ask whether being right is worth what it costs.", "c"],
    rev: ["the chance to make peace after conflict", "Reach for repair rather than the last word.", "t"]
  },
  "Six of Swords": {
    up: ["moving toward calmer waters", "Keep going, because the calmer place is ahead.", "t"],
    rev: ["trouble leaving something behind", "Pack lightly and leave what weighs you down.", "c"]
  },
  "Seven of Swords": {
    up: ["strategy, and maybe something that isn't being fully said", "Make sure everything is above board, including your own plans.", "c"],
    rev: ["a secret coming to light, or a change of heart", "Choose honesty, even when it is uncomfortable.", "t"]
  },
  "Eight of Swords": {
    up: ["feeling trapped by your own thoughts", "Notice that the way out is more open than it feels.", "c"],
    rev: ["the ties that kept you stuck beginning to loosen", "Take the first step out, because you are freer than you think.", "t"]
  },
  "Nine of Swords": {
    up: ["worry that keeps you up at night", "Write the worries down and look at them in daylight.", "c"],
    rev: ["fear beginning to ease", "Talk to someone so the worry stops circling.", "t"]
  },
  "Ten of Swords": {
    up: ["a painful ending that has reached its lowest point", "Know that from here, the way left to go is up.", "c"],
    rev: ["slowly getting back on your feet", "Take your recovery one day at a time.", "t"]
  },
  "Page of Swords": {
    up: ["curiosity and sharp observation", "Ask questions before you form conclusions.", "s"],
    rev: ["gossip or careless words", "Check where your information is coming from.", "c"]
  },
  "Knight of Swords": {
    up: ["fast, determined thinking", "Act decisively, but don't run over anyone on the way.", "t"],
    rev: ["rushing in without a plan", "Slow down before your words get ahead of you.", "c"]
  },
  "Queen of Swords": {
    up: ["clear boundaries and honest perception", "Trust your clear head and speak plainly.", "s"],
    rev: ["coldness or harshness creeping in", "Be honest, and be kind while you do it.", "c"]
  },
  "King of Swords": {
    up: ["clear judgement and fair authority", "Decide with logic and fairness.", "s"],
    rev: ["cold logic that leaves the heart out", "Make room for feeling alongside the facts.", "c"]
  },

  "Ace of Pentacles": {
    up: ["something solid: a beginning you can actually build on", "Plant the seed and tend it.", "s"],
    rev: ["an opportunity that needs better planning", "Get the practical details in place first.", "c"]
  },
  "Two of Pentacles": {
    up: ["juggling several demands at once", "Keep your balance by deciding what comes first.", "t"],
    rev: ["feeling stretched too thin", "Drop one thing so you can do the rest well.", "c"]
  },
  "Three of Pentacles": {
    up: ["teamwork, and skill that is being recognised", "Work with people who bring what you lack.", "s"],
    rev: ["teamwork that isn't quite working", "Clear up who is doing what.", "c"]
  },
  "Four of Pentacles": {
    up: ["holding on tight in order to feel secure", "Protect what matters without closing your hands completely.", "t"],
    rev: ["fear of loss, or a need to loosen your grip", "Let a little go so new things can come in.", "c"]
  },
  "Five of Pentacles": {
    up: ["a hard season of feeling left out in the cold", "Ask for help, because the door is closer than it looks.", "c"],
    rev: ["recovery after a difficult stretch", "Accept the help that is now being offered.", "t"]
  },
  "Six of Pentacles": {
    up: ["generosity and fair exchange", "Give and receive in a way that keeps things fair.", "s"],
    rev: ["help that comes with strings attached", "Look closely at what is being asked in return.", "c"]
  },
  "Seven of Pentacles": {
    up: ["patient effort that takes time to show results", "Keep going, because the growth is happening even if you can't see it yet.", "t"],
    rev: ["frustration with slow progress", "Check whether your effort is going to the right place.", "c"]
  },
  "Eight of Pentacles": {
    up: ["steady practice and real craftsmanship", "Keep practising, because skill is built one day at a time.", "s"],
    rev: ["repetitive work without much meaning", "Bring your heart back into the work, or rethink it.", "c"]
  },
  "Nine of Pentacles": {
    up: ["independence and well-earned comfort", "Enjoy what your effort has built.", "s"],
    rev: ["stretching too far for security", "Look after your own stability first.", "c"]
  },
  "Ten of Pentacles": {
    up: ["lasting security and family support", "Build for the long term.", "s"],
    rev: ["money or family matters causing strain", "Sort out the practical tangles one at a time.", "c"]
  },
  "Page of Pentacles": {
    up: ["a practical new start and a willingness to learn", "Start small and learn as you go.", "s"],
    rev: ["plans that never quite get started", "Do the first small thing today.", "c"]
  },
  "Knight of Pentacles": {
    up: ["slow, steady, reliable progress", "Keep a steady pace, because it is working.", "s"],
    rev: ["being stuck in a routine", "Change one habit that has gone stale.", "c"]
  },
  "Queen of Pentacles": {
    up: ["practical care and a steady, nurturing presence", "Look after the basics, starting with yourself.", "s"],
    rev: ["neglecting yourself while caring for everyone else", "Put yourself back on your own list.", "c"]
  },
  "King of Pentacles": {
    up: ["stability, abundance and wise stewardship", "Make the steady, sensible choice.", "s"],
    rev: ["a focus on control or money that crowds out what matters", "Remember what the security is really for.", "c"]
  }
};

/* ---------- Helpers ---------- */

function seededRandom(seedText) {
  let h = 2166136261;
  for (let i = 0; i < seedText.length; i++) {
    h ^= seedText.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return function() {
    h += 0x6D2B79F5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function readerName(item) {
  const card = item.card;
  const major = (deckByName[card] || {}).group === "Major Arcana";
  let base;
  if (card.startsWith("The ")) base = card;
  else if (card === "Wheel of Fortune") base = "the Wheel of Fortune";
  else if (major) base = card;
  else base = "the " + card;
  return base + (item.direction === "reversed" ? " reversed" : "");
}

function shortCardName(item) {
  return item.card.replace(/^The /, "") + (item.direction === "reversed" ? " reversed" : "");
}

function voiceFor(item) {
  const entry = readerVoice[item.card];
  const side = entry ? (item.direction === "reversed" ? entry.rev : entry.up) : ["what this card is bringing forward", "Take what feels true from this card.", "t"];
  return {
    card: item.card,
    heart: side[0],
    guide: side[1],
    tone: side[2],
    name: readerName(item),
    Name: readerName(item).charAt(0).toUpperCase() + readerName(item).slice(1),
    suit: (deckByName[item.card] || {}).group || ""
  };
}

function detectTopic(question) {
  const q = " " + (question || "").toLowerCase().replace(/[^a-z' ]/g, " ") + " ";
  const has = function(words) {
    return words.some(function(w) { return q.indexOf(" " + w + " ") !== -1 || q.indexOf(" " + w + "s ") !== -1; });
  };
  if (has(["health", "sick", "illness", "doctor", "diagnosis", "surgery", "pregnant", "pregnancy"])) return "health";
  if (has(["love", "relationship", "partner", "boyfriend", "girlfriend", "husband", "wife", "crush", "ex", "dating", "date", "marriage", "married", "soulmate", "romance", "connection", "he", "him", "she", "her", "they", "them"])) return "love";
  if (has(["job", "work", "career", "boss", "business", "interview", "promotion", "offer", "client", "coworker", "company", "school", "study", "exam"])) return "work";
  if (has(["money", "finance", "finances", "financial", "debt", "rent", "income", "pay", "bills", "savings", "afford", "loan"])) return "money";
  if (has(["family", "mom", "mother", "dad", "father", "son", "daughter", "kids", "child", "children", "sister", "brother", "home", "friend", "friendship"])) return "family";
  if (has(["should", "decide", "decision", "choose", "choice", "stay", "leave", "move", "or"])) return "decision";
  if (has(["me", "myself", "my", "i"])) return "self";
  return "general";
}

const topicWords = {
  love: "this connection",
  work: "your work",
  money: "your finances",
  family: "the people close to you",
  decision: "this decision",
  self: "where you are right now",
  health: "what you are going through",
  general: "this situation"
};

const topicGuidance = {
  love: [
    "Pay attention to how you feel around this person over time, not only in the high moments.",
    "Notice whether the care you give is coming back to you in a way you can actually feel.",
    "Let actions, more than words or hopes, show you where this stands."
  ],
  work: [
    "Think in terms of the next step, not the whole career.",
    "Choose the option that supports the life you want, not only the title or the pay.",
    "Give your effort to what is actually moving you forward."
  ],
  money: [
    "Small, steady changes count for more here than one big fix.",
    "Look at the numbers calmly, without judging yourself for them.",
    "Protect your peace of mind as carefully as you protect your budget."
  ],
  family: [
    "You can care deeply about others and still keep your own needs in view.",
    "Say what you need simply and kindly, without carrying everyone's feelings for them.",
    "Make room for the relationships that feel safe and easy to be yourself in."
  ],
  decision: [
    "Whichever way you go, choose it on purpose rather than letting worry choose for you.",
    "Ask yourself which choice you would make if fear weren't in the room.",
    "You don't need certainty to make a good choice. You need honesty about what matters to you."
  ],
  self: [
    "Be as patient with yourself as you would be with someone you love.",
    "Notice what gives you energy and what quietly takes it away.",
    "You are allowed to grow slowly."
  ],
  health: [
    "For anything to do with your health, let this be a moment of reflection, and lean on your doctor or care team for real answers.",
    "Let this reading be a comfort and a reflection, and leave the medical questions with the people trained to answer them."
  ],
  general: [
    "Focus on the part of this that is actually within your control.",
    "Notice what keeps repeating, because that is usually where the lesson is.",
    "Trust what you already know, even if you haven't said it out loud yet."
  ]
};

const closings = [
  "You don't have to solve all of it today. One honest step is enough for now.",
  "Nothing here is set in stone. The cards show the current you are in, and you still choose how you move with it.",
  "Trust yourself a little more than you have been. You know more than you think you do.",
  "Take what feels true from this, and let the rest go.",
  "Go gently with this. Clarity tends to come once you take the first step, not before."
];

const directClosings = [
  "Nothing here is fixed, but the next step is yours to take.",
  "You already know more than you are admitting to yourself. Act on it.",
  "The cards have shown you the pattern. What you do with it is up to you."
];

function lowerFirst(text) {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function pickFrom(rand, list) {
  return list[Math.floor(rand() * list.length)];
}

/* ---------- Building the message ---------- */

function openingParagraph(v, layout, question, rand, topic) {
  const ask = "";
  const about = topicWords[topic];

  if (layout === "one") {
    const c = v[0];
    const base = ask + pickFrom(rand, [
      `${c.Name} came forward on its own for ${about}, and it is speaking of ${c.heart}.`,
      `For ${about}, a single card stepped forward: ${c.name}. It is speaking of ${c.heart}.`
    ]);
    const feel = {
      s: "That is a reassuring card to see here. It suggests you have more working in your favour than it may feel like right now.",
      c: "This isn't a card to be afraid of. It is the reading gently pointing to the place that needs your care.",
      t: "This feels like a card of transition. Something is shifting, and you don't need it all figured out to move with it."
    }[c.tone];
    return base + " " + feel;
  }

  if (layout === "three") {
    let text = ask + `This reading tells a story. It begins with ${v[0].heart}. Right now, the focus has moved to ${v[1].heart}. And where things seem to be heading is ${v[2].heart}.`;
    if (v[0].tone === "c" && v[2].tone !== "c") text += " That is an encouraging shape for a reading, because what has been hard is not where this ends.";
    else if (v[2].tone === "c") text += " That future card isn't a fixed outcome. It shows where things may drift if nothing changes, which means you still have a say.";
    else if (v[0].tone === "s" && v[2].tone === "s") text += " There is a thread of support running all the way through this, and it is worth trusting.";
    return text;
  }

  if (layout === "situation") {
    let text = ask + `At the heart of ${about} is ${v[0].heart}. What is making it harder is ${v[1].heart}. And the way through, according to the cards, begins with ${v[2].heart}.`;
    if (v[2].tone === "s") text += " That is good news. The advice card is a supportive one, so the way forward may be simpler than it feels.";
    return text;
  }

  if (layout === "love") {
    let text = ask + `On their side, the cards show ${v[0].heart}. On yours, they show ${v[1].heart}. Together, this connection seems to be moving toward ${v[2].heart}.`;
    if (v[0].tone === "s" && v[1].tone === "s") text += " There is genuine warmth on both sides here.";
    else if (v[0].tone !== v[1].tone) text += " You may be showing up for this differently from each other right now, and that difference is worth talking about rather than guessing at.";
    return text;
  }

  if (layout === "career") {
    let text = ask + `In your work right now, the cards show ${v[0].heart}. What makes it harder is ${v[1].heart}. And the step they point you toward is ${v[2].heart}.`;
    if (v[1].tone === "c" && v[2].tone === "s") text += " The challenge is real, but it isn't the whole story. The next step card is a strong one.";
    return text;
  }

  if (layout === "yesno") {
    const a = v[0];
    let lean;
    if (a.tone === "s") lean = `The cards lean toward yes. ${a.Name} brings ${a.heart} to the centre of this.`;
    else if (a.tone === "c") lean = `The cards lean toward not yet, or not in this way. ${a.Name} brings in ${a.heart}, which suggests something needs attention first.`;
    else lean = `This answer is less a yes or no and more a "that depends." ${a.Name} points to ${a.heart}, which tells me things are still shifting.`;
    return ask + lean + ` The reason it is leaning this way has to do with ${v[1].heart}.`;
  }

  // Celtic Cross
  return ask + `At the centre of this reading I see ${v[0].heart}, crossed by ${v[1].heart}. Underneath it all, I see ${v[2].heart}, and that may be the real root of what you have been feeling.`;
}

function patternParagraph(v, layout, rand) {
  const lines = [];
  const n = v.length;

  if (n >= 3) {
    const majors = v.filter(function(x) { return x.suit === "Major Arcana"; }).length;
    if (majors >= Math.ceil(n / 2)) {
      lines.push("With so many Major Arcana cards, this is more than a passing phase. It is a meaningful chapter, and it is asking something real of you.");
    } else {
      const counts = {};
      v.forEach(function(x) { counts[x.suit] = (counts[x.suit] || 0) + 1; });
      const top = Object.keys(counts).filter(function(s) { return s !== "Major Arcana"; })
        .sort(function(a, b) { return counts[b] - counts[a]; })[0];
      if (top && counts[top] >= Math.max(2, Math.ceil(n * 0.4))) {
        lines.push({
          Wands: "With so much Wands energy here, this is about passion and action, and what you are willing to go after.",
          Cups: "The Cups running through this reading say that feelings are at the heart of it, more than logic or practicalities.",
          Swords: "So many Swords suggest that much of this is happening in your thoughts. Some of the heaviness may come from what your mind keeps replaying, not only from what is actually in front of you.",
          Pentacles: "The Pentacles here keep bringing things back to the practical: time, money, effort, and what you can actually build."
        }[top]);
      }
    }

    const reversed = v.filter(function(x) { return x.reversedCard; }).length;
    if (reversed >= Math.ceil(n / 2)) {
      lines.push("Several cards came out reversed. That usually isn't bad news. It often points to energy that is blocked, held inward, or still working itself out.");
    }
  }

  if (layout === "celtic") {
    const past = v[3], near = v[5], outer = v[7], hopes = v[8], outcome = v[9];
    lines.push(`Looking back, I see ${past.heart} in how you arrived here. In the near future, you may notice ${near.heart}. Around you, the cards show ${outer.heart}, and in your own hopes and fears they show ${hopes.heart}.`);
    lines.push(`The outcome card speaks of ${outcome.heart}. Please hold that lightly. It shows where the current energy may lead, not something that is already decided.`);
  } else if (n >= 3) {
    const support = v.find(function(x) { return x.tone === "s"; });
    const care = v.find(function(x) { return x.tone === "c"; });
    if (support && care) {
      lines.push(pickFrom(rand, [
        `${support.Name} is the steadying card here. It shows there is something good to work with. ${care.Name} is the part asking for your attention, and it is easier to face once you know the support is there.`,
        `There is a gentle tension between ${support.name} and ${care.name}. One reminds you of what is working, and the other shows what still needs tending. Both are true at once.`
      ]));
    } else if (!care && n >= 3) {
      lines.push("There isn't a single hard card in this spread, which is worth noticing. Let yourself take some comfort from that.");
    } else if (!support && n >= 3) {
      lines.push("This is a tender spread, and it may reflect how heavy things have felt lately. That doesn't mean things stay this way. It means the cards are meeting you honestly where you are.");
    }
  }

  return lines.join(" ");
}

function guidanceParagraph(v, layout, rand, topic, style) {
  // The spoken script closes on the advice card, so the written message
  // draws its guidance from a different card to avoid saying the same thing twice.
  const adviceIndex = { one: 0, three: 1, situation: 2, love: 1, career: 2, yesno: 2, celtic: 6 }[layout] || 0;
  const others = v.filter(function(x, i) { return i !== adviceIndex; });
  const g = others.find(function(x) { return x.tone === "c"; }) || others.find(function(x) { return x.tone === "t"; }) || others[0];

  let core;
  if (!g) {
    core = {
      s: "Let this card be a reminder of what is already on your side, even on the days it is hard to see.",
      c: "Be kind to yourself as you look at this. Naming something honestly is often the first step to easing it.",
      t: "Change can feel unsettling even when it is good for you, so give yourself time to adjust."
    }[v[0].tone];
  } else if (g.tone === "c") {
    core = pickFrom(rand, [
      `${g.Name} is the card I would keep closest as you go, because it shows what needs tending. ${g.guide}`,
      `If there is one place to put your care, it is where ${g.name} points. ${g.guide}`
    ]);
  } else {
    core = pickFrom(rand, [
      `${g.Name} is worth keeping in mind as you go. ${g.guide}`,
      `Let ${g.name} guide you here. ${g.guide}`
    ]);
  }

  const direct = style === "Honest and Direct";
  const ending = direct ? pickFrom(rand, directClosings) : pickFrom(rand, closings);
  return `${core} ${pickFrom(rand, topicGuidance[topic])} ${ending}`;
}

function buildReadingMessage(reading) {
  const rand = seededRandom(reading.id + "|message|" + reading.style);
  const v = reading.cards.map(function(item) {
    const x = voiceFor(item);
    x.reversedCard = item.direction === "reversed";
    return x;
  });
  const topic = styleTopic(detectTopic(reading.question), reading.style);
  const paragraphs = [openingParagraph(v, reading.layout, reading.question, rand, topic)];

  if (reading.style !== "Quick Phone Reading") {
    const pattern = patternParagraph(v, reading.layout, rand);
    if (pattern) paragraphs.push(pattern);
  }

  paragraphs.push(guidanceParagraph(v, reading.layout, rand, topic, reading.style));
  return paragraphs;
}

function buildClarifierMessage(reading) {
  if (!reading.clarifier) return "";
  const rand = seededRandom(reading.id + "|clarifier|" + reading.clarifier.card);
  const c = voiceFor(reading.clarifier);
  const spread = reading.cards.map(voiceFor);
  const supportive = spread.filter(function(x) { return x.tone === "s"; }).length;
  const careful = spread.filter(function(x) { return x.tone === "c"; }).length;

  const kind = {
    s: pickFrom(rand, ["a lovely", "a reassuring", "a welcome"]),
    c: pickFrom(rand, ["an honest", "a thoughtful", "a useful"]),
    t: pickFrom(rand, ["a meaningful", "an interesting", "a telling"])
  }[c.tone];

  let relation;
  if (c.tone === "s" && careful > supportive) {
    relation = "It softens the harder cards in this spread and reminds you that there is support here too.";
  } else if (c.tone === "c" && supportive > careful) {
    relation = "It doesn't cancel the good news in this reading. It simply asks you to keep an eye on this one thing as you move forward.";
  } else if (c.tone === "s") {
    relation = "It confirms the hopeful thread running through the whole reading.";
  } else if (c.tone === "c") {
    relation = "It confirms which part of this is asking for your attention, so you don't have to guess.";
  } else {
    relation = "It suggests the situation is still in motion, so stay open to it changing shape.";
  }

  return `${c.Name} is ${kind} clarifier because it brings in ${c.heart}. ${relation} If you take one thing from it, let it be this: ${lowerFirst(c.guide)}`;
}

/* ---------- The spoken reading (Say This) ---------- */
// A reader's observation for every card face, written to be read aloud: [upright, reversed]

const readerReflection = {
  "The Fool": ["There's a part of you that wants to leap, even without every answer, and I think that part deserves to be heard.", "I sense some hesitation here, maybe a wish to jump without quite knowing where you'd land."],
  "The Magician": ["This tells me you have more skill and resources at your fingertips than you're giving yourself credit for.", "I wonder if your energy has been spread across so many things that none of them are getting your best."],
  "The High Priestess": ["It feels like you already know something deep down, even if you haven't put it into words yet.", "I get the sense that other people's opinions have been louder than your own instincts lately."],
  "The Empress": ["There's real potential for growth here, the kind that comes from being nurtured rather than pushed.", "It makes me wonder whether you've been looking after everyone except yourself."],
  "The Emperor": ["This feels like a call for structure: a plan, and some solid ground under your feet.", "I wonder if things have felt either too controlled or not steady enough to lean on."],
  "The Hierophant": ["There may be real value in advice from someone experienced, or in a tradition that has served you well.", "It feels like you might be outgrowing some of the rules you were raised with, and that's allowed."],
  "The Lovers": ["This is about a choice that sits right with your heart and your values at the same time.", "I sense a tug between what you want and what you believe is right, and that can be exhausting."],
  "The Chariot": ["There's real drive here. Once you decide where you're going, you can get there.", "It feels like you've been pulled in two directions, and it's hard to make progress that way."],
  "Strength": ["This tells me you're stronger than you feel, and that your gentleness is part of that strength.", "I wonder if self-doubt has been talking a little too loudly lately."],
  "The Hermit": ["It feels like you need some quiet, some time away from the noise so you can hear yourself think.", "I sense you may have pulled away from people more than is good for you right now."],
  "Wheel of Fortune": ["Things are turning. Not everything here is in your hands, and that can actually be a relief.", "It makes me wonder whether you've found yourself in a familiar loop, the same situation in a slightly different shape."],
  "Justice": ["This is about honesty and fairness, and making the choice you can stand behind.", "I sense something here hasn't been dealt with fairly, and it may still be sitting with you."],
  "The Hanged Man": ["This feels like a pause, and pauses aren't wasted time. Sometimes they show us what we couldn't see before.", "I wonder if the waiting has gone on long enough that it's starting to feel like being stuck."],
  "Death": ["Please don't let the name frighten you. This is about something ending so that something better has room to begin.", "It feels like you might be holding on to something that has already told you it's finished."],
  "Temperance": ["There's a healing, steadying quality here, a reminder that balance usually comes slowly.", "I sense things have tipped a little too far one way, and you may be feeling it."],
  "The Devil": ["It makes me wonder whether there's a habit, a pattern or a person that has more hold on you than you'd like.", "This feels like a loosening, as though something that held you is finally letting go."],
  "The Tower": ["Something may have been shaken up recently. That's uncomfortable, but it may be clearing the way for something truer.", "I sense a change you can feel coming but haven't quite let happen yet."],
  "The Star": ["This is such a hopeful card to see. It feels like healing and quiet renewal are close.", "I wonder if hope has been feeling thin lately, like you've been running on very little."],
  "The Moon": ["Things may feel foggy right now, and it's okay not to have clarity yet.", "It feels like the fog is starting to lift, and what's real is coming into focus."],
  "The Sun": ["This brings so much warmth into the reading. There's genuine joy and clarity available here.", "The good is still here, even if it's been a little clouded over lately."],
  "Judgement": ["This feels like a wake-up call, a moment where you're being invited to rise into something new.", "I wonder if you've been judging yourself harder than anyone else ever would."],
  "The World": ["This feels like completion, like you've come further than you might realise.", "It feels like you're almost there, with one loose end still asking to be tied up."],

  "Ace of Wands": ["There's a spark here, a new idea or burst of energy that wants your attention.", "I sense an idea that hasn't quite caught fire yet, and that's okay. It may just need more time."],
  "Two of Wands": ["It feels like you're looking at the bigger picture and starting to plan beyond where you are now.", "I wonder if staying with what's familiar has felt safer than stepping into the unknown."],
  "Three of Wands": ["This tells me there are possibilities on the horizon, things you've worked toward starting to come back to you.", "It feels like things are taking longer than you hoped, and that can be frustrating."],
  "Four of Wands": ["There's something here worth celebrating, a sense of home and of having arrived.", "I sense things at home, or within yourself, may feel a little unsettled right now."],
  "Five of Wands": ["I feel there's a lot competing for your attention right now. It may be difficult to know which direction deserves your energy.", "I sense the tension around you is ready to ease, if everyone can find some common ground."],
  "Six of Wands": ["This tells me you've earned some recognition, and it's okay to let yourself feel proud of that.", "I wonder if you've been worrying more about how this looks to others than how it feels to you."],
  "Seven of Wands": ["This feels like a time to hold your ground and protect what matters to you.", "I sense you might be tired of defending yourself, of always having to explain your position."],
  "Eight of Wands": ["Things may start moving quickly, and it feels like momentum is on your side.", "It feels like either things have stalled, or everything has been rushing at you at once."],
  "Nine of Wands": ["You've been through a lot, and this tells me you're more resilient than you realise.", "I wonder if you're running on empty after carrying this for so long."],
  "Ten of Wands": ["It makes me wonder whether you've been carrying far more than one person should.", "This feels like permission to finally put some of that weight down."],
  "Page of Wands": ["There's a curious, eager energy here, a willingness to explore something new.", "I sense excitement that hasn't found a clear direction yet."],
  "Knight of Wands": ["This brings bold, passionate energy, the kind that wants to go after things.", "It feels like there's a rush of energy here that could burn out if it isn't given some direction."],
  "Queen of Wands": ["This is warm, confident energy, a reminder of how magnetic you are when you show up as yourself.", "I wonder if your confidence has taken a knock recently."],
  "King of Wands": ["This is about remembering your own vision and giving yourself permission to take the lead in your life.", "It feels like someone, maybe even you, has been pushing harder than the situation needs."],

  "Ace of Cups": ["There's an openness of heart here, a new feeling or connection wanting to begin.", "I sense feelings that are being held back, perhaps because it hasn't felt safe to let them out."],
  "Two of Cups": ["This is a lovely card for connection. It speaks of something mutual, where both people meet in the middle.", "I wonder if the give and take here has felt a little uneven."],
  "Three of Cups": ["There's friendship and shared joy here, the people who make you feel like yourself.", "It feels like there may be some tension or distance in your circle right now."],
  "Four of Cups": ["It makes me wonder whether you've been feeling a bit flat, maybe missing something that's being offered to you.", "I sense your interest coming back after a long, flat stretch."],
  "Five of Cups": ["There's some grief here, and I want to honour that. Something mattered, and its loss is real.", "It feels like you're slowly making peace with what happened."],
  "Six of Cups": ["There's tenderness and nostalgia here, a pull toward something from the past.", "I wonder if the past has been holding on to you a little too tightly."],
  "Seven of Cups": ["It feels like there are lots of options, and some of them may be more daydream than reality.", "This tells me clarity is cutting through, and you're starting to see which option is real."],
  "Eight of Cups": ["This feels like walking away from something that no longer fills you up, and that takes courage.", "I sense you're torn between staying and going."],
  "Nine of Cups": ["This is often called the wish card, and it brings real contentment into the reading.", "I wonder if something you wished for hasn't felt the way you expected it to."],
  "Ten of Cups": ["There's a deep sense of belonging here, of love and home.", "It feels like there's a gap between how you hoped things would look and how they actually are."],
  "Page of Cups": ["There's a sweet, tender energy here, maybe a message or a feeling that surprises you.", "I sense some mixed signals, and it's hard to know what to make of them."],
  "Knight of Cups": ["This feels like a heartfelt offer, someone or something arriving with real feeling.", "It makes me wonder whether there have been promises that didn't quite hold."],
  "Queen of Cups": ["This is deeply compassionate energy. You feel things deeply, and that is a gift.", "I wonder if you've been absorbing everyone else's feelings until there's no room left for your own."],
  "King of Cups": ["This brings a calm, steady emotional presence, someone who can hold feelings without being swept away by them.", "It feels like feelings may have been bottled up, and they tend to find a way out eventually."],

  "Ace of Swords": ["This tells me a moment of real clarity is here, a truth you can finally see plainly.", "I sense things have felt a bit clouded, or there's a hard truth that's been easier to avoid."],
  "Two of Swords": ["It feels like there's a decision you've been putting off, maybe because both options carry a cost.", "I sense you're being pulled by too much information and too much pressure to choose."],
  "Three of Swords": ["There's heartache here, and I don't want to rush past it. That hurt is real.", "It feels like a wound that is beginning to heal, slowly but surely."],
  "Four of Swords": ["This tells me you need rest, real rest, before you make any big moves.", "I wonder if you've been pushing through when your body and mind are asking you to stop."],
  "Five of Swords": ["It feels like there's been conflict where even winning might not feel like winning.", "I sense there's a chance to make peace after a difficult stretch."],
  "Six of Swords": ["This feels like moving toward calmer waters, leaving the roughest part behind you.", "I sense something is making it hard to fully leave the past behind."],
  "Seven of Swords": ["It makes me wonder whether something isn't being said openly, by someone else or even by you.", "It feels like something hidden is coming to light, or someone is having a change of heart."],
  "Eight of Swords": ["I wonder if you've been feeling trapped, when the way out is actually more open than it seems.", "This tells me the ties that kept you stuck are finally loosening."],
  "Nine of Swords": ["It makes me wonder whether you've been carrying more worry than you let other people see. Sometimes we spend so much time thinking about what could go wrong that we lose sight of what we're actually capable of.", "I sense the worry is starting to ease, even if it hasn't fully let go."],
  "Ten of Swords": ["This feels like the lowest point of something painful, and the thing about a lowest point is that the only way left to go is up.", "It feels like you're slowly getting back on your feet."],
  "Page of Swords": ["There's a sharp, curious mind at work here, asking questions and noticing things.", "I wonder if gossip or careless words have been stirring things up."],
  "Knight of Swords": ["This brings fast, determined energy, someone ready to act on what they think.", "It feels like things may be rushing ahead before there's a real plan."],
  "Queen of Swords": ["This is clear-eyed, honest energy. You see things as they are.", "I sense some coldness or sharpness creeping in, maybe from protecting yourself for so long."],
  "King of Swords": ["This brings clear thinking and fairness, the ability to make a sound decision.", "I wonder if logic has been leaving the heart out of things lately."],

  "Ace of Pentacles": ["It brings the message down to earth. There may be a practical opportunity or a fresh beginning worth paying attention to.", "I sense an opportunity here that needs a little more planning before it can grow."],
  "Two of Pentacles": ["It feels like you've been juggling a lot, trying to keep everything in the air at once.", "I wonder if you've been stretched far too thin."],
  "Three of Pentacles": ["This tells me working with others, and being recognised for your skill, matters here.", "It feels like the teamwork around you hasn't been working as well as it could."],
  "Four of Pentacles": ["I sense you've been holding on tightly, maybe because security has felt so important.", "It feels like fear of losing something might be making you grip harder than you need to."],
  "Five of Pentacles": ["It makes me wonder whether you've been going through a hard season, feeling a bit left out in the cold.", "This tells me things are starting to recover after a difficult stretch."],
  "Six of Pentacles": ["There's generosity here, a fair exchange of giving and receiving.", "I wonder if some help has come with strings attached."],
  "Seven of Pentacles": ["This feels like patient effort, the kind that takes time before you see the results.", "I sense some frustration with how slowly things are moving."],
  "Eight of Pentacles": ["This is about steady practice, getting better at something one day at a time.", "It feels like the work has become repetitive, and maybe a little empty."],
  "Nine of Pentacles": ["There's independence and well-earned comfort here. You've built something real.", "I wonder if you've been stretching yourself too far just to feel secure."],
  "Ten of Pentacles": ["This brings a sense of lasting security, of family and roots that hold.", "It feels like money or family matters may have been causing some strain."],
  "Page of Pentacles": ["There's a practical, eager energy here, a willingness to start small and learn.", "I sense plans that keep getting put off, the first step that never quite happens."],
  "Knight of Pentacles": ["This brings slow, steady, reliable progress. Not flashy, but it works.", "It feels like you might be stuck in a routine that has stopped serving you."],
  "Queen of Pentacles": ["This brings a grounded, nurturing presence, someone who takes good care of the basics.", "I wonder if you've been caring for everyone else and leaving yourself off the list."],
  "King of Pentacles": ["This is steady, abundant energy, the kind that builds security wisely.", "It feels like there may be so much focus on control or money that what really matters gets crowded out."]
};

const positionPhrase = {
  "Main Message": "as your main message",
  "Past": "in your past",
  "Present": "right in your present",
  "Future": "in the future position",
  "Situation": "at the heart of the situation",
  "Obstacle": "in the obstacle position",
  "Advice": "as your advice",
  "Their Energy": "for their energy",
  "Your Energy": "for your energy",
  "Where It Is Going": "for where this is going",
  "Current Work Energy": "in your current work energy",
  "Challenge": "in your challenge position",
  "Best Next Step": "as your best next step",
  "Answer": "as the answer card",
  "Why": "explaining why",
  "Present Situation": "at the centre of your present situation",
  "Root Cause": "at the root of it all",
  "Recent Past": "in your recent past",
  "Possible Outcome": "as a possible outcome",
  "Near Future": "in the near future",
  "Your Power": "in the place of your own power",
  "Outside Influence": "as an outside influence",
  "Hopes and Fears": "in your hopes and fears",
  "Final Outcome": "as the final outcome"
};

function reflectionFor(item) {
  const r = readerReflection[item.card];
  if (!r) return "";
  return item.direction === "reversed" ? r[1] : r[0];
}

function spokenOpener(style, question, about, rand) {
  const ask = question ? `You asked, “${question}” ` : "";
  const lines = {
    "Professional Reader": [`Okay, let's take a look at what your cards are telling us about ${about}.`, `Alright, let's see what your cards have to say about ${about}.`],
    "Warm and Comforting": [`Let's take a gentle look at what your cards have to say about ${about}. Take a breath. There's nothing here to be afraid of.`, `Let's sit with your cards for a moment and see what they want you to know about ${about}.`],
    "Honest and Direct": [`I'm going to be straight with you, because I think that's what helps most. Let's look at what your cards are saying about ${about}.`, `Let's get right into it and look at what your cards are really saying about ${about}.`],
    "Mystical": [`Let's settle in and see what's been waiting in these cards for you about ${about}.`, `There's something quietly speaking through these cards about ${about}. Let's listen to it together.`],
    "Love Reading": [`Let's look at what your cards are saying about matters of the heart, and about ${about}.`, `Let's see what your cards want you to know about love, and about ${about}.`],
    "Career and Money": [`Let's look at what your cards have to say about ${about}, and keep it practical.`, `Let's see what your cards are showing about ${about} and the path ahead.`],
    "Quick Phone Reading": [`Let's see what your cards are saying.`]
  };
  return ask + pickFrom(rand, lines[style] || lines["Professional Reader"]);
}

function introduceCard(v, item, index, prev, rand) {
  const pos = positionPhrase[item.position] || ("in the " + item.position.toLowerCase() + " position");
  if (index === 0) {
    return pickFrom(rand, [
      `The first thing I notice is ${v.name} showing up ${pos}.`,
      `Right away, I see ${v.name} ${pos}.`
    ]);
  }
  if (prev && prev.tone === "c" && v.tone === "s") {
    return pickFrom(rand, [
      `But here's where I really like your reading. You've got ${v.name} ${pos}.`,
      `And then there's a lovely shift, because ${v.name} comes in ${pos}.`
    ]);
  }
  if (prev && prev.tone === "s" && v.tone === "c") {
    return pickFrom(rand, [
      `Now, ${v.name} ${pos} brings in a different note.`,
      `Then ${v.name} shows up ${pos}, and this is where things get a little more tender.`
    ]);
  }
  return pickFrom(rand, [
    `And with ${v.name} sitting ${pos}, the picture fills out a little more.`,
    `Then we have ${v.name} ${pos}.`,
    `Next, ${v.name} is ${pos}.`
  ]);
}

function clarifierSpoken(reading, rand) {
  const c = voiceFor(reading.clarifier);
  const spread = reading.cards.map(voiceFor);
  const supportive = spread.filter(function(x) { return x.tone === "s"; }).length;
  const careful = spread.filter(function(x) { return x.tone === "c"; }).length;
  const kind = { s: "a beautiful addition", c: "an honest addition", t: "a meaningful addition" }[c.tone];

  let relation;
  if (c.tone === "s" && careful > supportive) relation = "It softens the harder cards and reminds you that you aren't without support here.";
  else if (c.tone === "c" && supportive > careful) relation = "It doesn't take away from the good in this reading. It just asks you to keep an eye on this one thing.";
  else if (c.tone === "s") relation = "It backs up the hopeful thread that's been running through everything.";
  else if (c.tone === "c") relation = "It tells me this really is the part that needs your attention.";
  else relation = "It tells me things are still in motion, so stay open to how this unfolds.";

  return `And your ${shortCardName(reading.clarifier)} clarifier is ${kind}. ${reflectionFor(reading.clarifier)} ${relation}`;
}

const spokenClosings = [
  "You don't need to have your whole future figured out. You just need to take that first manageable step.",
  "Be gentle with yourself as you go. You're doing better than you think.",
  "Nothing here is set in stone, and you still get a say in what happens next.",
  "Let that be enough for now. One clear step at a time."
];

const spokenDirectClosings = [
  "I think you already know what your next move is. Trust it.",
  "Don't wait for the perfect moment. Take the step that's in front of you.",
  "This is yours to act on now. You have more say in this than you think."
];

function styleTopic(topic, style) {
  if (topic === "general" || topic === "self") {
    if (style === "Love Reading") return "love";
    if (style === "Career and Money") return "work";
  }
  return topic;
}

function buildSpokenReading(reading) {
  const rand = seededRandom(reading.id + "|spoken|" + reading.style + "|" + (reading.clarifier ? reading.clarifier.card : ""));
  const style = reading.style;
  const topic = styleTopic(detectTopic(reading.question), style);
  const about = reading.question ? "it" : topicWords[topic];
  const v = reading.cards.map(voiceFor);
  const paragraphs = [spokenOpener(style, reading.question, about, rand)];
  let reversedNoted = false;

  function reversedNote(item) {
    if (item.direction === "reversed" && !reversedNoted && style !== "Quick Phone Reading") {
      reversedNoted = true;
      return " It's reversed, which usually means this energy is held back or turned inward, not that something bad is coming.";
    }
    return "";
  }

  if (style === "Quick Phone Reading") {
    const lines = reading.cards.map(function(item, i) {
      const pos = positionPhrase[item.position] || "here";
      return `${v[i].Name} ${pos} points to ${v[i].heart}.`;
    });
    paragraphs.push(lines.join(" "));
    if (reading.clarifier) {
      const c = voiceFor(reading.clarifier);
      paragraphs.push(`Your clarifier, ${c.name}, adds ${c.heart}.`);
    }
  } else if (reading.layout === "celtic") {
    [0, 1, 2].forEach(function(i) {
      paragraphs.push(introduceCard(v[i], reading.cards[i], i, v[i - 1], rand) + " " + reflectionFor(reading.cards[i]) + reversedNote(reading.cards[i]));
    });
    paragraphs.push(`Looking at the timeline, ${v[3].name} in your recent past suggests ${v[3].heart}. In the near future, ${v[5].name} points toward ${v[5].heart}. And ${v[4].name}, as a possible outcome, speaks of ${v[4].heart}.`);
    paragraphs.push(`Now, here's where you come in. ${v[6].Name} is in the place of your own power. ${reflectionFor(reading.cards[6])}` + reversedNote(reading.cards[6]));
    paragraphs.push(`Around you, ${v[7].name} as an outside influence brings ${v[7].heart}. And in your hopes and fears, ${v[8].name} shows ${v[8].heart}. Sometimes what we hope for and what we fear are closer together than we expect.`);
    paragraphs.push(`Your final outcome card is ${v[9].name}. ${reflectionFor(reading.cards[9])} Hold this one lightly, though. It shows where things may lead if the current energy continues, not something that's already decided.`);
  } else {
    reading.cards.forEach(function(item, i) {
      paragraphs.push(introduceCard(v[i], item, i, v[i - 1], rand) + " " + reflectionFor(item) + reversedNote(item));
    });
  }

  if (reading.clarifier && style !== "Quick Phone Reading") {
    paragraphs.push(clarifierSpoken(reading, rand));
  }

  const adviceIndex = { one: 0, three: 1, situation: 2, love: 1, career: 2, yesno: 2, celtic: 6 }[reading.layout] || 0;
  const advice = v[adviceIndex];
  const care = v.find(function(x, i) { return x.tone === "c" && i !== adviceIndex; });
  let takeaway = pickFrom(rand, ["So, my feeling from these cards is this.", "So here's what I'd want you to take away from this.", "So, putting it all together."]);
  if (care && style !== "Quick Phone Reading") takeaway += ` What ${care.name} is showing you is real, but it doesn't have to get the final word.`;
  takeaway += " " + advice.guide;
  takeaway += " " + (style === "Honest and Direct" ? pickFrom(rand, spokenDirectClosings) : pickFrom(rand, spokenClosings));
  paragraphs.push(takeaway);

  return paragraphs.join("\n\n");
}

function buildClarifierScript(reading) {
  const rand = seededRandom(reading.id + "|clarifierSpoken|" + reading.clarifier.card);
  return clarifierSpoken(reading, rand);
}

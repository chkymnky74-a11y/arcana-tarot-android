// Fate & Feather Tarot, designed by MizzFitt App Studio.
// All 78 cards: artwork, upright and reversed meanings, and why each picture fits.
const deck = [
  {
    "name": "The Fool",
    "group": "Major Arcana",
    "upright": "A new beginning; trust, openness, and stepping into the unknown.",
    "reversed": "Recklessness, fear of beginning, naivety, or a leap taken without preparation.",
    "picture": "A crow begins its flight at a cliff edge; dawn, a white rose, and a small travel bundle show trust at the start of a journey.",
    "image": "cards/00-the-fool.jpg"
  },
  {
    "name": "The Magician",
    "group": "Major Arcana",
    "upright": "Focused will, skill, and turning available resources into action.",
    "reversed": "Scattered energy, manipulation, unused ability, or action without honest purpose.",
    "picture": "A crow works at an altar holding the wand, cup, sword, and pentacle beneath an infinity sign, showing skill put into action.",
    "image": "cards/01-the-magician.jpg"
  },
  {
    "name": "The High Priestess",
    "group": "Major Arcana",
    "upright": "Intuition, hidden knowledge, and listening between opposing influences.",
    "reversed": "Ignored intuition, withheld truth, inner noise, or disconnection from your deeper knowing.",
    "picture": "A woman guards a closed book between one black and one white pillar beneath the moon, showing intuition between opposites.",
    "image": "cards/02-the-high-priestess.jpg"
  },
  {
    "name": "The Empress",
    "group": "Major Arcana",
    "upright": "Nurture, creativity, abundance, and growth.",
    "reversed": "Depletion, creative blockage, overgiving, dependence, or neglecting your own needs.",
    "picture": "A woman rests on a living root throne among flowers and fertile woodland, making nurture, creativity, and abundance visible.",
    "image": "cards/03-the-empress.jpg"
  },
  {
    "name": "The Emperor",
    "group": "Major Arcana",
    "upright": "Structure, authority, protection, and firm foundations.",
    "reversed": "Rigidity, controlling behavior, unstable authority, or structure that has become a prison.",
    "picture": "A crow occupies a ram-carved stone throne before enduring mountains, showing authority, protection, and firm foundations.",
    "image": "cards/04-the-emperor.jpg"
  },
  {
    "name": "The Hierophant",
    "group": "Major Arcana",
    "upright": "Tradition, shared teaching, institutions, and inherited knowledge.",
    "reversed": "Dogma, empty conformity, rebellion, or the need to form a personal belief system.",
    "picture": "A senior crow teaches two listeners over an open book and crossed keys, showing tradition and shared knowledge.",
    "image": "cards/05-the-hierophant.jpg"
  },
  {
    "name": "The Lovers",
    "group": "Major Arcana",
    "upright": "Love, mutual commitment, and choices aligned with values.",
    "reversed": "Disharmony, misaligned values, disconnection, or a choice that divides you from yourself.",
    "picture": "A black crow and a white crow choose the same branch over one path, showing equal partnership and a values-based choice.",
    "image": "cards/06-the-lovers.jpg"
  },
  {
    "name": "The Chariot",
    "group": "Major Arcana",
    "upright": "Direction, determination, and bringing opposing drives under control.",
    "reversed": "Loss of direction, aggression, stalled progress, or opposing forces pulling you apart.",
    "picture": "A crow commands a chariot drawn by contrasting black and white sphinxes, showing opposing drives brought under one direction.",
    "image": "cards/07-the-chariot.jpg"
  },
  {
    "name": "Strength",
    "group": "Major Arcana",
    "upright": "Courage, compassion, and gentle command of instinct.",
    "reversed": "Self-doubt, depleted courage, raw impulse, or trying to control through force instead of care.",
    "picture": "A woman gently cups a white lion's muzzle beside a black crow, showing compassionate courage rather than force.",
    "image": "cards/08-strength.jpg"
  },
  {
    "name": "The Hermit",
    "group": "Major Arcana",
    "upright": "Reflection, inner guidance, and the wisdom of stepping back.",
    "reversed": "Isolation, avoidance, loneliness, or refusing guidance when solitude stops being useful.",
    "picture": "A solitary crow stands on a high ridge beside a star-lit lantern and staff, showing the guiding light found in reflection.",
    "image": "cards/09-the-hermit.jpg"
  },
  {
    "name": "Wheel of Fortune",
    "group": "Major Arcana",
    "upright": "Changing circumstances, cycles, and turning points.",
    "reversed": "Resistance to change, a setback, bad timing, or a lesson repeating until it is understood.",
    "picture": "Two black and two white crows rise and settle around an eight-spoked wheel of seasons, showing change, balance, and repeating cycles.",
    "image": "cards/10-wheel-of-fortune.jpg"
  },
  {
    "name": "Justice",
    "group": "Major Arcana",
    "upright": "Fairness, accountability, truth, and proportionate decisions.",
    "reversed": "Unfairness, denial, dishonesty, bias, or avoiding the consequences of a choice.",
    "picture": "Level scales weigh one black feather against one white feather beside an upright sword, showing truth, fairness, and accountability.",
    "image": "cards/11-justice.jpg"
  },
  {
    "name": "The Hanged Man",
    "group": "Major Arcana",
    "upright": "A voluntary pause, surrender, and seeing from a new perspective.",
    "reversed": "Needless delay, resistance, martyrdom, or refusing the perspective that would free you.",
    "picture": "An alert crow hangs freely by one foot from a living branch with a halo and reversed reflection, showing surrender and a changed viewpoint.",
    "image": "cards/12-the-hanged-man.jpg"
  },
  {
    "name": "Death",
    "group": "Major Arcana",
    "upright": "An ending, release, and profound transformation.",
    "reversed": "Clinging to the past, stagnation, fear of an ending, or change delayed but not prevented.",
    "picture": "A crow leaves a skull, scythe, and fallen leaves behind while a river reaches dawn, showing an ending that becomes transformation.",
    "image": "cards/13-death.jpg"
  },
  {
    "name": "Temperance",
    "group": "Major Arcana",
    "upright": "Moderation, integration, and the patient blending of opposites.",
    "reversed": "Excess, imbalance, poor timing, or parts of life that are not working together.",
    "picture": "A black crow and a white crow blend water between black and white cups beside a stream, showing patient integration of opposites.",
    "image": "cards/14-temperance.jpg"
  },
  {
    "name": "The Devil",
    "group": "Major Arcana",
    "upright": "Attachment, temptation, and patterns that restrict freedom.",
    "reversed": "Recognizing the chain, breaking a harmful pattern, reclaiming power, or resisting release.",
    "picture": "Two crows remain beside a horned idol and tempting objects even though their chains are open, showing attachment that can be left.",
    "image": "cards/15-the-devil.jpg"
  },
  {
    "name": "The Tower",
    "group": "Major Arcana",
    "upright": "Sudden upheaval, exposed truth, and the collapse of an unstable structure.",
    "reversed": "Resisting necessary change, a delayed disruption, private crisis, or fear of letting the false structure fall.",
    "picture": "Lightning breaks a stone tower as crows escape the falling crown and masonry, showing sudden truth destroying an unstable structure.",
    "image": "cards/16-the-tower.jpg"
  },
  {
    "name": "The Star",
    "group": "Major Arcana",
    "upright": "Hope, renewal, openness, and healing after difficulty.",
    "reversed": "Discouragement, disconnection, fading faith, or healing that needs patience and self-trust.",
    "picture": "A woman pours from a black ewer into water and a white ewer onto earth beneath eight stars, showing hope and healing after darkness.",
    "image": "cards/17-the-star.jpg"
  },
  {
    "name": "The Moon",
    "group": "Major Arcana",
    "upright": "Dreams, uncertainty, intuition, and navigating what is not yet clear.",
    "reversed": "Confusion beginning to lift, hidden truth surfacing, fear, or mistaking anxiety for intuition.",
    "picture": "Black and white crow guardians watch opposite banks as a crayfish enters a misty path between towers, showing instinct within uncertainty.",
    "image": "cards/18-the-moon.jpg"
  },
  {
    "name": "The Sun",
    "group": "Major Arcana",
    "upright": "Joy, vitality, clarity, and freely expressed life.",
    "reversed": "Temporary gloom, delayed joy, diminished confidence, or difficulty allowing yourself to shine.",
    "picture": "A crow flies openly beneath a brilliant sun over sunflowers, showing joy, vitality, confidence, and clear life-giving light.",
    "image": "cards/19-the-sun.jpg"
  },
  {
    "name": "Judgement",
    "group": "Major Arcana",
    "upright": "Awakening, honest self-assessment, and answering a call to renewal.",
    "reversed": "Self-doubt, denial, harsh self-judgment, or refusing the call to change.",
    "picture": "A trumpet calls crows upward from dark arches into new light, showing awakening, honest assessment, and renewal.",
    "image": "cards/20-judgement.jpg"
  },
  {
    "name": "The World",
    "group": "Major Arcana",
    "upright": "Completion, integration, and the fulfillment of a whole journey.",
    "reversed": "An incomplete cycle, delay, lack of closure, or unfinished work before the next beginning.",
    "picture": "A crow flies above Earth inside a complete laurel wreath woven with black and white ribbons, showing completion and integration.",
    "image": "cards/21-the-world.jpg"
  },
  {
    "name": "Ace of Wands",
    "group": "Wands",
    "upright": "Creative potential, energy, and an inspiring beginning.",
    "reversed": "A false start, low energy, delayed inspiration, or creative potential left unused.",
    "picture": "One living wand sprouts fresh growth beside a descending crow, showing the first spark of creative energy.",
    "image": "cards/22-ace-of-wands.jpg"
  },
  {
    "name": "Two of Wands",
    "group": "Wands",
    "upright": "Planning, ambition, and considering a wider world.",
    "reversed": "Poor planning, fear of the unknown, limited options, or choosing safety over growth.",
    "picture": "Exactly two upright wands frame a crow surveying the sea and a globe, showing planning beyond the present horizon.",
    "image": "cards/23-two-of-wands.jpg"
  },
  {
    "name": "Three of Wands",
    "group": "Wands",
    "upright": "Foresight, expansion, and the first results of a plan.",
    "reversed": "Delays, obstacles, limited foresight, or results that do not match the original plan.",
    "picture": "Exactly three upright wands stand above a sea crossed by departing ships, showing foresight and expansion already underway.",
    "image": "cards/24-three-of-wands.jpg"
  },
  {
    "name": "Four of Wands",
    "group": "Wands",
    "upright": "Celebration, belonging, and stable shared foundations.",
    "reversed": "Instability, tension at home, feeling unwelcome, or a celebration kept private or postponed.",
    "picture": "Exactly four visible posts support a garland above black and white crow celebrants, showing stable foundations, belonging, and celebration.",
    "image": "cards/25-four-of-wands.jpg"
  },
  {
    "name": "Five of Wands",
    "group": "Wands",
    "upright": "Rivalry, competing priorities, and energetic disagreement.",
    "reversed": "Conflict avoidance, inner conflict, tension easing, or competition that has become pointless.",
    "picture": "Exactly five crows contest five separate color-marked wands, showing rivalry and competing priorities without confusing the count.",
    "image": "cards/26-five-of-wands.jpg"
  },
  {
    "name": "Six of Wands",
    "group": "Wands",
    "upright": "Earned recognition, encouragement, and visible success.",
    "reversed": "Lack of recognition, a public setback, wounded pride, or success pursued only for approval.",
    "picture": "Exactly six honor-guard wands, three on each side, surround a laurel-bearing crow, showing earned recognition.",
    "image": "cards/27-six-of-wands.jpg"
  },
  {
    "name": "Seven of Wands",
    "group": "Wands",
    "upright": "Defending a position, conviction, and meeting a challenge.",
    "reversed": "Feeling overwhelmed, defensiveness, exhaustion, or giving up a position that cannot be sustained.",
    "picture": "One defended wand stands on high ground while exactly six incoming wands rise from below, showing a position held against challenge.",
    "image": "cards/28-seven-of-wands.jpg"
  },
  {
    "name": "Eight of Wands",
    "group": "Wands",
    "upright": "Speed, movement, and events or messages arriving quickly.",
    "reversed": "Delays, frustration, mixed messages, scattered energy, or movement without clear direction.",
    "picture": "Exactly eight separate wands cross an open sky in the same direction, making speed, movement, and arriving messages visible.",
    "image": "cards/29-eight-of-wands.jpg"
  },
  {
    "name": "Nine of Wands",
    "group": "Wands",
    "upright": "Resilience, boundaries, and persistence after a test.",
    "reversed": "Exhaustion, weak or rigid boundaries, paranoia, or being too worn down to continue alone.",
    "picture": "Eight background staffs stand behind a bandaged crow and a ninth staff beside it, showing resilience after repeated tests.",
    "image": "cards/30-nine-of-wands.jpg"
  },
  {
    "name": "Ten of Wands",
    "group": "Wands",
    "upright": "Heavy responsibility, overload, and carrying too much alone.",
    "reversed": "Releasing a burden, delegating, setting limits, or collapsing because help was refused.",
    "picture": "Exactly ten distinct staffs form one heavy load carried toward a distant home, showing responsibility that has become too much.",
    "image": "cards/31-ten-of-wands.jpg"
  },
  {
    "name": "Page of Wands",
    "group": "Wands",
    "upright": "Curiosity, enthusiasm, and discovering a creative direction.",
    "reversed": "Restlessness, lack of direction, disappointing news, or an exciting idea with no follow-through.",
    "picture": "A young crow studies new shoots on one wand, showing curiosity and the discovery of a creative direction.",
    "image": "cards/32-page-of-wands.jpg"
  },
  {
    "name": "Knight of Wands",
    "group": "Wands",
    "upright": "Bold action, passion, and impulsive pursuit.",
    "reversed": "Recklessness, anger, delays, inconsistency, or charging ahead without considering consequences.",
    "picture": "A crow launches into hot wind above one wand with a red pennant, showing bold, passionate, and potentially impulsive action.",
    "image": "cards/33-knight-of-wands.jpg"
  },
  {
    "name": "Queen of Wands",
    "group": "Wands",
    "upright": "Warm confidence, independence, and creative vitality.",
    "reversed": "Insecurity, jealousy, demanding attention, or losing touch with your natural confidence.",
    "picture": "A regal crow sits among sunflowers with one wand and a black cat, showing warm confidence and independent creative power.",
    "image": "cards/34-queen-of-wands.jpg"
  },
  {
    "name": "King of Wands",
    "group": "Wands",
    "upright": "Vision, initiative, and inspiring leadership.",
    "reversed": "Domineering behavior, impulsive leadership, arrogance, or expectations that outrun reality.",
    "picture": "A crow rules from a lion-carved throne beside one living wand and a salamander, showing vision and inspiring leadership.",
    "image": "cards/35-king-of-wands.jpg"
  },
  {
    "name": "Ace of Cups",
    "group": "Cups",
    "upright": "An emotional beginning, receptivity, and overflowing feeling.",
    "reversed": "Blocked emotion, emptiness, repressed feeling, or the need to refill your own cup first.",
    "picture": "One cup overflows into a pool beneath a dove beside a crow, showing a new emotional current ready to be received.",
    "image": "cards/36-ace-of-cups.jpg"
  },
  {
    "name": "Two of Cups",
    "group": "Cups",
    "upright": "Mutual affection, reciprocal connection, and partnership.",
    "reversed": "Imbalance, separation, poor communication, or a bond in which the exchange is no longer equal.",
    "picture": "A black crow and a white crow meet over exactly two cups beneath a caduceus, showing mutual and balanced connection.",
    "image": "cards/37-two-of-cups.jpg"
  },
  {
    "name": "Three of Cups",
    "group": "Cups",
    "upright": "Friendship, community, and shared celebration.",
    "reversed": "Overindulgence, gossip, social strain, isolation, or a third influence disrupting harmony.",
    "picture": "Exactly three crows gather around three cups in a flowered clearing, showing friendship, community, and shared joy.",
    "image": "cards/38-three-of-cups.jpg"
  },
  {
    "name": "Four of Cups",
    "group": "Cups",
    "upright": "Withdrawal, contemplation, and an opportunity overlooked.",
    "reversed": "Renewed interest and acceptance, or deeper apathy and refusal to engage with what is offered.",
    "picture": "A crow turns from three cups on the ground while a fourth is offered from a cloud, showing contemplation and an overlooked chance.",
    "image": "cards/39-four-of-cups.jpg"
  },
  {
    "name": "Five of Cups",
    "group": "Cups",
    "upright": "Loss, regret, and recognizing what still remains.",
    "reversed": "Acceptance, forgiveness, and healing, or regret prolonged because the remaining good is still ignored.",
    "picture": "Exactly three cups are spilled while two remain upright near a bridge to shelter, showing grief without erasing what remains.",
    "image": "cards/40-five-of-cups.jpg"
  },
  {
    "name": "Six of Cups",
    "group": "Cups",
    "upright": "Memory, kindness, and familiar emotional comfort.",
    "reversed": "Being stuck in the past, unrealistic nostalgia, old wounds, or finally moving beyond childhood patterns.",
    "picture": "Exactly six cups, arranged as three upper and three lower, hold flowers in a familiar cottage garden, showing memory and kindness.",
    "image": "cards/41-six-of-cups.jpg"
  },
  {
    "name": "Seven of Cups",
    "group": "Cups",
    "upright": "Many possibilities, temptation, and the need to distinguish fantasy from reality.",
    "reversed": "Clarity, a firm decision, illusion ending, or feeling overwhelmed by too many choices.",
    "picture": "Exactly seven cups hold different visions in clouds above an observing crow, showing tempting possibilities that require discernment.",
    "image": "cards/42-seven-of-cups.jpg"
  },
  {
    "name": "Eight of Cups",
    "group": "Cups",
    "upright": "Leaving an unfulfilling situation and seeking deeper meaning.",
    "reversed": "Fear of leaving, aimless drifting, returning to an old situation, or avoiding the deeper search.",
    "picture": "A crow leaves exactly eight cups behind to follow a mountain path, showing departure from what no longer fulfills.",
    "image": "cards/43-eight-of-cups.jpg"
  },
  {
    "name": "Nine of Cups",
    "group": "Cups",
    "upright": "Satisfaction, gratitude, and personal contentment.",
    "reversed": "Dissatisfaction, overindulgence, shallow pleasure, or a wish that arrives differently than expected.",
    "picture": "Exactly nine cups line a rich alcove above a restful crow, showing satisfaction and personal contentment.",
    "image": "cards/44-nine-of-cups.jpg"
  },
  {
    "name": "Ten of Cups",
    "group": "Cups",
    "upright": "Emotional harmony, shared happiness, and a supportive home.",
    "reversed": "Family strain, disconnection, broken expectations, or private unhappiness behind a perfect appearance.",
    "picture": "Exactly ten cups appear with a rainbow above black and white crow parents and their young, showing shared harmony and home.",
    "image": "cards/45-ten-of-cups.jpg"
  },
  {
    "name": "Page of Cups",
    "group": "Cups",
    "upright": "Sensitivity, imagination, and an unexpected emotional message.",
    "reversed": "Emotional immaturity, blocked creativity, insecurity, or a message that disappoints or confuses.",
    "picture": "A curious crow studies a fish emerging from one cup, showing imagination and an unexpected emotional message.",
    "image": "cards/46-page-of-cups.jpg"
  },
  {
    "name": "Knight of Cups",
    "group": "Cups",
    "upright": "An emotional offering, idealism, and following the heart.",
    "reversed": "Moodiness, fantasy, empty promises, manipulation, or disappointment when reality interrupts the dream.",
    "picture": "A crow carries a rose across water toward one waiting cup, showing an emotional offer and pursuit led by the heart.",
    "image": "cards/47-knight-of-cups.jpg"
  },
  {
    "name": "Queen of Cups",
    "group": "Cups",
    "upright": "Compassion, intuition, and attentive emotional care.",
    "reversed": "Emotional overwhelm, poor boundaries, dependence, or caring for others while abandoning yourself.",
    "picture": "A crowned crow attends one white chalice from a shell throne in moonlit water, showing intuitive and compassionate care.",
    "image": "cards/48-queen-of-cups.jpg"
  },
  {
    "name": "King of Cups",
    "group": "Cups",
    "upright": "Emotional maturity, diplomacy, and calm amid strong feelings.",
    "reversed": "Emotional suppression, manipulation, volatility, or using calmness to hide rather than regulate feeling.",
    "picture": "A composed crow keeps one cup steady on a black-and-white marble throne amid strong waves, showing emotional command without suppression.",
    "image": "cards/49-king-of-cups.jpg"
  },
  {
    "name": "Ace of Swords",
    "group": "Swords",
    "upright": "Clarity, truth, and a decisive mental breakthrough.",
    "reversed": "Confusion, misinformation, clouded judgment, or truth used as a weapon rather than a guide.",
    "picture": "One upright sword passes through a crown above the mountains, showing a decisive breakthrough of truth and clarity.",
    "image": "cards/50-ace-of-swords.jpg"
  },
  {
    "name": "Two of Swords",
    "group": "Swords",
    "upright": "A difficult decision, stalemate, and the need to face competing truths.",
    "reversed": "Information overload, indecision breaking, a forced choice, or finally seeing what was avoided.",
    "picture": "Exactly two crossed swords with black and white grips stand before a white-blindfolded crow, showing an unresolved balanced decision.",
    "image": "cards/51-two-of-swords.jpg"
  },
  {
    "name": "Three of Swords",
    "group": "Swords",
    "upright": "Heartache, grief, and a painful truth.",
    "reversed": "Healing, forgiveness, and releasing grief, or pain that remains because it has not been faced.",
    "picture": "Exactly three swords pierce a symbolic crystal heart beneath rain clouds, making painful truth and grief unmistakable.",
    "image": "cards/52-three-of-swords.jpg"
  },
  {
    "name": "Four of Swords",
    "group": "Swords",
    "upright": "Rest, recovery, and a deliberate pause from conflict.",
    "reversed": "Burnout, restlessness, returning too soon, or being forced to rest after ignoring the need.",
    "picture": "Three swords hang above a resting crow while a fourth lies below, showing deliberate rest after conflict; black and white tiles reinforce balance.",
    "image": "cards/53-four-of-swords.jpg"
  },
  {
    "name": "Five of Swords",
    "group": "Swords",
    "upright": "Conflict, damaged trust, and a victory that costs too much.",
    "reversed": "Reconciliation, making amends, lingering resentment, or ending a fight without resolving its cause.",
    "picture": "One crow guards three swords while exactly two lie abandoned and others retreat, showing a costly victory and damaged trust.",
    "image": "cards/54-five-of-swords.jpg"
  },
  {
    "name": "Six of Swords",
    "group": "Swords",
    "upright": "Transition, support, and a gradual passage away from difficulty.",
    "reversed": "Resistance to transition, emotional baggage, unfinished business, or feeling unable to move on.",
    "picture": "Exactly six swords, three on each side of a boat, travel with crows toward calmer water, showing supported transition.",
    "image": "cards/55-six-of-swords.jpg"
  },
  {
    "name": "Seven of Swords",
    "group": "Swords",
    "upright": "Strategy, secrecy, and conduct that may evade accountability.",
    "reversed": "A confession, a plan exposed, self-deception ending, or the need for a more honest strategy.",
    "picture": "A crow carries five swords away while exactly two remain at camp, showing secrecy, strategy, and evaded accountability.",
    "image": "cards/56-seven-of-swords.jpg"
  },
  {
    "name": "Eight of Swords",
    "group": "Swords",
    "upright": "Feeling restricted, limiting beliefs, and an available path not yet taken.",
    "reversed": "Release, a new perspective, reclaiming power, or recognizing that the bindings can be removed.",
    "picture": "Exactly eight swords, four on each side, surround a loosely bound crow with a clear path ahead, showing restriction that can be escaped.",
    "image": "cards/57-eight-of-swords.jpg"
  },
  {
    "name": "Nine of Swords",
    "group": "Swords",
    "upright": "Anxiety, sleeplessness, and distressing thoughts.",
    "reversed": "Recovery, hope, and reaching for help, or anxiety worsening because it remains hidden.",
    "picture": "Exactly nine wall-mounted swords hang over a wakeful crow at a rainy window, showing anxiety and sleepless thoughts.",
    "image": "cards/58-nine-of-swords.jpg"
  },
  {
    "name": "Ten of Swords",
    "group": "Swords",
    "upright": "A painful ending, finality, and release after a crisis.",
    "reversed": "Recovery, survival, and the worst passing, or resisting an ending that has already occurred.",
    "picture": "Exactly ten swords, five on each side, surround an empty cloak while a crow rises toward dawn, showing finality followed by release.",
    "image": "cards/59-ten-of-swords.jpg"
  },
  {
    "name": "Page of Swords",
    "group": "Swords",
    "upright": "Alertness, questioning, and the search for information.",
    "reversed": "Gossip, defensiveness, scattered thinking, spying, or speaking before the facts are known.",
    "picture": "A watchful crow turns into the wind beside one sword, showing alert questioning and the search for information.",
    "image": "cards/60-page-of-swords.jpg"
  },
  {
    "name": "Knight of Swords",
    "group": "Swords",
    "upright": "Urgent action, forceful thought, and charging ahead.",
    "reversed": "Recklessness, aggression, poor timing, or rushing forward without a clear plan.",
    "picture": "A crow speeds through a storm beside one forward-slanting sword, showing urgent thought and forceful action.",
    "image": "cards/61-knight-of-swords.jpg"
  },
  {
    "name": "Queen of Swords",
    "group": "Swords",
    "upright": "Discernment, independence, and honest boundaries.",
    "reversed": "Bitterness, harsh judgment, isolation, or boundaries sharpened into weapons.",
    "picture": "A composed crow sits beside one upright sword on a butterfly-carved throne, showing clear discernment and honest boundaries.",
    "image": "cards/62-queen-of-swords.jpg"
  },
  {
    "name": "King of Swords",
    "group": "Swords",
    "upright": "Reason, intellectual authority, and principled judgment.",
    "reversed": "Abuse of power, coldness, manipulation, irrational judgment, or intellect without compassion.",
    "picture": "A crow presides beside one upright sword between black and white pillars, showing principled judgment held in balance.",
    "image": "cards/63-king-of-swords.jpg"
  },
  {
    "name": "Ace of Pentacles",
    "group": "Pentacles",
    "upright": "A practical opportunity, resources, and a grounded beginning.",
    "reversed": "A missed opportunity, scarcity thinking, poor planning, or a promising start without a foundation.",
    "picture": "One pentacle stands before a garden gate and mountain path, showing a practical opportunity with room to grow.",
    "image": "cards/64-ace-of-pentacles.jpg"
  },
  {
    "name": "Two of Pentacles",
    "group": "Pentacles",
    "upright": "Adaptability, balancing demands, and managing changing circumstances.",
    "reversed": "Imbalance, overwhelm, dropped priorities, or trying to manage more than is sustainable.",
    "picture": "Exactly two contrasting black and white pentacles turn inside one infinity loop above changing seas, showing active balance and adaptability.",
    "image": "cards/65-two-of-pentacles.jpg"
  },
  {
    "name": "Three of Pentacles",
    "group": "Pentacles",
    "upright": "Craft, collaboration, and building through shared skill.",
    "reversed": "Poor teamwork, low standards, ignored expertise, or a skill gap that needs honest attention.",
    "picture": "Exactly three pentacles crown an arch beneath which three crows work together, showing collaboration and skilled building.",
    "image": "cards/66-three-of-pentacles.jpg"
  },
  {
    "name": "Four of Pentacles",
    "group": "Pentacles",
    "upright": "Security, possessiveness, and holding resources tightly.",
    "reversed": "Releasing control and becoming generous, or financial insecurity and fear of losing what you have.",
    "picture": "Exactly four pentacles surround a locked chest guarded by a crow, showing security tightened into possessiveness.",
    "image": "cards/67-four-of-pentacles.jpg"
  },
  {
    "name": "Five of Pentacles",
    "group": "Pentacles",
    "upright": "Material hardship, exclusion, and help that may be nearby.",
    "reversed": "Recovery, assistance, renewed hope, or isolation deepening because support is not accepted.",
    "picture": "Exactly five pentacles glow in a lit window while two crows cross the snow outside, showing hardship with nearby help.",
    "image": "cards/68-five-of-pentacles.jpg"
  },
  {
    "name": "Six of Pentacles",
    "group": "Pentacles",
    "upright": "Giving and receiving, generosity, and a fair distribution of resources.",
    "reversed": "Strings attached, unfair exchange, debt, exploitation, or giving that creates dependence.",
    "picture": "Exactly six pentacles appear in two rows of three beside level scales and black and white recipients, showing fair giving and receiving.",
    "image": "cards/69-six-of-pentacles.jpg"
  },
  {
    "name": "Seven of Pentacles",
    "group": "Pentacles",
    "upright": "Patience, investment, and evaluating slow-growing results.",
    "reversed": "Impatience, poor return, lack of long-term planning, or effort invested in the wrong ground.",
    "picture": "Exactly seven pentacles grow on a cultivated vine watched by a patient crow, showing investment and slow results.",
    "image": "cards/70-seven-of-pentacles.jpg"
  },
  {
    "name": "Eight of Pentacles",
    "group": "Pentacles",
    "upright": "Practice, diligence, and increasing skill through repeated work.",
    "reversed": "Shortcuts, boredom, poor workmanship, perfectionism, or repeating effort without learning.",
    "picture": "Six finished pieces, one being engraved, and one set aside make exactly eight, showing skill built through repetition.",
    "image": "cards/71-eight-of-pentacles.jpg"
  },
  {
    "name": "Nine of Pentacles",
    "group": "Pentacles",
    "upright": "Independence, earned comfort, and enjoyment of careful work.",
    "reversed": "Dependence, overwork, living beyond your means, or comfort that looks better than it feels.",
    "picture": "Exactly nine pentacles form three rows of three in a vineyard with a self-possessed crow, showing earned comfort and independence.",
    "image": "cards/72-nine-of-pentacles.jpg"
  },
  {
    "name": "Ten of Pentacles",
    "group": "Pentacles",
    "upright": "Lasting security, family continuity, and a shared legacy.",
    "reversed": "Family conflict, financial instability, disputed inheritance, or a legacy built on unhealthy expectations.",
    "picture": "Exactly ten pentacles, five on each side of a home arch, surround a crow family, showing security, continuity, and legacy.",
    "image": "cards/73-ten-of-pentacles.jpg"
  },
  {
    "name": "Page of Pentacles",
    "group": "Pentacles",
    "upright": "Study, application, and learning a useful skill.",
    "reversed": "Procrastination, lack of progress, poor planning, or a practical opportunity not taken seriously.",
    "picture": "A young crow closely examines one pentacle in a planted field, showing study and practical learning.",
    "image": "cards/74-page-of-pentacles.jpg"
  },
  {
    "name": "Knight of Pentacles",
    "group": "Pentacles",
    "upright": "Steady effort, reliability, and patient practical responsibility.",
    "reversed": "Stagnation, laziness, stubborn routine, or responsibility performed without purpose or growth.",
    "picture": "A steady crow keeps watch beside one pentacle over carefully worked land, showing patience, reliability, and duty.",
    "image": "cards/75-knight-of-pentacles.jpg"
  },
  {
    "name": "Queen of Pentacles",
    "group": "Pentacles",
    "upright": "Practical care, resourcefulness, and nurturing a comfortable life.",
    "reversed": "Self-neglect, work-home imbalance, smothering care, or insecurity hidden behind constant busyness.",
    "picture": "A crow sits in a thriving garden beside one pentacle, a rabbit, and ripe produce, showing practical and nurturing care.",
    "image": "cards/76-queen-of-pentacles.jpg"
  },
  {
    "name": "King of Pentacles",
    "group": "Pentacles",
    "upright": "Stewardship, material mastery, and durable prosperity.",
    "reversed": "Greed, materialism, stubborn control, poor stewardship, or measuring worth only through possessions.",
    "picture": "A crow rules beside one pentacle from a vine-and-bull throne above a productive estate, showing stewardship and durable prosperity.",
    "image": "cards/77-king-of-pentacles.jpg"
  }
];

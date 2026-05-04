// ================= AUDIO & SFX =================
let currentSessionData = [];

const sfxCorrect = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3",
);
const sfxWrong = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/3149/3149-preview.mp3",
);

function playSound(type) {
  if (type === "correct") {
    sfxCorrect.currentTime = 0;
    sfxCorrect.play().catch(() => {});
  } else if (type === "wrong") {
    sfxWrong.currentTime = 0;
    sfxWrong.play().catch(() => {});
  }
}

// ================= STATS PLAYER =================
let savedXP = parseInt(localStorage.getItem("userXP"));
let userXP = isNaN(savedXP) ? 0 : savedXP;

let savedHearts = parseInt(localStorage.getItem("userHearts"));
let userHearts = isNaN(savedHearts) ? 5 : savedHearts;

const MAX_HEARTS = 10;

function addHeart(amount = 1) {
  userHearts = Math.min(userHearts + amount, MAX_HEARTS);
  updateStatsUI();
}

function updateMainStatsUI() {
  localStorage.setItem("userXP", userXP);
  localStorage.setItem("userHearts", userHearts);

  const heartIds = [
    "ui-hearts",
    "fc-hearts",
    "ls-hearts",
    "gr-hearts",
    "sp-hearts",
    "cv-hearts",
    "tr-hearts",
    "spl-hearts",
    "ts-hearts",
    "fd-hearts",
  ];
  heartIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.innerText = userHearts;
  });

  const xpEl = document.getElementById("ui-xp");
  if (xpEl) xpEl.innerText = userXP;
}

function updateStatsUI() {
  try {
    updateMainStatsUI();
  } catch (e) {}
}

function setHomeMenuFilter(filter = "all", button = null) {
  const cards = document.querySelectorAll("#home-menu-grid .menu-card");
  const chips = document.querySelectorAll(".home-filter-chip");
  chips.forEach((chip) => chip.classList.remove("active"));
  if (button) button.classList.add("active");
  cards.forEach((card) => {
    const categories = String(card.dataset.category || "").toLowerCase();
    const shouldShow = filter === "all" || categories.includes(filter.toLowerCase());
    card.classList.toggle("is-hidden", !shouldShow);
  });
}

window.setHomeMenuFilter = setHomeMenuFilter;

// ================= DOM SELECTORS =================
const homeScreen = document.getElementById("home-screen");
const storyScreen = document.getElementById("story-screen");
const flashcardScreen = document.getElementById("flashcard-screen");
const listeningScreen = document.getElementById("listening-screen");
const grammarScreen = document.getElementById("grammar-screen");
const speakingScreen = document.getElementById("speaking-screen");
const convScreen = document.getElementById("conversation-screen");
const translateScreen = document.getElementById("translate-screen");
const spellingScreen = document.getElementById("spelling-screen");
const dictionaryScreen = document.getElementById("dictionary-screen");
const tenseScreen = document.getElementById("tense-screen");
const foundationScreen = document.getElementById("foundation-screen");
const dictionaryList = document.getElementById("dictionary-list");
const dictionarySearch = document.getElementById("dictionary-search");
const dictionaryInput = document.getElementById("dictionary-input");
const dictionaryResult = document.getElementById("dictionary-result");

// Elemen Spelling
let currentSpellingIndex = 0;
let currentSpellingTurn = 0;
let spellingCanSubmit = false;
const splTitle = document.getElementById("spl-title");
const splChatContainer = document.getElementById("spl-chat-container");
const splProgress = document.getElementById("spl-progress");
const splInput = document.getElementById("spl-input");
const splInstruction = document.getElementById("spl-instruction");
const splSendBtn = document.getElementById("spl-send-btn");

// Elemen Cerita
const storyTitleEl = document.getElementById("story-title");
const storyContentEl = document.getElementById("story-content");

// Elemen Tooltip
const tooltip = document.getElementById("translation-tooltip");
const tooltipWord = document.getElementById("tooltip-word");
const tooltipMeaning = document.getElementById("tooltip-meaning");

// Elemen Flashcard
let currentVocabIndex = 0;
const fcEn = document.getElementById("fc-en");
const fcId = document.getElementById("fc-id");
const flashcardItem = document.getElementById("flashcard");
const vocabProgress = document.getElementById("vocab-progress");

// Elemen Listening
let currentListeningIndex = 0;
const lsOptions = document.getElementById("listening-options");
const lsProgress = document.getElementById("listening-progress");

// Elemen Grammar
let currentGrammarIndex = 0;
const grQuestionId = document.getElementById("gr-question-id");
const grSelectedZone = document.getElementById("gr-selected-zone");
const grAvailableZone = document.getElementById("gr-available-zone");
const grProgress = document.getElementById("grammar-progress");
const grHintBtn = document.getElementById("gr-hint-btn");
const grAnswerBtn = document.getElementById("gr-answer-btn");
const grHintText = document.getElementById("gr-hint-text");

// Elemen Tenses TOEFL Trainer
let currentTenseIndex = 0;
let currentTenseLessonIndex = 0;
let tenseSelectedWordsArr = [];
let tenseAvailableWordsArr = [];
const tenseProgress = document.getElementById("tense-progress");
const tenseTopicSelect = document.getElementById("tense-topic-select");
const tenseTopicTitle = document.getElementById("tense-topic-title");
const tenseFormula = document.getElementById("tense-formula");
const tensePositive = document.getElementById("tense-positive");
const tenseNegative = document.getElementById("tense-negative");
const tenseQuestion = document.getElementById("tense-question");
const tenseUse = document.getElementById("tense-use");
const tenseSignal = document.getElementById("tense-signal");
const tenseToeflFocus = document.getElementById("tense-toefl-focus");
const tenseExamples = document.getElementById("tense-examples");
const tenseBadge = document.getElementById("tense-badge");
const tenseQuestionId = document.getElementById("tense-question-id");
const tenseSelectedZone = document.getElementById("tense-selected-zone");
const tenseAvailableZone = document.getElementById("tense-available-zone");
const tenseHintBtn = document.getElementById("tense-hint-btn");
const tenseAnswerBtn = document.getElementById("tense-answer-btn");
const tenseHintText = document.getElementById("tense-hint-text");
const tenseResult = document.getElementById("tense-result");

// Elemen English Foundation
let currentFoundationModuleIndex = 0;
let foundationVocabShuffleSeed = 0;
const fdModuleSelect = document.getElementById("fd-module-select");
const fdModuleTitle = document.getElementById("fd-module-title");
const fdModuleGoal = document.getElementById("fd-module-goal");
const fdModuleStructure = document.getElementById("fd-module-structure");
const fdModuleExplanation = document.getElementById("fd-module-explanation");
const fdKeyPoints = document.getElementById("fd-key-points");
const fdExamples = document.getElementById("fd-examples");
const fdMistakes = document.getElementById("fd-mistakes");
const fdTenseMap = document.getElementById("fd-tense-map");
const fdVocabLevel = document.getElementById("fd-vocab-level");
const fdVocabSearch = document.getElementById("fd-vocab-search");
const fdVocabSummary = document.getElementById("fd-vocab-summary");
const fdVocabList = document.getElementById("fd-vocab-list");

// Elemen Speaking
let currentSpeakingIndex = 0;
const spPhrase = document.getElementById("sp-phrase");
const spTranslate = document.getElementById("sp-translate");
const spProgress = document.getElementById("speaking-progress");
const micBtn = document.getElementById("btn-mic");
const spStatus = document.getElementById("sp-status");
const spResult = document.getElementById("sp-result");

// Elemen Conversation
let currentConvIndex = 0;
let currentTurnIndex = 0;
const convBoard = document.getElementById("conv-board");
const convTitle = document.getElementById("conv-title");
const convChatContainer = document.getElementById("conv-chat-container");
const convInstruction = document.getElementById("conv-instruction");
const convMicBtn = document.getElementById("btn-conv-mic");
const convStatus = document.getElementById("conv-status");
const convProgress = document.getElementById("conv-progress");

// Elemen Translate
let currentTranslateIndex = 0;
let currentTranslateData = [];

// ================= WEB SPEECH API =================
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
}

// FIX BUG #5: Helper untuk stop recognition dengan aman sebelum memulai baru
function safeStopRecognition() {
  if (recognition) {
    try {
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onspeechend = null;
      recognition.stop();
    } catch (e) {}
  }
}

// ================= INIT =================
updateStatsUI();

// ================= HELPER FUNCTIONS =================
function cleanText(text) {
  return basicNormalizeText(text);
}

function basicNormalizeText(text) {
  return String(text || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐‑‒–—]/g, "-")
    .replace(/[_/\\|]/g, " ")
    .replace(/[.,!?;:(){}\[\]"']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function numberToIndonesianWords(num) {
  num = parseInt(num, 10);
  if (isNaN(num)) return "";
  if (num === 0) return "";
  if (num < 0) return "minus " + numberToIndonesianWords(Math.abs(num));

  const satuan = [
    "",
    "satu",
    "dua",
    "tiga",
    "empat",
    "lima",
    "enam",
    "tujuh",
    "delapan",
    "sembilan",
  ];

  if (num < 10) return satuan[num];
  if (num === 10) return "sepuluh";
  if (num === 11) return "sebelas";
  if (num < 20) return (satuan[num - 10] + " belas").trim();
  if (num < 100)
    return (
      satuan[Math.floor(num / 10)] +
      " puluh " +
      numberToIndonesianWords(num % 10)
    ).trim();
  if (num < 1000) {
    if (num < 200)
      return ("seratus " + numberToIndonesianWords(num - 100)).trim();
    return (
      satuan[Math.floor(num / 100)] +
      " ratus " +
      numberToIndonesianWords(num % 100)
    ).trim();
  }
  if (num < 1000000) {
    if (num < 2000)
      return ("seribu " + numberToIndonesianWords(num - 1000)).trim();
    return (
      numberToIndonesianWords(Math.floor(num / 1000)) +
      " ribu " +
      numberToIndonesianWords(num % 1000)
    ).trim();
  }
  if (num < 1000000000) {
    return (
      numberToIndonesianWords(Math.floor(num / 1000000)) +
      " juta " +
      numberToIndonesianWords(num % 1000000)
    ).trim();
  }
  return String(num);
}

function numberToEnglishWords(num) {
  num = parseInt(num, 10);
  if (isNaN(num)) return "";
  if (num === 0) return "";
  if (num < 0) return "minus " + numberToEnglishWords(Math.abs(num));

  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (num < 20) return ones[num];
  if (num < 100) return (tens[Math.floor(num / 10)] + " " + numberToEnglishWords(num % 10)).trim();
  if (num < 1000) return (numberToEnglishWords(Math.floor(num / 100)) + " hundred " + numberToEnglishWords(num % 100)).trim();
  if (num < 1000000) return (numberToEnglishWords(Math.floor(num / 1000)) + " thousand " + numberToEnglishWords(num % 1000)).trim();
  if (num < 1000000000) return (numberToEnglishWords(Math.floor(num / 1000000)) + " million " + numberToEnglishWords(num % 1000000)).trim();
  return String(num);
}

function wordsForNumber(num, lang = "id") {
  return lang === "en" ? numberToEnglishWords(num) : numberToIndonesianWords(num);
}

function decimalPartToWords(decimalText, lang = "id") {
  return String(decimalText || "")
    .split("")
    .map((digit) => wordsForNumber(parseInt(digit, 10), lang))
    .filter(Boolean)
    .join(" ");
}

function normalizeGroupedNumberString(value) {
  return String(value || "").replace(/[.,\s]/g, "");
}

function normalizeCurrencyText(text) {
  let result = String(text || "").toLowerCase();

  // Rp2.500.000 / 2,500,000 rupiah / 2500000 rupiah
  result = result.replace(
    /\b(?:rp|idr)\s*([0-9]{1,3}(?:[.,][0-9]{3})+|[0-9]{4,})\s*(?:rupiah)?\b/g,
    (_, amount) => numberToIndonesianWords(parseInt(normalizeGroupedNumberString(amount), 10)) + " rupiah",
  );
  result = result.replace(
    /\b([0-9]{1,3}(?:[.,][0-9]{3})+|[0-9]{4,})\s*rupiah\b/g,
    (_, amount) => numberToIndonesianWords(parseInt(normalizeGroupedNumberString(amount), 10)) + " rupiah",
  );
  result = result.replace(
    /\b([0-9]{1,3}(?:[.,][0-9]{3})+)\b/g,
    (_, amount) => numberToIndonesianWords(parseInt(normalizeGroupedNumberString(amount), 10)) + " rupiah",
  );
  result = result.replace(
    /\b([0-9]{6,})\b/g,
    (_, amount) => numberToIndonesianWords(parseInt(amount, 10)) + " rupiah",
  );

  // 2jt 500rb / 2 juta 500 ribu
  result = result.replace(
    /\b(\d+)\s*(?:jt|jta|juta)\s*(\d+)\s*(?:rb|ribu)\b/g,
    (_, million, thousand) => {
      const total = parseInt(million, 10) * 1000000 + parseInt(thousand, 10) * 1000;
      return numberToIndonesianWords(total) + " rupiah";
    },
  );

  // 2.5jt / 2,5 jt / 2.5 juta / 2,5 juta
  result = result.replace(
    /\b(\d+)\s*[.,]\s*(\d+)\s*(?:jt|jta|juta)\b/g,
    (_, main, decimal) => {
      const decimalValue = parseInt(decimal, 10) * Math.pow(10, 6 - decimal.length);
      const total = parseInt(main, 10) * 1000000 + decimalValue;
      return numberToIndonesianWords(total) + " rupiah";
    },
  );

  // 2jt / 2 juta / 500rb / 500 ribu
  result = result.replace(/\b(\d+)\s*(?:jt|jta|juta)\b/g, (_, n) => numberToIndonesianWords(parseInt(n, 10) * 1000000) + " rupiah");
  result = result.replace(/\b(\d+)\s*(?:rb|ribu)\b/g, (_, n) => numberToIndonesianWords(parseInt(n, 10) * 1000) + " rupiah");

  return result.replace(/\brupiah\s+rupiah\b/g, "rupiah").replace(/\s+/g, " ").trim();
}

function normalizeNumberAndPercent(text, lang = "id") {
  let result = String(text || "").toLowerCase();
  const decimalWord = lang === "en" ? "point" : "koma";
  const percentWord = lang === "en" ? "percent" : "persen";

  result = result.replace(
    /\b(\d+)\s*[,.]\s*(\d+)\s*%/g,
    (_, main, decimal) =>
      `${wordsForNumber(main, lang)} ${decimalWord} ${decimalPartToWords(decimal, lang)} ${percentWord}`,
  );
  result = result.replace(
    /\b(\d+)\s*%/g,
    (_, num) => `${wordsForNumber(num, lang)} ${percentWord}`,
  );
  return result;
}

function normalizeNumbersToWords(text, lang = "id") {
  return String(text || "").replace(/\b\d+\b/g, (match) => wordsForNumber(match, lang));
}

function normalizeDecimalNumbers(text, lang = "id") {
  const decimalWord = lang === "en" ? "point" : "koma";
  return String(text || "").replace(
    /\b(\d+)\s*[,.]\s*(\d+)\b/g,
    (_, main, decimal) => `${wordsForNumber(main, lang)} ${decimalWord} ${decimalPartToWords(decimal, lang)}`,
  );
}

function normalizeNumbersAdvanced(text, lang = "en") {
  return normalizeAnswerText(text, { lang });
}

function normalizeMoneyText(text) {
  return normalizeCurrencyText(text)
    .replace(/\bharganya\b/g, "harga")
    .replace(/\bpembayarannya\b/g, "pembayaran")
    .replace(/\buang tunai\b/g, "tunai");
}

function normalizeCommonAbbreviations(text, lang = "id") {
  let result = String(text || "").toLowerCase();

  if (lang === "id") {
    const idMap = {
      yg: "yang",
      dgn: "dengan",
      dg: "dengan",
      utk: "untuk",
      untukku: "untuk saya",
      krn: "karena",
      karna: "karena",
      dlm: "dalam",
      sm: "sama",
      sama2: "sama sama",
      trima: "terima",
      makasih: "terima kasih",
      nggak: "tidak",
      ngga: "tidak",
      gak: "tidak",
      ga: "tidak",
      gk: "tidak",
      tak: "tidak",
      hp: "ponsel",
      hape: "ponsel",
    };
    Object.entries(idMap).forEach(([from, to]) => {
      result = result.replace(new RegExp(`\\b${from}\\b`, "g"), to);
    });
  }

  const enMap = {
    "i'm": "i am",
    im: "i am",
    "you're": "you are",
    youre: "you are",
    "we're": "we are",
    were: lang === "en" ? "were" : "were",
    "they're": "they are",
    theyre: "they are",
    "he's": "he is",
    hes: "he is",
    "she's": "she is",
    shes: "she is",
    "it's": "it is",
    its: lang === "en" ? "its" : "its",
    "don't": "do not",
    dont: "do not",
    "doesn't": "does not",
    doesnt: "does not",
    "didn't": "did not",
    didnt: "did not",
    "can't": "cannot",
    cant: "cannot",
    "won't": "will not",
    wont: "will not",
    "isn't": "is not",
    isnt: "is not",
    "aren't": "are not",
    arent: "are not",
    "wasn't": "was not",
    wasnt: "was not",
    "weren't": "were not",
    werent: "were not",
    "hasn't": "has not",
    hasnt: "has not",
    "haven't": "have not",
    havent: "have not",
    "hadn't": "had not",
    hadnt: "had not",
  };

  if (lang === "en") {
    Object.entries(enMap).forEach(([from, to]) => {
      result = result.replace(new RegExp(`\\b${from.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\b`, "g"), to);
    });
  }

  return result;
}

function normalizeAnswerText(text, options = {}) {
  const lang = options.lang || "id";
  let result = String(text || "");

  result = result
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[’`´]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[‐‑‒–—]/g, "-");

  // Simbol umum dibuat menjadi kata agar tidak menggagalkan jawaban.
  result = result
    .replace(/&/g, lang === "en" ? " and " : " dan ")
    .replace(/\+/g, lang === "en" ? " plus " : " tambah ")
    .replace(/=/g, lang === "en" ? " equals " : " sama dengan ")
    .replace(/@/g, " at ");

  if (lang === "id") {
    result = normalizeMoneyText(result);
    result = normalizeNumberAndPercent(result, "id");
    result = normalizeDecimalNumbers(result, "id");
    result = normalizeNumbersToWords(result, "id");
  } else {
    result = normalizeNumberAndPercent(result, "en");
    result = normalizeDecimalNumbers(result, "en");
    result = normalizeNumbersToWords(result, "en");
  }

  result = normalizeCommonAbbreviations(result, lang);

  return result
    .replace(/[.,!?;:(){}\[\]"']/g, " ")
    .replace(/\bpercent\b/g, lang === "id" ? "persen" : "percent")
    .replace(/\s+/g, " ")
    .trim();
}

function compactAnswerText(text) {
  return normalizeAnswerText(text, { lang: "en" }).replace(/\s+/g, "");
}

function isSameAnswer(userAnswer, correctAnswer, lang = "en") {
  const a = normalizeAnswerText(userAnswer, { lang });
  const b = normalizeAnswerText(correctAnswer, { lang });
  if (!a || !b) return false;
  if (a === b) return true;
  const aNoSpace = a.replace(/\s+/g, "");
  const bNoSpace = b.replace(/\s+/g, "");
  return aNoSpace === bNoSpace;
}

function containsNormalized(text, keyword, lang = "id") {
  const full = normalizeAnswerText(text, { lang });
  const key = normalizeAnswerText(keyword, { lang });
  if (!full || !key) return false;
  return full.includes(key) || full.replace(/\s+/g, "").includes(key.replace(/\s+/g, ""));
}

function getRandomQuestions(data, count, storageKey) {
  if (!data || data.length === 0) return [];
  const shuffled = [...data].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function getRandomQuestionsNoRepeat(data, count, storageKey) {
  if (!data || data.length === 0) return [];

  let recent = JSON.parse(localStorage.getItem(storageKey) || "[]");
  let available = data.filter((item) => {
    const key = JSON.stringify(
      item.en || item.idText || item.audioText || item.title || item.word,
    );
    return !recent.includes(key);
  });

  if (available.length < count) {
    available = [...data];
    recent = [];
  }

  const shuffled = [...available].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);

  const selectedKeys = selected.map((item) =>
    JSON.stringify(
      item.en || item.idText || item.audioText || item.title || item.word,
    ),
  );
  const newRecent = [...recent, ...selectedKeys].slice(-30);
  localStorage.setItem(storageKey, JSON.stringify(newRecent));

  return selected;
}

function calculatePronunciationScore(spoken, target, lang = "en") {
  spoken = normalizeAnswerText(spoken, { lang });
  target = normalizeAnswerText(target, { lang });
  if (spoken === target) return 100;
  const spokenNoSpace = spoken.replace(/\s+/g, "");
  const targetNoSpace = target.replace(/\s+/g, "");
  if (spokenNoSpace === targetNoSpace) return 100;
  if (
    spokenNoSpace.includes(targetNoSpace) ||
    targetNoSpace.includes(spokenNoSpace)
  )
    return 85;
  let sameLetters = 0;
  const minLength = Math.min(spokenNoSpace.length, targetNoSpace.length);
  for (let i = 0; i < minLength; i++) {
    if (spokenNoSpace[i] === targetNoSpace[i]) sameLetters++;
  }
  return Math.round((sameLetters / targetNoSpace.length) * 100);
}

// ================= NAVIGASI =================
function hideAllScreens() {
  [
    homeScreen,
    storyScreen,
    flashcardScreen,
    listeningScreen,
    grammarScreen,
    speakingScreen,
    convScreen,
    translateScreen,
    spellingScreen,
    dictionaryScreen,
    tenseScreen,
    foundationScreen,
  ].forEach((s) => s && s.classList.remove("active"));
}

function switchScreen(hideScreen, showScreenObj) {
  if (hideScreen) hideScreen.classList.remove("active");
  setTimeout(() => {
    if (showScreenObj) showScreenObj.classList.add("active");
  }, 100);
}

function goHome() {
  hideAllScreens();
  // FIX BUG #1 & #5: Stop speech dan recognition sebelum kembali ke home
  window.speechSynthesis.cancel();
  safeStopRecognition();
  setTimeout(() => homeScreen.classList.add("active"), 100);
  hideTooltip();
}

// ================= TOOLTIP =================
function showTooltip(element, wordResult, meaningResult) {
  tooltipWord.innerText = wordResult.toLowerCase();
  tooltipMeaning.innerText = meaningResult;
  tooltip.classList.remove("hidden");

  const rect = element.getBoundingClientRect();
  const ttRect = tooltip.getBoundingClientRect();
  const appRect = document.getElementById("app").getBoundingClientRect();

  let topPos = rect.top - appRect.top - ttRect.height - 10;
  let leftPos = rect.left - appRect.left + rect.width / 2 - ttRect.width / 2;
  if (leftPos < 10) leftPos = 10;

  tooltip.style.top = `${topPos}px`;
  tooltip.style.left = `${leftPos}px`;
}

function hideTooltip() {
  if (tooltip) tooltip.classList.add("hidden");
  document
    .querySelectorAll(".clickable-word")
    .forEach((w) => w.classList.remove("active"));
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("clickable-word")) {
    event.stopPropagation();
    document
      .querySelectorAll(".clickable-word")
      .forEach((w) => w.classList.remove("active"));
    event.target.classList.add("active");
    showTooltip(
      event.target,
      event.target.innerText,
      event.target.getAttribute("data-meaning"),
    );
  } else {
    hideTooltip();
  }
});

// ================= INTERACTIVE STORY =================
const FILLER_WORDS = new Set([
  "a",
  "an",
  "the",
  "is",
  "am",
  "are",
  "was",
  "were",
  "be",
  "been",
  "in",
  "on",
  "at",
  "to",
  "from",
  "of",
  "for",
  "and",
  "or",
  "but",
  "he",
  "she",
  "it",
  "they",
  "you",
  "i",
  "we",
  "me",
  "him",
  "her",
  "us",
  "them",
  "this",
  "that",
  "these",
  "those",
  "my",
  "your",
  "his",
  "its",
  "our",
  "their",
  "as",
  "by",
  "with",
  "about",
  "after",
  "before",
  "during",
  "above",
  "below",
  "through",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "can",
  "could",
  "should",
  "may",
  "might",
  "must",
  "said",
  "says",
  "say",
]);

function getStoryHintKeys(storyData) {
  const dictionary = storyData.dictionary || {};
  const manualHints = Array.isArray(storyData.hintWords)
    ? storyData.hintWords
    : Array.isArray(storyData.hintKeys)
      ? storyData.hintKeys
      : null;

  if (manualHints && manualHints.length > 0)
    return manualHints.filter((key) =>
      Object.prototype.hasOwnProperty.call(dictionary, key),
    );

  const storyText = String(storyData.text || "");
  const entries = Object.keys(dictionary).filter((k) => k && k.trim());
  const estimatedHints = Math.round(entries.length * 0.5);
  const targetHints =
    entries.length <= 8
      ? Math.max(1, estimatedHints)
      : Math.min(12, Math.max(8, estimatedHints));

  const wordSpans = [];
  const wordRegex = /\b\w+[\w'-]*\b/g;
  let wm;
  while ((wm = wordRegex.exec(storyText)) !== null)
    wordSpans.push({
      word: wm[0],
      start: wm.index,
      end: wm.index + wm[0].length,
    });

  const findKeySpan = (key) => {
    const regex = new RegExp(
      `\\b${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "i",
    );
    const match = regex.exec(storyText);
    if (!match) return null;
    const start = match.index,
      end = start + match[0].length;
    let si = -1,
      ei = -1;
    wordSpans.forEach((span, idx) => {
      if (span.start === start && si === -1) si = idx;
      if (span.end <= end && span.start >= start) {
        if (si === -1) si = idx;
        ei = idx;
      }
    });
    return si === -1 || ei === -1
      ? null
      : { start, end, startWordIndex: si, endWordIndex: ei };
  };

  const matches = entries
    .map((key) => ({
      key,
      index: storyText.toLowerCase().indexOf(key.toLowerCase()),
      isPhrase: key.includes(" "),
      span: findKeySpan(key),
    }))
    .filter((item) => item.index >= 0 && item.span)
    .sort(
      (a, b) =>
        a.span.startWordIndex - b.span.startWordIndex ||
        Number(b.isPhrase) - Number(a.isPhrase) ||
        b.key.length - a.key.length,
    );

  const selected = [],
    seen = new Set();
  let lastEnd = -1;

  matches.forEach((item) => {
    if (selected.length >= targetHints || seen.has(item.key)) return;
    const gap = item.span.startWordIndex - lastEnd - 1;
    if (lastEnd === -1 || (gap >= 1 && gap <= 3)) {
      seen.add(item.key);
      selected.push(item.key);
      lastEnd = item.span.endWordIndex;
    }
  });

  return selected;
}

function loadStory(storyData) {
  currentSessionData = [storyData];
  storyTitleEl.innerText = storyData.title;

  let rawText = storyData.text;
  let dictionary = storyData.dictionary || {};
  let dictKeys = getStoryHintKeys(storyData).sort(
    (a, b) => b.length - a.length,
  );

  dictKeys.forEach((phrase) => {
    const regex = new RegExp(`\\b(${phrase})\\b`, "gi");
    rawText = rawText.replace(
      regex,
      `<span class="clickable-word" data-meaning="${dictionary[phrase]}">$1</span>`,
    );
  });

  storyContentEl.innerHTML = rawText;

  const transContainer = document.getElementById("story-translation");
  if (transContainer) {
    transContainer.classList.add("hidden");
    transContainer.setAttribute("data-hint-shown", "false");
  }

  const btn = document.querySelector("button[onclick='translateStory()']");
  if (btn) {
    btn.textContent = "Terjemahkan (-50 XP)";
    btn.classList.remove("secondary-btn");
    btn.classList.add("primary-btn");
  }
}

function getHintTranslation(text, dictionary) {
  const filteredDict = {};
  Object.entries(dictionary).forEach(([key, value]) => {
    const words = key.split(" ");
    if (!words.every((w) => FILLER_WORDS.has(w.toLowerCase())))
      filteredDict[key] = value;
  });
  const keys = Object.keys(filteredDict).sort((a, b) => b.length - a.length);
  let hinted = text;
  keys.forEach((k) => {
    try {
      const re = new RegExp(
        "\\b(" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")\\b",
        "gi",
      );
      hinted = hinted.replace(re, () => filteredDict[k]);
    } catch (e) {}
  });
  return hinted;
}

function translateStory() {
  if (!currentSessionData || currentSessionData.length === 0) {
    showAlert("Tidak ada cerita yang sedang dibuka.", "warning");
    return;
  }
  const container = document.getElementById("story-translation");
  if (!container) return;

  const story = currentSessionData[0];
  const text = story.text || "";
  const dictionary = story.dictionary || {};
  const isHintMode = container.getAttribute("data-hint-shown") === "true";

  if (!isHintMode) {
    const hinted = getHintTranslation(text, dictionary);
    container.innerHTML = `<div class="hint-badge">💡 PETUNJUK TERJEMAHAN</div>
      <p style="line-height:1.6;">${hinted}</p>
      <p style="color:var(--muted);font-size:0.85em;margin-top:15px;font-style:italic;">Beberapa kata masih tersembunyi. Coba tebak terlebih dahulu! 🤔</p>`;
    container.setAttribute("data-hint-shown", "true");
    container.classList.remove("hidden");
    container.scrollIntoView({ behavior: "smooth", block: "center" });

    const btn = document.querySelector("button[onclick='translateStory()']");
    if (btn) {
      btn.textContent = "Lihat Terjemahan Lengkap (-50 XP)";
      btn.classList.add("secondary-btn");
      btn.classList.remove("primary-btn");
    }
  } else {
    if (userXP < 50) {
      showAlert(
        "Kamu butuh 50 XP untuk melihat terjemahan lengkap.",
        "warning",
        "💸",
        "XP Kurang!",
      );
      return;
    }
    userXP -= 50;
    updateStatsUI();

    const keys = Object.keys(dictionary).sort((a, b) => b.length - a.length);
    let translated = text;
    keys.forEach((k) => {
      try {
        const re = new RegExp(
          "\\b(" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")\\b",
          "gi",
        );
        translated = translated.replace(re, () => dictionary[k]);
      } catch (e) {}
    });

    container.innerHTML = `<div class="xp-cost">-50 XP</div>
      <p><strong>✓ Terjemahan Lengkap (100%):</strong></p>
      <p style="line-height:1.6;">${translated}</p>
      <p style="color:var(--muted);font-size:0.85em;margin-top:15px;">Gunakan ini untuk mengoreksi tebakan kamu! 📝</p>`;
    container.classList.remove("hidden");
    container.scrollIntoView({ behavior: "smooth", block: "center" });
    container.setAttribute("data-hint-shown", "false");

    const btn = document.querySelector("button[onclick='translateStory()']");
    if (btn) {
      btn.textContent = "Terjemahkan (-50 XP)";
      btn.classList.remove("secondary-btn");
      btn.classList.add("primary-btn");
    }
  }
}

function openStory() {
  let randomStory = getRandomQuestions(
    appDatabase.stories,
    1,
    "recent_story",
  )[0];
  loadStory(randomStory);
  switchScreen(homeScreen, storyScreen);
}

function readStoryAloud() {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(currentSessionData[0].text);
  utterance.lang = "en-US";
  utterance.rate = 0.8;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

// FIX BUG #1: finishStory — cancel speech synthesis dulu, baru jalankan
// urutan yang benar: cancel speech → play sound → tambah XP → alert → goHome
async function finishStory() {
  window.speechSynthesis.cancel(); // hentikan audio yang mungkin masih berjalan
  playSound("correct");
  userXP += 50;
  updateStatsUI();
  await showXPAlert("Cerita selesai dibaca! Kamu keren!", 50, "success");
  goHome();
}

// ================= FLASHCARD =================
function openVocab() {
  currentVocabIndex = 0;
  currentSessionData = getRandomQuestionsNoRepeat(
    appDatabase.vocabularies,
    appDatabase.vocabularies.length,
    "recent_vocab",
  );
  updateStatsUI();
  loadFlashcard(0);
  switchScreen(homeScreen, flashcardScreen);
}

function autoSyllableSplit(word) {
  return word
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .replace(/([aeiouy]+)/g, "$1-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .split("-")
    .join(" - ");
}

function getPronunciationBreakdown(word) {
  const map = {
    rechargeable: "re - charge - a - ble",
    comfortable: "com - fort - a - ble",
    vegetable: "veg - e - ta - ble",
    communication: "com - mu - ni - ca - tion",
    pronunciation: "pro - nun - ci - a - tion",
    specification: "spe - ci - fi - ca - tion",
    compatibility: "com - pa - ti - bi - li - ty",
    recommendation: "re - com - men - da - tion",
    implementation: "im - ple - men - ta - tion",
  };
  return map[word.toLowerCase()] || autoSyllableSplit(word);
}

async function loadFlashcard(index) {
  if (index >= currentSessionData.length) {
    playSound("correct");
    userXP += 20;
    updateStatsUI();
    await showXPAlert("Satu set kosakata selesai!", 20, "success");
    goHome();
    return;
  }

  flashcardItem.classList.remove("flipped");
  const vocabData = currentSessionData[index];
  fcEn.innerText = vocabData.en;
  fcId.innerText = vocabData.id;

  const breakdownBox = document.getElementById("vocab-breakdown-box");
  if (breakdownBox) {
    breakdownBox.innerHTML = `<div class="pronunciation-box">
      <p>Teknik penyebutan:</p>
      <div class="break-word">${getPronunciationBreakdown(vocabData.en)}</div>
      <button class="action-btn secondary-btn" onclick="speakSlowly('${vocabData.en.replace(/'/g, "\\'")}')">🔊 Dengar Perlahan</button>
      <button class="action-btn primary-btn" onclick="speakPerSyllable('${vocabData.en.replace(/'/g, "\\'")}')">🔊 Dengar Per Ejaan</button>
    </div>`;
  }

  const practiceBox = document.getElementById("vocab-pronunciation-box");
  if (practiceBox) {
    practiceBox.innerHTML = `<button class="action-btn primary-btn" onclick="startVocabPronunciation()">🎤 Latih Pengucapan</button>
      <p id="vocab-pronunciation-result" class="instruction-text">Ucapkan kata: <strong>${vocabData.en}</strong></p>`;
  }

  const percent = (index / currentSessionData.length) * 100;
  vocabProgress.style.width = percent + "%";
}

function startVocabPronunciation() {
  if (!recognition) {
    showAlert(
      "Browser tidak mendukung mikrofon.\nGunakan Google Chrome ya!",
      "warning",
      "🎙️",
      "Mikrofon Tidak Tersedia",
    );
    return;
  }
  const vocabData = currentSessionData[currentVocabIndex];

  // FIX BUG #5: stop recognition lama sebelum mulai baru
  safeStopRecognition();

  recognition.lang = "en-US";
  recognition.start();
  const resultEl = document.getElementById("vocab-pronunciation-result");
  resultEl.innerText = "Mendengarkan pengucapanmu...";

  recognition.onresult = function (event) {
    const spokenOriginal = event.results[0][0].transcript;
    let spoken = normalizeAnswerText(spokenOriginal, { lang: "en" });
    let target = normalizeAnswerText(vocabData.en, { lang: "en" });
    const score = calculatePronunciationScore(spoken, target, "en");
    resultEl.innerHTML = `Suaramu terbaca: <strong>${spokenOriginal}</strong><br>
      Nilai pengucapan: <strong>${score}/100</strong><br>
      Cara benar: <strong>${vocabData.en}</strong><br>
      <button class="action-btn secondary-btn" onclick="speakDictionaryWord('${vocabData.en.replace(/'/g, "\\'")}')">🔊 Dengarkan Cara Benar</button>`;
    if (score >= 80) {
      userXP += 5;
      playSound("correct");
    } else {
      playSound("wrong");
    }
    updateStatsUI();
  };
  recognition.onerror = function () {
    resultEl.innerText = "Suara tidak terdengar. Coba ulangi.";
  };
}

function speakSlowly(text) {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.55;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

function speakPerSyllable(word) {
  window.speechSynthesis.cancel();
  const parts = getPronunciationBreakdown(word).split(" - ");
  let index = 0;
  function speakNext() {
    if (index >= parts.length) return;
    const u = new SpeechSynthesisUtterance(parts[index]);
    u.lang = "en-US";
    u.rate = 0.65;
    u.onend = function () {
      index++;
      setTimeout(speakNext, 350);
    };
    window.speechSynthesis.speak(u);
  }
  speakNext();
}

function flipCard() {
  flashcardItem.classList.toggle("flipped");
  if (flashcardItem.classList.contains("flipped")) {
    const u = new SpeechSynthesisUtterance(
      currentSessionData[currentVocabIndex].en,
    );
    u.lang = "en-US";
    window.speechSynthesis.speak(u);
  }
}

async function nextCard(isRemembered) {
  if (!isRemembered) {
    playSound("wrong");
    userHearts--;
    updateStatsUI();
    if (userHearts <= 0) {
      userHearts = 5;
      updateStatsUI();
      await showHeartAlert("Yah, nyawamu habis di Flashcard!");
      goHome();
      return;
    }
  } else {
    playSound("correct");
    userXP += 5;
    addHeart(1);
  }
  currentVocabIndex++;
  loadFlashcard(currentVocabIndex);
}

// ================= LISTENING =================
function openListening() {
  currentListeningIndex = 0;
  currentSessionData = getRandomQuestionsNoRepeat(
    appDatabase.listening,
    5,
    "recent_listening",
  );
  updateStatsUI();
  loadListening(0);
  switchScreen(homeScreen, listeningScreen);
}

async function loadListening(index) {
  if (index >= currentSessionData.length) {
    playSound("correct");
    userXP += 30;
    updateStatsUI();
    await showXPAlert(
      "Sesi Listening selesai! Telingamu tajam!",
      30,
      "success",
    );
    goHome();
    return;
  }
  lsProgress.style.width = (index / currentSessionData.length) * 100 + "%";
  const data = currentSessionData[index];
  lsOptions.innerHTML = "";
  data.options.forEach((optText, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = optText;
    btn.onclick = () => checkListeningAnswer(i, data.answer);
    lsOptions.appendChild(btn);
  });
  playListeningAudio();
}

function playListeningAudio() {
  const data = currentSessionData[currentListeningIndex];
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(data.audioText);
  u.lang = "en-US";
  u.rate = 0.8;
  window.speechSynthesis.speak(u);
}

async function checkListeningAnswer(selectedIndex, correctIndex) {
  if (selectedIndex === correctIndex) {
    playSound("correct");
    userXP += currentSessionData[currentListeningIndex].poin || 10;
    addHeart(1);
    currentListeningIndex++;
    loadListening(currentListeningIndex);
  } else {
    playSound("wrong");
    userHearts--;
    updateStatsUI();
    await showAlert(
      "Jawaban yang benar: " +
        currentSessionData[currentListeningIndex].options[correctIndex],
      "wrong",
      "❌",
      "Oops, Salah!",
    );
    if (userHearts <= 0) {
      userHearts = 5;
      updateStatsUI();
      await showHeartAlert();
      goHome();
    }
  }
}

// ================= GRAMMAR =================
let grSelectedWordsArr = [];
let grAvailableWordsArr = [];

function openGrammar() {
  currentGrammarIndex = 0;
  currentSessionData = getRandomQuestionsNoRepeat(
    appDatabase.grammar,
    5,
    "recent_grammar",
  );
  updateStatsUI();
  loadGrammar(0);
  switchScreen(homeScreen, grammarScreen);
}

async function loadGrammar(index) {
  if (index >= currentSessionData.length) {
    playSound("correct");
    userXP += 40;
    updateStatsUI();
    await showXPAlert("Kamu makin jago susun kalimat Inggris!", 40, "success");
    goHome();
    return;
  }
  grProgress.style.width = (index / currentSessionData.length) * 100 + "%";
  const data = currentSessionData[index];
  grQuestionId.innerText = data.idText;
  grSelectedWordsArr = [];
  grHintText.classList.add("hidden");
  grHintText.classList.remove("answer-mode");
  grHintText.innerText = "";

  // FIX BUG #4: Selalu reset tampilan tombol hint dan answer
  if (grHintBtn) grHintBtn.style.display = "inline-block";
  if (grAnswerBtn) grAnswerBtn.style.display = "inline-block";

  grAvailableWordsArr = [...data.jumbled].sort(() => Math.random() - 0.5);
  renderGrammarUI();
}

function renderGrammarUI() {
  grSelectedZone.innerHTML = "";
  grAvailableZone.innerHTML = "";
  grSelectedWordsArr.forEach((word, idx) => {
    const span = document.createElement("span");
    span.className = "word-pill";
    span.innerText = word;
    span.onclick = () => returnWordToBank(idx);
    grSelectedZone.appendChild(span);
  });
  grAvailableWordsArr.forEach((word, idx) => {
    const span = document.createElement("span");
    span.className = "word-pill";
    span.innerText = word;
    span.onclick = () => pickWord(idx);
    grAvailableZone.appendChild(span);
  });
}

function pickWord(index) {
  grSelectedWordsArr.push(grAvailableWordsArr.splice(index, 1)[0]);
  renderGrammarUI();
}

function returnWordToBank(index) {
  grAvailableWordsArr.push(grSelectedWordsArr.splice(index, 1)[0]);
  renderGrammarUI();
}

async function showGrammarHint() {
  const data = currentSessionData[currentGrammarIndex];
  if (userXP >= 50) {
    userXP -= 50;
    updateStatsUI();
    grHintText.innerText =
      data.hint || "Coba susun Subjek, Kata Kerja, lalu Objek/Keterangan.";
    grHintText.classList.remove("hidden");
    if (grHintBtn) grHintBtn.style.display = "none";
  } else {
    showAlert(
      "Kamu butuh minimal 50 XP untuk membuka bantuan.",
      "warning",
      "💡",
      "XP Kurang!",
    );
  }
}

async function showGrammarAnswer() {
  const data = currentSessionData[currentGrammarIndex];
  if (userXP >= 100) {
    userXP -= 100;
    updateStatsUI();
    grHintText.innerHTML = `<strong>Kunci Jawaban:</strong> ${data.enCorrect.join(" ")}`;
    grHintText.classList.add("answer-mode");
    grHintText.classList.remove("hidden");
    if (grHintBtn) grHintBtn.style.display = "none";
    if (grAnswerBtn) grAnswerBtn.style.display = "none";
  } else {
    showAlert(
      "Kamu butuh minimal 100 XP untuk melihat jawaban.",
      "warning",
      "🔑",
      "XP Kurang!",
    );
  }
}

async function checkGrammarAnswer() {
  const data = currentSessionData[currentGrammarIndex];
  if (isSameAnswer(grSelectedWordsArr.join(" "), data.enCorrect.join(" "), "en")) {
    playSound("correct");
    userXP += data.poin || 15;
    addHeart(1);
    currentGrammarIndex++;
    loadGrammar(currentGrammarIndex);
  } else {
    playSound("wrong");
    userHearts--;
    updateStatsUI();
    if (userHearts <= 0) {
      userHearts = 5;
      updateStatsUI();
      await showHeartAlert();
      goHome();
      return;
    }
    await showAlert("Coba susun ulang ya!", "wrong", "🧩", "Belum Tepat!");
  }
}



// ================= TENSE TOEFL TRAINER =================
function openTense() {
  if (!tenseScreen) {
    showAlert("Halaman Tenses belum tersedia.", "warning", "⏳", "Fitur Belum Ada");
    return;
  }

  currentTenseIndex = 0;
  currentTenseLessonIndex = 0;
  currentSessionData = getRandomQuestionsNoRepeat(
    appDatabase.tensePractice || [],
    Math.min(10, (appDatabase.tensePractice || []).length),
    "recent_tense_practice",
  );

  renderTenseTopicOptions();
  renderTenseLesson(0);
  loadTenseQuestion(0);
  updateStatsUI();
  switchScreen(homeScreen, tenseScreen);
}

function renderTenseTopicOptions() {
  if (!tenseTopicSelect) return;
  const lessons = appDatabase.tenseLessons || [];
  tenseTopicSelect.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const opt = document.createElement("option");
    opt.value = index;
    opt.textContent = `${index + 1}. ${lesson.name}`;
    tenseTopicSelect.appendChild(opt);
  });
}

function changeTenseTopic() {
  const index = parseInt(tenseTopicSelect.value || "0");
  currentTenseLessonIndex = index;
  renderTenseLesson(index);
}

function renderTenseLesson(index) {
  const lessons = appDatabase.tenseLessons || [];
  const lesson = lessons[index] || lessons[0];
  if (!lesson) return;

  currentTenseLessonIndex = index;
  if (tenseTopicSelect) tenseTopicSelect.value = String(index);
  if (tenseTopicTitle) tenseTopicTitle.textContent = lesson.name;
  if (tenseFormula) tenseFormula.textContent = lesson.formula;
  if (tensePositive) tensePositive.textContent = lesson.positive;
  if (tenseNegative) tenseNegative.textContent = lesson.negative;
  if (tenseQuestion) tenseQuestion.textContent = lesson.question;
  if (tenseUse) tenseUse.textContent = lesson.use;
  if (tenseSignal) tenseSignal.textContent = lesson.signalWords.join(", ");
  if (tenseToeflFocus) tenseToeflFocus.textContent = lesson.toeflFocus;

  if (tenseExamples) {
    tenseExamples.innerHTML = "";
    lesson.examples.forEach((example) => {
      const item = document.createElement("div");
      item.className = "tense-example-item";
      item.innerHTML = `<strong>${example.en}</strong><span>${example.id}</span>`;
      tenseExamples.appendChild(item);
    });
  }
}

function speakTenseExample() {
  const lessons = appDatabase.tenseLessons || [];
  const lesson = lessons[currentTenseLessonIndex] || lessons[0];
  if (!lesson || !lesson.examples || !lesson.examples[0]) return;
  speakDictionaryWord(lesson.examples[0].en);
}

function loadTenseQuestion(index) {
  if (!currentSessionData || currentSessionData.length === 0) {
    showAlert("Data latihan tense belum tersedia di data.js.", "warning", "⏳", "Data Kosong");
    goHome();
    return;
  }

  if (index >= currentSessionData.length) {
    playSound("correct");
    userXP += 80;
    updateStatsUI();
    showXPAlert("Sesi Tenses selesai! Kamu makin siap menghadapi soal TOEFL structure.", 80, "success").then(() => goHome());
    return;
  }

  const data = currentSessionData[index];
  if (tenseProgress) tenseProgress.style.width = (index / currentSessionData.length) * 100 + "%";
  if (tenseBadge) tenseBadge.textContent = data.tense || "Tense Practice";
  if (tenseQuestionId) tenseQuestionId.textContent = data.idText;
  if (tenseHintText) {
    tenseHintText.classList.add("hidden");
    tenseHintText.classList.remove("answer-mode");
    tenseHintText.innerHTML = "";
  }
  if (tenseResult) {
    tenseResult.classList.add("hidden");
    tenseResult.className = "tense-result hidden";
    tenseResult.innerHTML = "";
  }
  if (tenseHintBtn) tenseHintBtn.style.display = "inline-block";
  if (tenseAnswerBtn) tenseAnswerBtn.style.display = "inline-block";

  tenseSelectedWordsArr = [];
  tenseAvailableWordsArr = [...data.jumbled].sort(() => Math.random() - 0.5);
  renderTensePracticeUI();
}

function renderTensePracticeUI() {
  if (!tenseSelectedZone || !tenseAvailableZone) return;

  tenseSelectedZone.innerHTML = "";
  tenseAvailableZone.innerHTML = "";

  tenseSelectedWordsArr.forEach((word, idx) => {
    const span = document.createElement("span");
    span.className = "word-pill tense-word-pill selected";
    span.textContent = word;
    span.onclick = () => returnTenseWordToBank(idx);
    tenseSelectedZone.appendChild(span);
  });

  tenseAvailableWordsArr.forEach((word, idx) => {
    const span = document.createElement("span");
    span.className = "word-pill tense-word-pill";
    span.textContent = word;
    span.onclick = () => pickTenseWord(idx);
    tenseAvailableZone.appendChild(span);
  });
}

function pickTenseWord(index) {
  tenseSelectedWordsArr.push(tenseAvailableWordsArr.splice(index, 1)[0]);
  renderTensePracticeUI();
}

function returnTenseWordToBank(index) {
  tenseAvailableWordsArr.push(tenseSelectedWordsArr.splice(index, 1)[0]);
  renderTensePracticeUI();
}

function resetTenseQuestion() {
  const data = currentSessionData[currentTenseIndex];
  if (!data) return;
  tenseSelectedWordsArr = [];
  tenseAvailableWordsArr = [...data.jumbled].sort(() => Math.random() - 0.5);
  if (tenseResult) tenseResult.classList.add("hidden");
  renderTensePracticeUI();
}

async function showTenseHint() {
  const data = currentSessionData[currentTenseIndex];
  if (!data) return;

  if (userXP >= 30) {
    userXP -= 30;
    updateStatsUI();
    tenseHintText.innerHTML = `<strong>Petunjuk:</strong> ${data.hint}<br><strong>Pola:</strong> ${data.pattern || "Subject + Verb + Object/Complement"}`;
    tenseHintText.classList.remove("hidden");
    if (tenseHintBtn) tenseHintBtn.style.display = "none";
  } else {
    showAlert("Kamu butuh minimal 30 XP untuk membuka bantuan.", "warning", "💡", "XP Kurang!");
  }
}

async function showTenseAnswer() {
  const data = currentSessionData[currentTenseIndex];
  if (!data) return;

  if (userXP >= 80) {
    userXP -= 80;
    updateStatsUI();
    tenseHintText.innerHTML = `<strong>Kunci Jawaban:</strong> ${data.enCorrect.join(" ")}<br><strong>Penjelasan:</strong> ${data.explanation}`;
    tenseHintText.classList.add("answer-mode");
    tenseHintText.classList.remove("hidden");
    if (tenseHintBtn) tenseHintBtn.style.display = "none";
    if (tenseAnswerBtn) tenseAnswerBtn.style.display = "none";
  } else {
    showAlert("Kamu butuh minimal 80 XP untuk melihat jawaban.", "warning", "🔑", "XP Kurang!");
  }
}

async function checkTenseAnswer() {
  const data = currentSessionData[currentTenseIndex];
  if (!data) return;

  const userAnswer = tenseSelectedWordsArr.join(" ");
  const correctAnswer = data.enCorrect.join(" ");

  if (isSameAnswer(userAnswer, correctAnswer, "en")) {
    playSound("correct");
    userXP += data.poin || 20;
    addHeart(1);
    updateStatsUI();
    tenseResult.className = "tense-result success";
    tenseResult.innerHTML = `<strong>Benar! +${data.poin || 20} XP</strong><p>${data.explanation}</p>`;
    tenseResult.classList.remove("hidden");
  } else {
    playSound("wrong");
    userHearts--;
    updateStatsUI();
    tenseResult.className = "tense-result wrong";
    tenseResult.innerHTML = `<strong>Belum tepat.</strong><p>Cek lagi urutan Subject, auxiliary, verb, dan keterangan waktunya.</p>`;
    tenseResult.classList.remove("hidden");

    if (userHearts <= 0) {
      userHearts = 5;
      updateStatsUI();
      await showHeartAlert("Nyawamu habis di latihan Tenses. Ulangi lagi dari menu utama ya.");
      goHome();
    }
  }
}

function nextTenseQuestion() {
  currentTenseIndex++;
  loadTenseQuestion(currentTenseIndex);
}

function speakCurrentTenseAnswer() {
  const data = currentSessionData[currentTenseIndex];
  if (!data) return;
  speakDictionaryWord(data.enCorrect.join(" "));
}



// ================= ENGLISH FOUNDATION =================
function openFoundation() {
  if (!foundationScreen) {
    showAlert("Halaman English Foundation belum tersedia.", "warning", "🏗️", "Fitur Belum Ada");
    return;
  }
  renderFoundationOptions();
  renderFoundationModule(currentFoundationModuleIndex || 0);
  renderFoundationTenseMap();
  renderFoundationVocabulary();
  showFoundationTab("material");
  updateStatsUI();
  switchScreen(homeScreen, foundationScreen);
}

function showFoundationTab(tabName) {
  if (tabName !== "tense") closeFoundationTenseDetail();
  const tabs = ["material", "tense", "vocab"];
  tabs.forEach((tab) => {
    const btn = document.getElementById(`fd-tab-${tab}`);
    const panel = document.getElementById(`fd-${tab}-panel`);
    if (btn) btn.classList.toggle("active", tab === tabName);
    if (panel) panel.classList.toggle("active", tab === tabName);
  });
}

function renderFoundationOptions() {
  if (!fdModuleSelect) return;
  const modules = appDatabase.foundationModules || [];
  fdModuleSelect.innerHTML = "";
  modules.forEach((module, index) => {
    const opt = document.createElement("option");
    opt.value = index;
    opt.textContent = `${index + 1}. ${module.title}`;
    fdModuleSelect.appendChild(opt);
  });
}

function changeFoundationModule() {
  const index = parseInt(fdModuleSelect.value || "0");
  renderFoundationModule(index);
}

function renderFoundationModule(index) {
  const modules = appDatabase.foundationModules || [];
  const module = modules[index] || modules[0];
  if (!module) return;

  currentFoundationModuleIndex = index;
  if (fdModuleSelect) fdModuleSelect.value = String(index);
  if (fdModuleTitle) fdModuleTitle.textContent = module.title;
  if (fdModuleGoal) fdModuleGoal.textContent = module.goal;
  if (fdModuleStructure) fdModuleStructure.textContent = module.structure;
  if (fdModuleExplanation) fdModuleExplanation.innerHTML = `<p>${module.explanation}</p>`;

  if (fdKeyPoints) {
    fdKeyPoints.innerHTML = "";
    (module.keyPoints || []).forEach((point) => {
      const item = document.createElement("div");
      item.className = "foundation-chip";
      item.textContent = point;
      fdKeyPoints.appendChild(item);
    });
  }

  if (fdExamples) {
    fdExamples.innerHTML = "";
    (module.examples || []).forEach((example) => {
      const item = document.createElement("div");
      item.className = "foundation-example-item";
      item.innerHTML = `<strong>${example.en}</strong><span>${example.id}</span><button onclick="speakDictionaryWord('${example.en.replace(/'/g, "\\'")}')">🔊</button>`;
      fdExamples.appendChild(item);
    });
  }

  if (fdMistakes) {
    fdMistakes.innerHTML = "";
    (module.mistakes || []).forEach((mistake) => {
      const item = document.createElement("div");
      item.className = "foundation-mistake-item";
      item.innerHTML = `<strong>❌ ${mistake.wrong}</strong><span>✅ ${mistake.correct}</span><p>${mistake.note}</p>`;
      fdMistakes.appendChild(item);
    });
  }
}

function speakFoundationExample() {
  const modules = appDatabase.foundationModules || [];
  const module = modules[currentFoundationModuleIndex] || modules[0];
  if (!module || !module.examples || !module.examples[0]) return;
  speakDictionaryWord(module.examples[0].en);
}

function renderFoundationTenseMap() {
  if (!fdTenseMap) return;
  const lessons = appDatabase.tenseLessons || [];
  fdTenseMap.innerHTML = "";
  lessons.forEach((lesson, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "foundation-tense-item foundation-tense-clickable";
    item.onclick = () => openFoundationTenseDetail(index);
    item.innerHTML = `<div class="foundation-tense-number">${index + 1}</div>
      <div class="foundation-tense-summary">
        <strong>${lesson.name}</strong>
        <p>${lesson.formula}</p>
        <span>${lesson.use}</span>
        <em>Ketuk untuk belajar contoh penggunaan dan struktur kalimat ➜</em>
      </div>`;
    fdTenseMap.appendChild(item);
  });

  const detail = document.getElementById("fd-tense-detail");
  if (detail) {
    detail.classList.add("hidden");
    detail.innerHTML = "";
  }
}

function buildDefaultTenseDetail(lesson) {
  return {
    intro: lesson.use || "Pelajari fungsi tense ini melalui pola, contoh, dan struktur kalimat.",
    whenToUse: [
      lesson.use || "Digunakan sesuai konteks waktu dan bentuk kata kerja.",
      `Signal words yang sering muncul: ${(lesson.signalWords || []).join(", ") || "lihat konteks kalimat"}.`,
      lesson.toeflFocus || "Perhatikan bentuk verb, auxiliary, dan kesesuaian subject."
    ],
    examples: (lesson.examples || []).map((example) => ({
      en: example.en,
      id: example.id,
      parts: autoBreakSentence(example.en, lesson.name)
    })),
    notes: [
      lesson.positive ? `Positif: ${lesson.positive}` : "",
      lesson.negative ? `Negatif: ${lesson.negative}` : "",
      lesson.question ? `Pertanyaan: ${lesson.question}` : "",
      lesson.toeflFocus || ""
    ].filter(Boolean),
    vocabulary: []
  };
}

function autoBreakSentence(sentence, tenseName = "") {
  const s = sentence.replace(/[.?!]/g, "");
  const words = s.split(/\s+/);
  const lower = s.toLowerCase();

  if (tenseName.includes("Continuous")) {
    const beIndex = words.findIndex((w) => ["am", "is", "are", "was", "were", "be"].includes(w.toLowerCase()));
    if (beIndex > 0) {
      return [
        { text: words.slice(0, beIndex).join(" "), role: "Subject", note: "pelaku/topik kalimat" },
        { text: words[beIndex], role: "Auxiliary / to be", note: "penanda continuous" },
        { text: words[beIndex + 1] || "Verb-ing", role: "Verb-ing", note: "aksi yang sedang berlangsung" },
        { text: words.slice(beIndex + 2).join(" "), role: "Object / Complement / Adverb", note: "pelengkap, objek, waktu, tempat, atau keterangan" },
      ].filter((x) => x.text);
    }
  }

  if (tenseName.includes("Perfect")) {
    const auxIndex = words.findIndex((w) => ["have", "has", "had"].includes(w.toLowerCase()));
    if (auxIndex > 0) {
      const beenIndex = words.findIndex((w) => w.toLowerCase() === "been");
      return [
        { text: words.slice(0, auxIndex).join(" "), role: "Subject", note: "pelaku/topik kalimat" },
        { text: words[auxIndex], role: "Auxiliary", note: "have/has/had sebagai penanda perfect" },
        beenIndex > auxIndex ? { text: "been", role: "Been", note: "penghubung perfect continuous/passive" } : null,
        { text: words.slice(auxIndex + 1, beenIndex > auxIndex ? beenIndex : auxIndex + 2).join(" "), role: beenIndex > auxIndex ? "Verb 3 / Penghubung" : "Verb 3", note: "bentuk past participle" },
        { text: words.slice((beenIndex > auxIndex ? beenIndex + 1 : auxIndex + 2)).join(" "), role: "Object / Complement / Adverb", note: "pelengkap informasi" },
      ].filter((x) => x && x.text);
    }
  }

  if (tenseName.includes("Future")) {
    const willIndex = words.findIndex((w) => ["will", "would"].includes(w.toLowerCase()));
    if (willIndex > 0) {
      return [
        { text: words.slice(0, willIndex).join(" "), role: "Subject", note: "pelaku/topik kalimat" },
        { text: words[willIndex], role: "Modal", note: "will/would sebagai penanda future/past future" },
        { text: words.slice(willIndex + 1, willIndex + 3).join(" "), role: "Verb phrase", note: "kata kerja utama setelah modal" },
        { text: words.slice(willIndex + 3).join(" "), role: "Object / Complement / Adverb", note: "pelengkap informasi" },
      ].filter((x) => x.text);
    }
  }

  return [
    { text: words[0] || "", role: "Subject", note: "pelaku/topik kalimat" },
    { text: words[1] || "", role: "Verb", note: "kata kerja utama" },
    { text: words.slice(2).join(" "), role: "Object / Complement / Adverb", note: "objek, pelengkap, waktu, tempat, atau keterangan" },
  ].filter((x) => x.text);
}

const foundationTenseDetailLibrary = {
  "Simple Present Tense": {
    intro: "Simple Present dipakai untuk kebiasaan, fakta umum, jadwal tetap, dan pernyataan yang dianggap benar secara umum.",
    whenToUse: [
      "Gunakan untuk aktivitas yang dilakukan berulang, misalnya every day, usually, often.",
      "Gunakan untuk fakta umum atau kebenaran ilmiah.",
      "Untuk he, she, it, atau subjek tunggal, verb biasanya ditambah s/es."
    ],
    examples: [
      { en: "I play football every Sunday.", id: "Saya bermain sepak bola setiap hari Minggu.", parts: [
        { text: "I", role: "Subject", note: "pelaku kalimat" },
        { text: "play", role: "Verb 1", note: "kata kerja dasar karena subject I" },
        { text: "football", role: "Object", note: "hal yang dimainkan" },
        { text: "every Sunday", role: "Adverb of time", note: "penanda kebiasaan/jadwal" },
      ]},
      { en: "She studies English every night.", id: "Dia belajar bahasa Inggris setiap malam.", parts: [
        { text: "She", role: "Subject", note: "subjek tunggal perempuan" },
        { text: "studies", role: "Verb s/es", note: "study berubah menjadi studies karena subject she" },
        { text: "English", role: "Object", note: "hal yang dipelajari" },
        { text: "every night", role: "Adverb of time", note: "penanda kebiasaan" },
      ]},
      { en: "The sun rises in the east.", id: "Matahari terbit di timur.", parts: [
        { text: "The sun", role: "Subject", note: "benda tunggal" },
        { text: "rises", role: "Verb s/es", note: "rise + s karena subject tunggal" },
        { text: "in the east", role: "Adverb of place", note: "keterangan tempat/arah" },
      ]},
    ],
    notes: ["I/You/We/They + V1", "He/She/It + V-s/es", "Negatif: do/does not + V1", "Pertanyaan: Do/Does + subject + V1?"],
    vocabulary: ["always", "usually", "often", "sometimes", "never", "every day", "every night"]
  },
  "Present Continuous Tense": {
    intro: "Present Continuous dipakai untuk kegiatan yang sedang berlangsung sekarang atau rencana dekat yang sudah diatur.",
    whenToUse: ["Gunakan ketika aksi sedang terjadi saat berbicara.", "Gunakan untuk rencana dekat: I am meeting my teacher tomorrow.", "Wajib memakai am/is/are sebelum Verb-ing."],
    examples: [
      { en: "I am studying English now.", id: "Saya sedang belajar bahasa Inggris sekarang.", parts: [
        { text: "I", role: "Subject", note: "pelaku" },
        { text: "am", role: "To be", note: "pasangan subject I" },
        { text: "studying", role: "Verb-ing", note: "aksi yang sedang berlangsung" },
        { text: "English", role: "Object", note: "hal yang dipelajari" },
        { text: "now", role: "Adverb of time", note: "penanda waktu sekarang" },
      ]},
      { en: "They are playing football in the field.", id: "Mereka sedang bermain sepak bola di lapangan.", parts: [
        { text: "They", role: "Subject", note: "subjek jamak" },
        { text: "are", role: "To be", note: "pasangan they/we/you" },
        { text: "playing", role: "Verb-ing", note: "aksi sedang berlangsung" },
        { text: "football", role: "Object", note: "hal yang dimainkan" },
        { text: "in the field", role: "Adverb of place", note: "keterangan tempat" },
      ]},
    ],
    notes: ["Subject + am/is/are + Verb-ing", "Jangan menulis: She reading", "Yang benar: She is reading"],
    vocabulary: ["now", "right now", "currently", "at the moment", "today"]
  },
  "Present Perfect Tense": {
    intro: "Present Perfect menghubungkan masa lalu dengan masa sekarang. Fokusnya bukan kapan tepatnya, tetapi hasil atau pengalaman.",
    whenToUse: ["Pengalaman hidup: I have visited Bali.", "Hasil yang masih terasa sekarang: She has finished her homework.", "Durasi dari masa lalu sampai sekarang: for, since."],
    examples: [
      { en: "She has finished her homework.", id: "Dia sudah menyelesaikan PR-nya.", parts: [
        { text: "She", role: "Subject", note: "subjek tunggal" },
        { text: "has", role: "Auxiliary", note: "have/has untuk present perfect" },
        { text: "finished", role: "Verb 3", note: "past participle dari finish" },
        { text: "her homework", role: "Object", note: "hal yang diselesaikan" },
      ]},
      { en: "We have lived here for five years.", id: "Kami telah tinggal di sini selama lima tahun.", parts: [
        { text: "We", role: "Subject", note: "subjek jamak" },
        { text: "have", role: "Auxiliary", note: "dipakai untuk I/you/we/they" },
        { text: "lived", role: "Verb 3", note: "past participle dari live" },
        { text: "here", role: "Adverb of place", note: "keterangan tempat" },
        { text: "for five years", role: "Duration", note: "durasi sampai sekarang" },
      ]},
    ],
    notes: ["Subject + have/has + Verb 3", "Already, yet, just, ever, never sering muncul", "Jangan pakai waktu lampau spesifik seperti yesterday untuk present perfect biasa"],
    vocabulary: ["already", "yet", "just", "ever", "never", "since", "for"]
  },
  "Present Perfect Continuous Tense": {
    intro: "Present Perfect Continuous menekankan proses kegiatan yang dimulai di masa lalu dan masih berlangsung atau efeknya masih terasa sekarang.",
    whenToUse: ["Gunakan untuk durasi kegiatan: for three years, since morning.", "Fokus pada proses, bukan hanya hasil.", "Pola wajib: have/has + been + Verb-ing."],
    examples: [
      { en: "She has been studying English for three years.", id: "Dia telah belajar bahasa Inggris selama tiga tahun.", parts: [
        { text: "She", role: "Subject", note: "subjek tunggal" },
        { text: "has", role: "Auxiliary", note: "has untuk she/he/it" },
        { text: "been", role: "Perfect continuous marker", note: "penanda perfect continuous" },
        { text: "studying", role: "Verb-ing", note: "aksi yang berlangsung" },
        { text: "English", role: "Object", note: "hal yang dipelajari" },
        { text: "for three years", role: "Duration", note: "lamanya kegiatan" },
      ]},
      { en: "They have been waiting since morning.", id: "Mereka telah menunggu sejak pagi.", parts: [
        { text: "They", role: "Subject", note: "subjek jamak" },
        { text: "have", role: "Auxiliary", note: "have untuk they/we/you/I" },
        { text: "been waiting", role: "Been + Verb-ing", note: "proses menunggu" },
        { text: "since morning", role: "Starting point", note: "titik awal waktu" },
      ]},
    ],
    notes: ["Subject + have/has + been + Verb-ing", "For = durasi", "Since = titik awal"],
    vocabulary: ["for", "since", "all day", "recently", "lately"]
  },
  "Simple Past Tense": {
    intro: "Simple Past dipakai untuk kejadian yang selesai di masa lalu dengan waktu yang jelas.",
    whenToUse: ["Gunakan untuk kejadian kemarin, minggu lalu, tahun lalu.", "Kata kerja utama berubah ke Verb 2.", "Setelah did/did not, verb kembali ke Verb 1."],
    examples: [
      { en: "They visited the museum yesterday.", id: "Mereka mengunjungi museum kemarin.", parts: [
        { text: "They", role: "Subject", note: "pelaku" },
        { text: "visited", role: "Verb 2", note: "bentuk lampau dari visit" },
        { text: "the museum", role: "Object", note: "tempat yang dikunjungi" },
        { text: "yesterday", role: "Past time", note: "penanda waktu lampau" },
      ]},
      { en: "I played football last week.", id: "Saya bermain sepak bola minggu lalu.", parts: [
        { text: "I", role: "Subject", note: "pelaku" },
        { text: "played", role: "Verb 2", note: "play + ed" },
        { text: "football", role: "Object", note: "hal yang dimainkan" },
        { text: "last week", role: "Past time", note: "penanda waktu lampau" },
      ]},
    ],
    notes: ["Subject + Verb 2", "Negatif: did not + V1", "Pertanyaan: Did + subject + V1?"],
    vocabulary: ["yesterday", "last night", "last week", "ago", "in 2020"]
  },
  "Past Continuous Tense": {
    intro: "Past Continuous dipakai untuk kegiatan yang sedang berlangsung pada waktu tertentu di masa lalu.",
    whenToUse: ["Sering dipakai dengan when/while.", "Menjelaskan aksi sedang berlangsung yang disela aksi lain.", "Pola: was/were + Verb-ing."],
    examples: [
      { en: "I was studying when my friend called.", id: "Saya sedang belajar ketika teman saya menelepon.", parts: [
        { text: "I", role: "Subject", note: "pelaku" },
        { text: "was", role: "To be past", note: "pasangan I/he/she/it" },
        { text: "studying", role: "Verb-ing", note: "aksi sedang berlangsung di masa lalu" },
        { text: "when my friend called", role: "Time clause", note: "aksi lain yang menyela" },
      ]},
      { en: "They were playing football at five yesterday.", id: "Mereka sedang bermain sepak bola pukul lima kemarin.", parts: [
        { text: "They", role: "Subject", note: "subjek jamak" },
        { text: "were", role: "To be past", note: "pasangan they/we/you" },
        { text: "playing", role: "Verb-ing", note: "aksi berlangsung" },
        { text: "football", role: "Object", note: "hal yang dimainkan" },
        { text: "at five yesterday", role: "Past time", note: "waktu spesifik lampau" },
      ]},
    ],
    notes: ["Subject + was/were + Verb-ing", "Was untuk I/he/she/it", "Were untuk you/we/they"],
    vocabulary: ["while", "when", "at that time", "at five yesterday"]
  }
};

function getFoundationTenseDetail(lesson) {
  const library = foundationTenseDetailLibrary[lesson.name];
  const fallback = buildDefaultTenseDetail(lesson);
  if (!library) return fallback;
  return {
    intro: library.intro || fallback.intro,
    whenToUse: library.whenToUse || fallback.whenToUse,
    examples: library.examples || fallback.examples,
    notes: library.notes || fallback.notes,
    vocabulary: library.vocabulary || fallback.vocabulary
  };
}

function openFoundationTenseDetail(index) {
  const lessons = appDatabase.tenseLessons || [];
  const lesson = lessons[index];
  const detailBox = document.getElementById("fd-tense-detail");
  if (!lesson || !detailBox || !fdTenseMap) return;

  const detail = getFoundationTenseDetail(lesson);
  fdTenseMap.classList.add("hidden");
  detailBox.classList.remove("hidden");

  const examplesHtml = (detail.examples || []).map((example, exIndex) => {
    const partsHtml = (example.parts || []).map((part) => `
      <div class="sentence-part-card">
        <strong>${part.text}</strong>
        <span>${part.role}</span>
        <p>${part.note || ""}</p>
      </div>
    `).join("");

    return `
      <div class="tense-detail-example">
        <div class="tense-detail-example-head">
          <div>
            <strong>${example.en}</strong>
            <span>${example.id || ""}</span>
          </div>
          <button onclick="speakDictionaryWord('${example.en.replace(/'/g, "\\'")}')">🔊</button>
        </div>
        <div class="sentence-part-grid">${partsHtml}</div>
      </div>
    `;
  }).join("");

  const useHtml = (detail.whenToUse || []).map((item) => `<li>${item}</li>`).join("");
  const notesHtml = (detail.notes || []).map((item) => `<div class="foundation-chip">${item}</div>`).join("");
  const vocabHtml = (detail.vocabulary || lesson.signalWords || []).map((item) => `<span>${item}</span>`).join("");

  detailBox.innerHTML = `
    <button class="foundation-back-btn" onclick="closeFoundationTenseDetail()">⬅️ Kembali ke Peta Tenses</button>

    <div class="tense-detail-hero">
      <span class="card-label">Materi Detail</span>
      <h3>${lesson.name}</h3>
      <p>${detail.intro}</p>
    </div>

    <div class="tense-detail-formula-grid">
      <div><span>Rumus Utama</span><strong>${lesson.formula}</strong></div>
      <div><span>Kalimat Positif</span><strong>${lesson.positive || "-"}</strong></div>
      <div><span>Kalimat Negatif</span><strong>${lesson.negative || "-"}</strong></div>
      <div><span>Kalimat Tanya</span><strong>${lesson.question || "-"}</strong></div>
    </div>

    <div class="tense-detail-section">
      <h4>Kapan digunakan?</h4>
      <ul>${useHtml}</ul>
    </div>

    <div class="tense-detail-section">
      <h4>Contoh dan Bedah Struktur Kalimat</h4>
      ${examplesHtml}
    </div>

    <div class="tense-detail-section">
      <h4>Kata kunci / signal words</h4>
      <div class="tense-vocab-pills">${vocabHtml || "<span>Lihat konteks kalimat</span>"}</div>
    </div>

    <div class="tense-detail-section">
      <h4>Catatan penting untuk TOEFL</h4>
      <div class="foundation-chip-list">${notesHtml}</div>
    </div>
  `;

  detailBox.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeFoundationTenseDetail() {
  const detailBox = document.getElementById("fd-tense-detail");
  if (fdTenseMap) fdTenseMap.classList.remove("hidden");
  if (detailBox) {
    detailBox.classList.add("hidden");
    detailBox.innerHTML = "";
  }
}


function getFoundationVocabFiltered() {
  const level = fdVocabLevel ? fdVocabLevel.value : "all";
  const keyword = fdVocabSearch ? fdVocabSearch.value.toLowerCase().trim() : "";
  let words = appDatabase.foundationVocabulary || [];
  if (level !== "all") words = words.filter((item) => item.level === level);
  if (keyword) {
    words = words.filter((item) =>
      item.en.toLowerCase().includes(keyword) ||
      item.id.toLowerCase().includes(keyword) ||
      item.category.toLowerCase().includes(keyword) ||
      item.wordClass.toLowerCase().includes(keyword)
    );
  }
  if (foundationVocabShuffleSeed > 0) {
    words = [...words].sort(() => Math.random() - 0.5);
  }
  return words;
}

function renderFoundationVocabulary() {
  if (!fdVocabList) return;
  const words = getFoundationVocabFiltered();
  if (fdVocabSummary) {
    const total = appDatabase.foundationVocabulary ? appDatabase.foundationVocabulary.length : 0;
    fdVocabSummary.innerHTML = `<strong>${words.length}</strong> kata ditampilkan dari <strong>${total}</strong> bank kosakata. Klik audio untuk mendengar pengucapan.`;
  }

  fdVocabList.innerHTML = "";
  if (words.length === 0) {
    fdVocabList.innerHTML = `<div class="empty-dictionary">Kosakata tidak ditemukan.</div>`;
    return;
  }

  words.slice(0, 500).forEach((word) => {
    const row = document.createElement("div");
    row.className = `foundation-vocab-row level-${word.level.toLowerCase()}`;
    row.innerHTML = `<div class="foundation-vocab-main">
        <div><strong>${word.en}</strong><span>${word.wordClass} • ${word.category}</span></div>
        <button onclick="speakDictionaryWord('${word.en.replace(/'/g, "\\'")}')">🔊</button>
      </div>
      <p>${word.id}</p>
      <small><b>${word.level}</b> — ${word.example}</small>`;
    fdVocabList.appendChild(row);
  });
}

function shuffleFoundationVocabulary() {
  foundationVocabShuffleSeed++;
  renderFoundationVocabulary();
}

// ================= SPEAKING =================
function openSpeaking() {
  if (!SpeechRecognition) {
    showAlert(
      "Browser ini tidak mendukung Voice Recognition.\nGunakan Google Chrome ya!",
      "warning",
      "🎙️",
      "Mikrofon Tidak Tersedia",
    );
    return;
  }
  currentSpeakingIndex = 0;
  currentSessionData = getRandomQuestionsNoRepeat(
    appDatabase.speaking,
    5,
    "recent_speaking",
  );
  updateStatsUI();
  loadSpeaking(0);
  switchScreen(homeScreen, speakingScreen);
}

async function loadSpeaking(index) {
  if (index >= currentSessionData.length) {
    playSound("correct");
    userXP += 50;
    updateStatsUI();
    await showXPAlert("Pengucapanmu keren banget!", 50, "success");
    goHome();
    return;
  }
  spProgress.style.width = (index / currentSessionData.length) * 100 + "%";
  const data = currentSessionData[index];
  spPhrase.innerText = data.en;
  spTranslate.innerText = data.id;
  spResult.innerText = "";
  spResult.className = "sp-result";
  spStatus.innerText = "Tekan mic untuk bicara";
  micBtn.classList.remove("recording");
}

async function startSpeaking() {
  if (!recognition) return;

  // FIX BUG #5: stop recognition lama sebelum mulai baru
  safeStopRecognition();

  recognition.lang = "en-US";
  recognition.start();
  micBtn.classList.add("recording");
  spStatus.innerText = "Mendengarkan... Ucapkan sekarang!";
  spResult.innerText = "";

  recognition.onresult = function (event) {
    const transcriptOriginal = event.results[0][0].transcript;
    const transcript = normalizeAnswerText(transcriptOriginal, { lang: "en" });
    const targetText = normalizeAnswerText(currentSessionData[currentSpeakingIndex].en, { lang: "en" });
    if (isSameAnswer(transcript, targetText, "en")) {
      playSound("correct");
      spResult.innerText = "MANTAP! Benar sekali.";
      spResult.className = "sp-result text-correct";
      userXP += currentSessionData[currentSpeakingIndex].poin || 20;
      addHeart(1);
      setTimeout(() => {
        currentSpeakingIndex++;
        loadSpeaking(currentSpeakingIndex);
      }, 1500);
    } else {
      playSound("wrong");
      spResult.innerText = `Hmm, terdengar seperti: "${transcriptOriginal}". Coba lagi!`;
      spResult.className = "sp-result text-wrong";
      userHearts--;
      updateStatsUI();
      if (userHearts <= 0) {
        setTimeout(async () => {
          userHearts = 5;
          updateStatsUI();
          await showHeartAlert();
          goHome();
        }, 1000);
      }
    }
  };
  recognition.onspeechend = function () {
    recognition.stop();
    micBtn.classList.remove("recording");
  };
  recognition.onerror = function () {
    micBtn.classList.remove("recording");
    spStatus.innerText = "Error. Tekan mic lagi.";
    playSound("wrong");
  };
}

// ================= CONVERSATION ROLEPLAY =================
async function openConversation() {
  if (!SpeechRecognition) {
    showAlert(
      "Browser ini tidak mendukung mikrofon.\nGunakan Google Chrome ya!",
      "warning",
      "🎙️",
      "Mikrofon Tidak Tersedia",
    );
    return;
  }
  if (userHearts <= 0) {
    showAlert(
      "Yah, nyawamu habis! Istirahat dulu.",
      "error",
      "💔",
      "Nyawa Habis!",
    );
    return;
  }

  currentConvIndex = 0;
  currentTurnIndex = 0;
  currentSessionData = getRandomQuestionsNoRepeat(
    appDatabase.conversations,
    5,
    "recent_conversation",
  );
  switchScreen(homeScreen, convScreen);
  loadConversationScreen();
}

function loadConversationScreen() {
  const convData = currentSessionData[currentConvIndex];
  convTitle.innerText = convData.title;
  convChatContainer.innerHTML = "";
  convProgress.style.width = "0%";
  currentTurnIndex = 0;

  const infoDiv = document.createElement("div");
  infoDiv.style.cssText =
    "text-align:center;color:var(--gray);font-style:italic;margin-bottom:10px;";
  infoDiv.innerText = convData.desc;
  convChatContainer.appendChild(infoDiv);

  convMicBtn.disabled = true;
  convInstruction.innerText = "Tunggu giliranmu...";
  setTimeout(playTurn, 1000);
}

async function playTurn() {
  const convData = currentSessionData[currentConvIndex];

  if (currentTurnIndex >= convData.turns.length) {
    currentConvIndex++;
    if (currentConvIndex >= currentSessionData.length) {
      playSound("correct");
      userXP += 80;
      addHeart(1);
      updateStatsUI();
      await showXPAlert(
        "Kamu menyelesaikan 5 percakapan! Luar biasa!",
        80,
        "success",
      );
      goHome();
      return;
    }
    currentTurnIndex = 0;
    loadConversationScreen();
    return;
  }

  convProgress.style.width =
    (currentTurnIndex / convData.turns.length) * 100 + "%";
  const currentLine = convData.turns[currentTurnIndex];

  if (currentLine.speaker === "bot") {
    convMicBtn.disabled = true;
    convMicBtn.style.opacity = "0.5";
    convInstruction.innerText = "Dengarkan lawan bicaramu...";
    convStatus.innerText = "Robot sedang bicara";

    const botDiv = document.createElement("div");
    botDiv.className = "message-bubble msg-bot";
    botDiv.innerHTML = `<strong>Lawan Bicara:</strong> ${currentLine.text}<div class="msg-translation">${currentLine.id_translation}</div>`;
    convChatContainer.appendChild(botDiv);
    convBoard.scrollTop = convBoard.scrollHeight;

    const u = new SpeechSynthesisUtterance(currentLine.text);
    u.lang = "en-US";
    u.rate = 0.9;
    u.onend = function () {
      currentTurnIndex++;
      setTimeout(playTurn, 600);
    };
    window.speechSynthesis.speak(u);
  } else {
    convMicBtn.disabled = false;
    convMicBtn.style.opacity = "1";
    convStatus.innerText = "Tekan mic saat siap bicara";
    convInstruction.innerHTML = `<span style="font-size:0.9rem;">Katakan ini dengan bahasa Inggris:</span><br>
      <strong style="color:var(--primary);font-size:1.2rem;">"${currentLine.expected}"</strong><br>
      <em style="color:#666;font-size:0.85rem;">(${currentLine.id_translation})</em>`;
  }
}

async function startConvSpeaking() {
  if (!recognition) return;

  // FIX BUG #5: stop recognition lama sebelum mulai baru
  safeStopRecognition();

  recognition.lang = "en-US";
  recognition.start();
  convMicBtn.classList.add("listening");
  convStatus.innerText = "Mendengarkan...";
  convMicBtn.innerText = "🔴";

  recognition.onresult = async function (event) {
    const transcriptOriginal = event.results[0][0].transcript;
    const transcript = normalizeAnswerText(transcriptOriginal, { lang: "en" });
    const currentLine =
      currentSessionData[currentConvIndex].turns[currentTurnIndex];
    const expectedArray = currentLine.expected_options || [
      currentLine.expected,
    ];
    const isCorrect = expectedArray.some((opt) => {
      const t = normalizeAnswerText(opt, { lang: "en" });
      return isSameAnswer(transcript, t, "en") || transcript.includes(t);
    });

    if (isCorrect) {
      playSound("correct");
      userXP += 10;
      addHeart(1);
      const userDiv = document.createElement("div");
      userDiv.className = "message-bubble msg-user";
      userDiv.innerHTML = `<strong>Kamu:</strong> ${transcriptOriginal}<div class="msg-translation">${currentLine.id_translation}</div>`;
      convChatContainer.appendChild(userDiv);
      convBoard.scrollTop = convBoard.scrollHeight;
      currentTurnIndex++;
      setTimeout(playTurn, 800);
    } else {
      playSound("wrong");
      userHearts--;
      updateStatsUI();
      const correctAnswer = currentLine.expected;
      await showWrongAlert(transcriptOriginal, correctAnswer);
      speakCorrectPronunciation(correctAnswer);
      if (userHearts <= 0) {
        userHearts = 5;
        updateStatsUI();
        await showHeartAlert("Game Over! Nyawa habis di percakapan.");
        goHome();
      }
    }
  };
  recognition.onspeechend = function () {
    recognition.stop();
    convMicBtn.classList.remove("listening");
    convMicBtn.innerText = "🎤";
    convStatus.innerText = "Tekan mic saat siap bicara";
  };
  recognition.onerror = function (event) {
    convMicBtn.classList.remove("listening");
    convMicBtn.innerText = "🎤";
    convStatus.innerText =
      event.error === "no-speech"
        ? "Suara tidak terdengar, coba lagi."
        : "Gagal membaca suara.";
  };
}

function speakCorrectPronunciation(text) {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.75;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

async function skipConversationTurn() {
  const skipOk = await showConfirm(
    "Lewatkan percakapan ini?\nKamu akan kehilangan 1 hati. 💔",
    "danger",
    "⚠️",
    "Lewatkan?",
  );
  if (!skipOk) return;
  userHearts--;
  updateStatsUI();
  if (userHearts <= 0) {
    userHearts = 5;
    updateStatsUI();
    await showHeartAlert();
    goHome();
    return;
  }
  window.speechSynthesis.cancel();
  currentConvIndex++;
  if (currentConvIndex >= currentSessionData.length) {
    await showAlert(
      "Semua percakapan selesai! Kamu hebat.",
      "success",
      "🎉",
      "Selesai!",
    );
    goHome();
    return;
  }
  currentTurnIndex = 0;
  loadConversationScreen();
}

// ================= SPELLING =================
async function openSpelling() {
  if (userHearts <= 0) {
    showAlert(
      "Yah, nyawamu habis! Istirahat dulu ya.",
      "error",
      "💔",
      "Nyawa Habis!",
    );
    return;
  }
  currentSpellingIndex = 0;
  currentSpellingTurn = 0;

  if (!appDatabase.spellingChats || appDatabase.spellingChats.length === 0) {
    showAlert("Data spelling belum tersedia.", "warning");
    return;
  }

  currentSessionData = getRandomQuestions(
    appDatabase.spellingChats,
    1,
    "recent_spelling",
  );
  switchScreen(homeScreen, spellingScreen);
  loadSpellingScreen();
}

function loadSpellingScreen() {
  const splData = currentSessionData[currentSpellingIndex];
  splTitle.innerText = splData.title;
  splChatContainer.innerHTML = "";
  splProgress.style.width = "0%";
  currentSpellingTurn = 0;
  spellingCanSubmit = false;

  const infoDiv = document.createElement("div");
  infoDiv.style.cssText =
    "text-align:center;color:var(--muted);font-style:italic;margin-bottom:10px;";
  infoDiv.innerText = splData.desc;
  splChatContainer.appendChild(infoDiv);

  splInput.disabled = false;
  splSendBtn.disabled = true;
  splInput.value = "";
  splInstruction.innerText = "Bersiap...";
  splInput.focus();
  setTimeout(playSpellingTurn, 1000);
}

async function playSpellingTurn() {
  const splData = currentSessionData[currentSpellingIndex];
  if (currentSpellingTurn >= splData.turns.length) {
    playSound("correct");
    userXP += 80;
    updateStatsUI();
    await showXPAlert(
      "Latihan ejaan selesai! Ejaanmu makin mantap!",
      80,
      "success",
    );
    goHome();
    return;
  }

  splProgress.style.width =
    (currentSpellingTurn / splData.turns.length) * 100 + "%";
  const currentLine = splData.turns[currentSpellingTurn];

  spellingCanSubmit = false;
  splSendBtn.disabled = true;
  splInstruction.innerText = "Dengarkan audio bot...";

  const botDiv = document.createElement("div");
  botDiv.className = "message-bubble msg-bot";
  botDiv.innerHTML = `<strong>Bot:</strong> 🔊 <i>Audio diputar...</i>
    <div class="msg-translation" style="margin-top:5px;color:var(--muted);font-size:0.85em;">Arti: ${currentLine.id_text}</div>`;
  splChatContainer.appendChild(botDiv);
  splChatContainer.scrollTop = splChatContainer.scrollHeight;

  const tts = new SpeechSynthesisUtterance(currentLine.en_text);
  tts.lang = "en-US";
  tts.rate = 0.85;

  const enableTyping = () => {
    spellingCanSubmit = true;
    splSendBtn.disabled = false;
    splInput.focus();
    splInstruction.innerText = "Ketik jawabanmu dalam bahasa Inggris!";
  };
  const fallback = setTimeout(enableTyping, 3500);

  // FIX BUG #2: Hilangkan kutip ganda ekstra ('') di akhir string onclick
  tts.onend = () => {
    clearTimeout(fallback);
    botDiv.innerHTML = `<strong>Bot:</strong> 🔊 ✅ Dengarkan lalu ketik.
      <div class="msg-translation" style="margin-top:5px;color:var(--muted);font-size:0.85em;">Arti: ${currentLine.id_text}</div>
      <button onclick="playBotAudio('${currentLine.en_text.replace(/'/g, "\\'")})" style="cursor:pointer;background:var(--blue-soft);color:var(--blue-dark);font-weight:800;border:none;padding:6px 12px;border-radius:12px;margin-top:8px;">Ulang Audio 🔊</button>`;
    enableTyping();
  };
  tts.onerror = () => {
    clearTimeout(fallback);
    enableTyping();
  };
  window.speechSynthesis.speak(tts);
}

function playBotAudio(text) {
  const tts = new SpeechSynthesisUtterance(text);
  tts.lang = "en-US";
  tts.rate = 0.85;
  window.speechSynthesis.speak(tts);
}

async function checkSpelling() {
  if (!spellingCanSubmit) return;
  const splData = currentSessionData[currentSpellingIndex];
  const currentLine = splData.turns[currentSpellingTurn];
  const userInput = splInput.value.trim();
  const expected = normalizeAnswerText(currentLine.en_text, { lang: "en" });
  const sanitized = normalizeAnswerText(userInput, { lang: "en" });
  if (sanitized === "") return;

  if (isSameAnswer(sanitized, expected, "en")) {
    playSound("correct");
    userXP += 15;
    addHeart(1);
    const userDiv = document.createElement("div");
    userDiv.className = "message-bubble msg-user";
    userDiv.innerHTML = `<strong>Kamu:</strong> ${splInput.value}`;
    splChatContainer.appendChild(userDiv);
    splChatContainer.scrollTop = splChatContainer.scrollHeight;
    splInput.value = "";
    currentSpellingTurn++;
    setTimeout(playSpellingTurn, 1000);
  } else {
    playSound("wrong");
    userHearts--;
    updateStatsUI();
    splInstruction.innerText = "Salah! Coba dengar lagi dan ketik ulang.";
    splInstruction.style.color = "var(--red)";
    setTimeout(() => {
      splInstruction.innerText = "Ketik jawabanmu dalam bahasa Inggris!";
      splInstruction.style.color = "inherit";
    }, 2000);
    if (userHearts <= 0) {
      userHearts = 5;
      updateStatsUI();
      await showHeartAlert();
      goHome();
    }
  }
}

if (splInput) {
  splInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      checkSpelling();
    }
  });
}

// ================= TRANSLATE SPEAKING =================
async function openTranslateStory() {
  if (!SpeechRecognition) {
    showAlert(
      "Browser ini tidak mendukung voice recognition.\nGunakan Google Chrome ya!",
      "warning",
      "🎙️",
      "Mikrofon Tidak Tersedia",
    );
    return;
  }
  if (!translateScreen) {
    showAlert("Halaman translate-screen belum ada.", "warning");
    return;
  }
  if (
    !appDatabase.translateStories ||
    appDatabase.translateStories.length === 0
  ) {
    showAlert("Data translate belum tersedia.", "warning");
    return;
  }

  currentTranslateIndex = 0;
  let allSentences = [];
  appDatabase.translateStories.forEach((story) => {
    allSentences = allSentences.concat(story.sentences);
  });
  currentTranslateData = getRandomQuestionsNoRepeat(
    allSentences,
    5,
    "recent_translate",
  );

  switchScreen(homeScreen, translateScreen);
  loadTranslateSentence();
}

async function loadTranslateSentence() {
  if (currentTranslateIndex >= currentTranslateData.length) {
    playSound("correct");
    addHeart(1);
    userXP += 30;
    updateStatsUI();
    await showXPAlert(
      "Latihan translate selesai! Kamu jago banget!",
      30,
      "success",
    );
    goHome();
    return;
  }
  const data = currentTranslateData[currentTranslateIndex];
  document.getElementById("tr-english-sentence").innerText = data.en;
  document.getElementById("tr-user-answer").innerText = "Belum ada jawaban.";
  document.getElementById("tr-status").innerText =
    "Tekan mic lalu terjemahkan kalimatnya.";
  document.getElementById("tr-result").classList.add("hidden");
  document.getElementById("tr-answer-box").classList.add("hidden");
  document.getElementById("tr-answer-text").innerText = "";

  let clickableText = data.en;
  const dictionary = data.dictionary || {};
  Object.keys(dictionary)
    .sort((a, b) => b.length - a.length)
    .forEach((word) => {
      const regex = new RegExp(`\\b(${word})\\b`, "gi");
      clickableText = clickableText.replace(
        regex,
        `<span class="clickable-word" data-meaning="${dictionary[word]}">$1</span>`,
      );
    });
  document.getElementById("tr-clickable-words").innerHTML = clickableText;
  document.getElementById("translate-progress").style.width =
    (currentTranslateIndex / currentTranslateData.length) * 100 + "%";
}

function showTranslateAnswer() {
  const data = currentTranslateData[currentTranslateIndex];
  if (userXP < 300) {
    showAlert(
      "Kamu butuh 300 XP untuk membuka kunci jawaban.",
      "warning",
      "🔐",
      "XP Kurang!",
    );
    return;
  }
  userXP -= 300;
  updateStatsUI();
  document.getElementById("tr-answer-box").classList.remove("hidden");
  document.getElementById("tr-answer-text").innerText = data.id;
}

function playTranslateSentence() {
  const data = currentTranslateData[currentTranslateIndex];
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(data.en);
  u.lang = "en-US";
  u.rate = 0.8;
  window.speechSynthesis.speak(u);
}

function startTranslateSpeaking() {
  if (!recognition) return;

  // FIX BUG #5: stop recognition lama sebelum mulai baru
  safeStopRecognition();

  recognition.lang = "id-ID";
  recognition.start();
  document.getElementById("btn-translate-mic").classList.add("recording");
  document.getElementById("tr-status").innerText =
    "Mendengarkan terjemahanmu...";

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase().trim();
    document.getElementById("tr-user-answer").innerText = transcript;
    checkTranslationAnswer(transcript);
  };
  recognition.onspeechend = function () {
    recognition.stop();
    document.getElementById("btn-translate-mic").classList.remove("recording");
  };
  recognition.onerror = function () {
    document.getElementById("btn-translate-mic").classList.remove("recording");
    document.getElementById("tr-status").innerText =
      "Suara tidak terdengar. Coba lagi.";
  };
}

async function checkTranslationAnswer(userAnswer) {
  const data = currentTranslateData[currentTranslateIndex];
  const cleaned = normalizeAnswerText(userAnswer, { lang: "id" });

  const keywords = data.keywords;
  let correctCount = 0,
    missingWords = [];
  keywords.forEach((keyword) => {
    if (containsNormalized(cleaned, keyword, "id")) correctCount++;
    else missingWords.push(keyword);
  });

  const score = Math.round((correctCount / keywords.length) * 100);
  const xpReward = calculateTranslateXP(score);
  userXP += xpReward;
  if (score < 40) {
    userHearts--;
    playSound("wrong");
  } else {
    playSound("correct");
  }
  updateStatsUI();

  document.getElementById("tr-result").classList.remove("hidden");
  document.getElementById("tr-score").innerText = `Nilai: ${score}/100`;
  document.getElementById("tr-feedback").innerText =
    missingWords.length === 0
      ? "Bagus! Terjemahan kamu sudah sangat sesuai."
      : "Kata penting yang belum terdeteksi: " + missingWords.join(", ");
  document.getElementById("tr-xp-result").innerText =
    `XP didapat: +${xpReward}`;

  if (userHearts <= 0) {
    userHearts = 5;
    updateStatsUI();
    await showHeartAlert("Nyawa habis di latihan translate!");
    goHome();
  }
}

function calculateTranslateXP(score) {
  if (score < 40) return 2;
  if (score < 60) return 5;
  if (score < 80) return 10;
  if (score < 90) return 15;
  return 20;
}

function nextTranslateSentence() {
  currentTranslateIndex++;
  loadTranslateSentence();
}

// ================= DICTIONARY =================
function openDictionary() {
  if (!dictionaryScreen) {
    showAlert("Halaman kamus belum tersedia.", "warning");
    return;
  }
  renderDictionaryList();
  switchScreen(homeScreen, dictionaryScreen);
}

function makeExampleSentence(word) {
  const lw = word.toLowerCase();
  const exampleMap = {
    apple: "I eat an apple every morning.",
    book: "I read a book before sleeping.",
    school: "She goes to school by bus.",
    teacher: "The teacher explains the lesson clearly.",
    student: "The student studies English every day.",
    friend: "My friend helps me study English.",
    family: "I love my family very much.",
    mother: "My mother cooks rice in the kitchen.",
    father: "My father goes to work every morning.",
    water: "I drink water after exercise.",
    food: "This food tastes delicious.",
    house: "My house is near the school.",
    market: "She buys vegetables at the market.",
    restaurant: "We eat dinner at the restaurant.",
    cashier: "The cashier gives me the receipt.",
    receipt: "I keep the receipt in my bag.",
    price: "What is the price of this book?",
    money: "I save my money every week.",
    pay: "I pay for my groceries at the cashier.",
    buy: "I want to buy a new bag.",
    sell: "They sell fresh fruit in the market.",
    read: "I read English stories every night.",
    write: "She writes a sentence in her notebook.",
    listen: "I listen to English songs.",
    speak: "I speak English with my friend.",
    study: "We study together after school.",
    learn: "I learn new words every day.",
    practice: "I practice speaking English every morning.",
    translate: "I translate the sentence into Indonesian.",
    grammar: "Grammar helps me make correct sentences.",
    vocabulary: "Vocabulary helps me understand English better.",
  };
  return exampleMap[lw] || `I use the word "${word}" in my English lesson.`;
}

function renderDictionaryList() {
  if (!dictionaryList) return;
  const keyword = dictionarySearch
    ? dictionarySearch.value.toLowerCase().trim()
    : "";
  const words = appDatabase.dictionary || appDatabase.vocabularies || [];
  const filtered = words.filter(
    (item) =>
      item.en.toLowerCase().includes(keyword) ||
      item.id.toLowerCase().includes(keyword),
  );

  dictionaryList.innerHTML = "";
  if (filtered.length === 0) {
    dictionaryList.innerHTML = `<div class="empty-dictionary">Kata tidak ditemukan.</div>`;
    return;
  }

  filtered.forEach((item) => {
    const example = makeExampleSentence(item.en);
    const row = document.createElement("div");
    row.className = "dictionary-row dictionary-row-full";
    row.innerHTML = `<div class="dict-main-row">
      <div class="dict-word-left"><strong>${item.en}</strong>
        <button onclick="speakDictionaryWord('${item.en.replace(/'/g, "\\'")}')">🔊</button></div>
      <div class="dict-word-right">${item.id}</div></div>
      <div class="dict-example-box"><span>Contoh kalimat:</span><p>${example}</p>
        <button onclick="speakDictionaryWord('${example.replace(/'/g, "\\'")}')">🔊 Dengarkan contoh</button></div>`;
    dictionaryList.appendChild(row);
  });
}

function speakDictionaryWord(text) {
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  u.rate = 0.85;
  u.pitch = 1;
  window.speechSynthesis.speak(u);
}

function translateDictionaryWord() {
  const word = dictionaryInput.value.trim();
  if (word === "") {
    showAlert(
      "Masukkan kata bahasa Inggris terlebih dahulu!",
      "warning",
      "📚",
      "Input Kosong",
    );
    return;
  }
  if (userXP < 10) {
    showAlert(
      "Butuh 10 XP untuk menerjemahkan kata.",
      "warning",
      "💸",
      "XP Kurang!",
    );
    return;
  }

  userXP -= 10;
  updateStatsUI();
  const words = appDatabase.dictionary || appDatabase.vocabularies || [];
  const localResult = words.find(
    (item) => item.en.toLowerCase() === word.toLowerCase(),
  );
  dictionaryResult.classList.remove("hidden");

  if (localResult) {
    dictionaryResult.innerHTML = `<div class="xp-cost">-10 XP</div>
      <h3>${localResult.en}</h3><p>${localResult.id}</p>
      <button onclick="speakDictionaryWord('${localResult.en.replace(/'/g, "\\'")}')">🔊 Dengarkan</button>`;
  } else {
    const googleUrl = `https://translate.google.com/?sl=en&tl=id&text=${encodeURIComponent(word)}&op=translate`;
    dictionaryResult.innerHTML = `<div class="xp-cost">-10 XP</div>
      <h3>${word}</h3><p>Kata ini belum ada di kamus lokal.</p>
      <a href="${googleUrl}" target="_blank" class="google-translate-link">Terjemahkan dengan Google Translate / AI</a>`;
  }
}


if (document.getElementById("home-menu-grid")) {
  setHomeMenuFilter("all", document.querySelector(".home-filter-chip.active"));
}

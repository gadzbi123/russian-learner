// Russian alphabet data
const russianAlphabet = [
  { letter: "А", name: "A", sound: "ah", example: "автобус (avtobus) - bus" },
  { letter: "Б", name: "Be", sound: "b", example: "банан (banan) - banana" },
  { letter: "В", name: "Ve", sound: "v", example: "вода (voda) - water" },
  { letter: "Г", name: "Ge", sound: "g", example: "город (gorod) - city" },
  { letter: "Д", name: "De", sound: "d", example: "дом (dom) - house" },
  { letter: "Е", name: "Ye", sound: "ye", example: "есть (yest) - to eat" },
  {
    letter: "Ё",
    name: "Yo",
    sound: "yo",
    example: "ёлка (yolka) - Christmas tree",
  },
  { letter: "Ж", name: "Zhe", sound: "zh", example: "жизнь (zhizn) - life" },
  { letter: "З", name: "Ze", sound: "z", example: "зима (zima) - winter" },
  { letter: "И", name: "I", sound: "ee", example: "имя (imya) - name" },
  { letter: "Й", name: "I kratkoye", sound: "y", example: "мой (moy) - my" },
  { letter: "К", name: "Ka", sound: "k", example: "кот (kot) - cat" },
  { letter: "Л", name: "El", sound: "l", example: "лето (leto) - summer" },
  { letter: "М", name: "Em", sound: "m", example: "мама (mama) - mother" },
  { letter: "Н", name: "En", sound: "n", example: "нос (nos) - nose" },
  { letter: "О", name: "O", sound: "oh", example: "окно (okno) - window" },
  { letter: "П", name: "Pe", sound: "p", example: "папа (papa) - father" },
  {
    letter: "Р",
    name: "Er",
    sound: "r (rolled)",
    example: "рука (ruka) - hand",
  },
  { letter: "С", name: "Es", sound: "s", example: "солнце (solntse) - sun" },
  { letter: "Т", name: "Te", sound: "t", example: "стол (stol) - table" },
  { letter: "У", name: "U", sound: "oo", example: "утро (utro) - morning" },
  { letter: "Ф", name: "Ef", sound: "f", example: "фото (foto) - photo" },
  { letter: "Х", name: "Kha", sound: "kh", example: "хлеб (khleb) - bread" },
  {
    letter: "Ц",
    name: "Tse",
    sound: "ts",
    example: "цветок (tsvetok) - flower",
  },
  { letter: "Ч", name: "Che", sound: "ch", example: "час (chas) - hour" },
  { letter: "Ш", name: "Sha", sound: "sh", example: "школа (shkola) - school" },
  {
    letter: "Щ",
    name: "Shcha",
    sound: "shch",
    example: "щека (shcheka) - cheek",
  },
  {
    letter: "Ъ",
    name: "Tvyordiy znak",
    sound: "hard sign",
    example: "объект (obyekt) - object",
  },
  { letter: "Ы", name: "Y", sound: "ih", example: "мы (my) - we" },
  {
    letter: "Ь",
    name: "Myagkiy znak",
    sound: "soft sign",
    example: "день (den) - day",
  },
  { letter: "Э", name: "E", sound: "eh", example: "это (eto) - this" },
  { letter: "Ю", name: "Yu", sound: "yu", example: "юг (yug) - south" },
  { letter: "Я", name: "Ya", sound: "ya", example: "яблоко (yabloko) - apple" },
];

// Practice words
const practiceWords = [
  // Family & People
  { russian: "мама", pronunciation: "[mama]", translation: "mother" },
  { russian: "папа", pronunciation: "[papa]", translation: "father" },
  { russian: "сын", pronunciation: "[syn]", translation: "son" },
  { russian: "дочь", pronunciation: "[doch]", translation: "daughter" },
  { russian: "брат", pronunciation: "[brat]", translation: "brother" },
  { russian: "сестра", pronunciation: "[sestra]", translation: "sister" },
  {
    russian: "дедушка",
    pronunciation: "[dedushka]",
    translation: "grandfather",
  },
  {
    russian: "бабушка",
    pronunciation: "[babushka]",
    translation: "grandmother",
  },
  { russian: "друг", pronunciation: "[drug]", translation: "friend" },
  { russian: "человек", pronunciation: "[chelovek]", translation: "person" },

  // Home & Objects
  { russian: "дом", pronunciation: "[dom]", translation: "house" },
  {
    russian: "квартира",
    pronunciation: "[kvartira]",
    translation: "apartment",
  },
  { russian: "комната", pronunciation: "[komnata]", translation: "room" },
  { russian: "кухня", pronunciation: "[kukhnya]", translation: "kitchen" },
  { russian: "стол", pronunciation: "[stol]", translation: "table" },
  { russian: "стул", pronunciation: "[stul]", translation: "chair" },
  { russian: "кровать", pronunciation: "[krovat]", translation: "bed" },
  { russian: "окно", pronunciation: "[okno]", translation: "window" },
  { russian: "дверь", pronunciation: "[dver]", translation: "door" },
  { russian: "телефон", pronunciation: "[telefon]", translation: "phone" },
  {
    russian: "компьютер",
    pronunciation: "[kompyuter]",
    translation: "computer",
  },
  {
    russian: "телевизор",
    pronunciation: "[televizor]",
    translation: "television",
  },

  // Animals
  { russian: "кот", pronunciation: "[kot]", translation: "cat" },
  { russian: "собака", pronunciation: "[sobaka]", translation: "dog" },
  { russian: "птица", pronunciation: "[ptitsa]", translation: "bird" },
  { russian: "рыба", pronunciation: "[ryba]", translation: "fish" },
  { russian: "лошадь", pronunciation: "[loshad]", translation: "horse" },
  { russian: "корова", pronunciation: "[korova]", translation: "cow" },
  { russian: "медведь", pronunciation: "[medved]", translation: "bear" },
  { russian: "волк", pronunciation: "[volk]", translation: "wolf" },

  // Food & Drinks
  { russian: "еда", pronunciation: "[yeda]", translation: "food" },
  { russian: "хлеб", pronunciation: "[khleb]", translation: "bread" },
  { russian: "молоко", pronunciation: "[moloko]", translation: "milk" },
  { russian: "вода", pronunciation: "[voda]", translation: "water" },
  { russian: "чай", pronunciation: "[chai]", translation: "tea" },
  { russian: "кофе", pronunciation: "[kofe]", translation: "coffee" },
  { russian: "мясо", pronunciation: "[myaso]", translation: "meat" },
  { russian: "рыба", pronunciation: "[ryba]", translation: "fish" },
  { russian: "овощи", pronunciation: "[ovoshchi]", translation: "vegetables" },
  { russian: "фрукты", pronunciation: "[frukty]", translation: "fruits" },
  { russian: "яблоко", pronunciation: "[yabloko]", translation: "apple" },
  { russian: "банан", pronunciation: "[banan]", translation: "banana" },

  // Time & Nature
  { russian: "время", pronunciation: "[vremya]", translation: "time" },
  { russian: "день", pronunciation: "[den]", translation: "day" },
  { russian: "ночь", pronunciation: "[noch]", translation: "night" },
  { russian: "утро", pronunciation: "[utro]", translation: "morning" },
  { russian: "вечер", pronunciation: "[vecher]", translation: "evening" },
  { russian: "солнце", pronunciation: "[solntse]", translation: "sun" },
  { russian: "луна", pronunciation: "[luna]", translation: "moon" },
  { russian: "звезда", pronunciation: "[zvezda]", translation: "star" },
  { russian: "дождь", pronunciation: "[dozhd]", translation: "rain" },
  { russian: "снег", pronunciation: "[sneg]", translation: "snow" },

  // Education & Work
  { russian: "школа", pronunciation: "[shkola]", translation: "school" },
  {
    russian: "университет",
    pronunciation: "[universitet]",
    translation: "university",
  },
  { russian: "работа", pronunciation: "[rabota]", translation: "work" },
  { russian: "учитель", pronunciation: "[uchitel]", translation: "teacher" },
  { russian: "студент", pronunciation: "[student]", translation: "student" },
  { russian: "книга", pronunciation: "[kniga]", translation: "book" },
  { russian: "урок", pronunciation: "[urok]", translation: "lesson" },
  { russian: "экзамен", pronunciation: "[ekzamen]", translation: "exam" },

  // Colors
  { russian: "красный", pronunciation: "[krasny]", translation: "red" },
  { russian: "синий", pronunciation: "[siniy]", translation: "blue" },
  { russian: "зелёный", pronunciation: "[zelyony]", translation: "green" },
  { russian: "жёлтый", pronunciation: "[zholty]", translation: "yellow" },
  { russian: "чёрный", pronunciation: "[chorny]", translation: "black" },
  { russian: "белый", pronunciation: "[bely]", translation: "white" },

  // Numbers
  { russian: "один", pronunciation: "[odin]", translation: "one" },
  { russian: "два", pronunciation: "[dva]", translation: "two" },
  { russian: "три", pronunciation: "[tri]", translation: "three" },
  { russian: "четыре", pronunciation: "[chetyre]", translation: "four" },
  { russian: "пять", pronunciation: "[pyat]", translation: "five" },
  { russian: "десять", pronunciation: "[desyat]", translation: "ten" },
];

// Practice sentences
const practiceSentences = [
  // Greetings & Basic Phrases
  { russian: "Привет!", pronunciation: "[Privet!]", translation: "Hello!" },
  {
    russian: "Доброе утро!",
    pronunciation: "[Dobroye utro!]",
    translation: "Good morning!",
  },
  {
    russian: "Добрый день!",
    pronunciation: "[Dobry den!]",
    translation: "Good afternoon!",
  },
  {
    russian: "Добрый вечер!",
    pronunciation: "[Dobry vecher!]",
    translation: "Good evening!",
  },
  {
    russian: "Спокойной ночи!",
    pronunciation: "[Spokoinoi nochi!]",
    translation: "Good night!",
  },
  {
    russian: "До свидания!",
    pronunciation: "[Do svidaniya!]",
    translation: "Goodbye!",
  },
  { russian: "Пока!", pronunciation: "[Poka!]", translation: "Bye!" },
  {
    russian: "Увидимся позже!",
    pronunciation: "[Uvidimsya pozzhe!]",
    translation: "See you later!",
  },

  // Introductions
  {
    russian: "Как дела?",
    pronunciation: "[Kak dela?]",
    translation: "How are you?",
  },
  {
    russian: "Как поживаете?",
    pronunciation: "[Kak pozhivayete?]",
    translation: "How are you doing?",
  },
  {
    russian: "Меня зовут...",
    pronunciation: "[Menya zovut...]",
    translation: "My name is...",
  },
  {
    russian: "Как вас зовут?",
    pronunciation: "[Kak vas zovut?]",
    translation: "What is your name?",
  },
  {
    russian: "Очень приятно!",
    pronunciation: "[Ochen priyatno!]",
    translation: "Nice to meet you!",
  },
  {
    russian: "Я из России.",
    pronunciation: "[Ya iz Rossii.]",
    translation: "I am from Russia.",
  },
  {
    russian: "Откуда вы?",
    pronunciation: "[Otkuda vy?]",
    translation: "Where are you from?",
  },
  {
    russian: "Сколько вам лет?",
    pronunciation: "[Skolko vam let?]",
    translation: "How old are you?",
  },

  // Politeness
  {
    russian: "Спасибо!",
    pronunciation: "[Spasibo!]",
    translation: "Thank you!",
  },
  {
    russian: "Большое спасибо!",
    pronunciation: "[Bolshoye spasibo!]",
    translation: "Thank you very much!",
  },
  {
    russian: "Пожалуйста!",
    pronunciation: "[Pozhaluysta!]",
    translation: "Please! / You're welcome!",
  },
  {
    russian: "Извините!",
    pronunciation: "[Izvinite!]",
    translation: "Excuse me! / Sorry!",
  },
  {
    russian: "Простите!",
    pronunciation: "[Prostite!]",
    translation: "Forgive me! / Sorry!",
  },
  {
    russian: "Не за что!",
    pronunciation: "[Ne za chto!]",
    translation: "You're welcome!",
  },

  // Communication
  {
    russian: "Я не понимаю.",
    pronunciation: "[Ya ne ponimayu.]",
    translation: "I don't understand.",
  },
  {
    russian: "Вы понимаете?",
    pronunciation: "[Vy ponimayete?]",
    translation: "Do you understand?",
  },
  {
    russian: "Говорите медленно.",
    pronunciation: "[Govorite medlenno.]",
    translation: "Speak slowly.",
  },
  {
    russian: "Повторите, пожалуйста.",
    pronunciation: "[Povtorite, pozhaluysta.]",
    translation: "Please repeat.",
  },
  {
    russian: "Я изучаю русский язык.",
    pronunciation: "[Ya izuchayu russky yazyk.]",
    translation: "I am learning Russian.",
  },
  {
    russian: "Вы говорите по-английски?",
    pronunciation: "[Vy govorite po-angliyski?]",
    translation: "Do you speak English?",
  },
  {
    russian: "Я не говорю по-русски.",
    pronunciation: "[Ya ne govoryu po-russki.]",
    translation: "I don't speak Russian.",
  },

  // Questions & Directions
  {
    russian: "Где туалет?",
    pronunciation: "[Gde tualet?]",
    translation: "Where is the bathroom?",
  },
  {
    russian: "Где банк?",
    pronunciation: "[Gde bank?]",
    translation: "Where is the bank?",
  },
  {
    russian: "Где метро?",
    pronunciation: "[Gde metro?]",
    translation: "Where is the metro?",
  },
  {
    russian: "Как пройти к...?",
    pronunciation: "[Kak proiti k...?]",
    translation: "How do I get to...?",
  },
  {
    russian: "Сколько это стоит?",
    pronunciation: "[Skolko eto stoit?]",
    translation: "How much does this cost?",
  },
  {
    russian: "Который час?",
    pronunciation: "[Kotory chas?]",
    translation: "What time is it?",
  },
  {
    russian: "Где можно купить...?",
    pronunciation: "[Gde mozhno kupit...?]",
    translation: "Where can I buy...?",
  },

  // Daily Life
  {
    russian: "Я хочу есть.",
    pronunciation: "[Ya khochu yest.]",
    translation: "I want to eat.",
  },
  {
    russian: "Я хочу пить.",
    pronunciation: "[Ya khochu pit.]",
    translation: "I want to drink.",
  },
  {
    russian: "Мне нужна помощь.",
    pronunciation: "[Mne nuzhna pomoshch.]",
    translation: "I need help.",
  },
  {
    russian: "Можно посмотреть меню?",
    pronunciation: "[Mozhno posmotret menyu?]",
    translation: "Can I see the menu?",
  },
  {
    russian: "Счёт, пожалуйста.",
    pronunciation: "[Schyot, pozhaluysta.]",
    translation: "The bill, please.",
  },
  {
    russian: "Где касса?",
    pronunciation: "[Gde kassa?]",
    translation: "Where is the cashier?",
  },

  // Weather & Time
  {
    russian: "Какая сегодня погода?",
    pronunciation: "[Kakaya segodnya pogoda?]",
    translation: "What's the weather today?",
  },
  {
    russian: "Сегодня хорошая погода.",
    pronunciation: "[Segodnya khoroshaya pogoda.]",
    translation: "The weather is nice today.",
  },
  {
    russian: "Идёт дождь.",
    pronunciation: "[Idyot dozhd.]",
    translation: "It's raining.",
  },
  {
    russian: "Сегодня холодно.",
    pronunciation: "[Segodnya kholodno.]",
    translation: "It's cold today.",
  },
  {
    russian: "Завтра будет солнечно.",
    pronunciation: "[Zavtra budet solnechno.]",
    translation: "Tomorrow will be sunny.",
  },

  // Feelings & States
  {
    russian: "Я устал.",
    pronunciation: "[Ya ustal.]",
    translation: "I am tired.",
  },
  {
    russian: "Мне весело.",
    pronunciation: "[Mne veselo.]",
    translation: "I am having fun.",
  },
  {
    russian: "Мне скучно.",
    pronunciation: "[Mne skuchno.]",
    translation: "I am bored.",
  },
  {
    russian: "Я счастлив.",
    pronunciation: "[Ya schastliv.]",
    translation: "I am happy.",
  },
  {
    russian: "Мне грустно.",
    pronunciation: "[Mne grustno.]",
    translation: "I am sad.",
  },

  // Emergency & Important
  { russian: "Помогите!", pronunciation: "[Pomogite!]", translation: "Help!" },
  {
    russian: "Вызовите врача!",
    pronunciation: "[Vyzovite vracha!]",
    translation: "Call a doctor!",
  },
  {
    russian: "Вызовите полицию!",
    pronunciation: "[Vyzovite politsiyu!]",
    translation: "Call the police!",
  },
  {
    russian: "Я потерялся.",
    pronunciation: "[Ya poteryalsya.]",
    translation: "I am lost.",
  },
  {
    russian: "Где больница?",
    pronunciation: "[Gde bolnitsa?]",
    translation: "Where is the hospital?",
  },
];

let currentWordIndex = 0;
let currentSentenceIndex = 0;
let shuffledWords = [];
let shuffledSentences = [];

// Utility function to shuffle an array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  // Shuffle the arrays on page load
  shuffledWords = shuffleArray(practiceWords);
  shuffledSentences = shuffleArray(practiceSentences);

  initializeAlphabet();
  initializeTabs();
  initializeWordPractice();
  initializeSentencePractice();
});

function initializeAlphabet() {
  const alphabetGrid = document.getElementById("alphabetGrid");

  russianAlphabet.forEach((letterData, index) => {
    const letterBtn = document.createElement("button");
    letterBtn.className = "letter-btn";
    letterBtn.textContent = letterData.letter;
    letterBtn.addEventListener("click", () => showLetterDetail(letterData));
    alphabetGrid.appendChild(letterBtn);
  });
}

function showLetterDetail(letterData) {
  const letterDetail = document.getElementById("letterDetail");
  const currentLetter = document.getElementById("currentLetter");
  const letterName = document.getElementById("letterName");
  const letterSound = document.getElementById("letterSound");
  const letterExample = document.getElementById("letterExample");
  const playSound = document.getElementById("playSound");

  currentLetter.textContent = letterData.letter;
  letterName.textContent = letterData.name;
  letterSound.textContent = letterData.sound;
  letterExample.textContent = letterData.example;

  letterDetail.style.display = "block";

  playSound.onclick = () => playLetterSound(letterData.letter);
}

function initializeTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      // Remove active class from all tabs and contents
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Add active class to clicked tab and corresponding content
      btn.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });
}

function initializeWordPractice() {
  updateWordDisplay();

  document.getElementById("nextWord").addEventListener("click", () => {
    currentWordIndex = (currentWordIndex + 1) % shuffledWords.length;
    updateWordDisplay();
  });

  document.getElementById("prevWord").addEventListener("click", () => {
    currentWordIndex =
      currentWordIndex === 0 ? shuffledWords.length - 1 : currentWordIndex - 1;
    updateWordDisplay();
  });

  document.getElementById("playWordSound").addEventListener("click", () => {
    playWordSound(shuffledWords[currentWordIndex].russian);
  });

  document.getElementById("shuffleWords").addEventListener("click", () => {
    shuffledWords = shuffleArray(practiceWords);
    currentWordIndex = 0;
    updateWordDisplay();
  });
}

function updateWordDisplay() {
  const word = shuffledWords[currentWordIndex];
  document.getElementById("russianWord").textContent = word.russian;
  document.getElementById("pronunciation").textContent = word.pronunciation;
  document.getElementById("translation").textContent = word.translation;
}

function initializeSentencePractice() {
  updateSentenceDisplay();

  document.getElementById("nextSentence").addEventListener("click", () => {
    currentSentenceIndex =
      (currentSentenceIndex + 1) % shuffledSentences.length;
    updateSentenceDisplay();
  });

  document.getElementById("prevSentence").addEventListener("click", () => {
    currentSentenceIndex =
      currentSentenceIndex === 0
        ? shuffledSentences.length - 1
        : currentSentenceIndex - 1;
    updateSentenceDisplay();
  });

  document.getElementById("playSentenceSound").addEventListener("click", () => {
    playWordSound(shuffledSentences[currentSentenceIndex].russian);
  });

  document.getElementById("shuffleSentences").addEventListener("click", () => {
    shuffledSentences = shuffleArray(practiceSentences);
    currentSentenceIndex = 0;
    updateSentenceDisplay();
  });
}

function updateSentenceDisplay() {
  const sentence = shuffledSentences[currentSentenceIndex];
  document.getElementById("russianSentence").textContent = sentence.russian;
  document.getElementById("sentencePronunciation").textContent =
    sentence.pronunciation;
  document.getElementById("sentenceTranslation").textContent =
    sentence.translation;
}

// Text-to-speech functions
function playLetterSound(sound) {
  // Create a simple pronunciation for the letter sound
  const utterance = new SpeechSynthesisUtterance(sound);
  utterance.lang = "ru-RU";
  utterance.rate = 0.7;
  speechSynthesis.speak(utterance);
}

function playWordSound(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ru-RU";
  utterance.rate = 0.8;
  speechSynthesis.speak(utterance);
}

// Russian alphabet data
const russianAlphabet = [
    { letter: 'А', name: 'A', sound: 'ah', example: 'автобус (avtobus) - bus' },
    { letter: 'Б', name: 'Be', sound: 'b', example: 'банан (banan) - banana' },
    { letter: 'В', name: 'Ve', sound: 'v', example: 'вода (voda) - water' },
    { letter: 'Г', name: 'Ge', sound: 'g', example: 'город (gorod) - city' },
    { letter: 'Д', name: 'De', sound: 'd', example: 'дом (dom) - house' },
    { letter: 'Е', name: 'Ye', sound: 'ye', example: 'есть (yest) - to eat' },
    { letter: 'Ё', name: 'Yo', sound: 'yo', example: 'ёлка (yolka) - Christmas tree' },
    { letter: 'Ж', name: 'Zhe', sound: 'zh', example: 'жизнь (zhizn) - life' },
    { letter: 'З', name: 'Ze', sound: 'z', example: 'зима (zima) - winter' },
    { letter: 'И', name: 'I', sound: 'ee', example: 'имя (imya) - name' },
    { letter: 'Й', name: 'I kratkoye', sound: 'y', example: 'мой (moy) - my' },
    { letter: 'К', name: 'Ka', sound: 'k', example: 'кот (kot) - cat' },
    { letter: 'Л', name: 'El', sound: 'l', example: 'лето (leto) - summer' },
    { letter: 'М', name: 'Em', sound: 'm', example: 'мама (mama) - mother' },
    { letter: 'Н', name: 'En', sound: 'n', example: 'нос (nos) - nose' },
    { letter: 'О', name: 'O', sound: 'oh', example: 'окно (okno) - window' },
    { letter: 'П', name: 'Pe', sound: 'p', example: 'папа (papa) - father' },
    { letter: 'Р', name: 'Er', sound: 'r (rolled)', example: 'рука (ruka) - hand' },
    { letter: 'С', name: 'Es', sound: 's', example: 'солнце (solntse) - sun' },
    { letter: 'Т', name: 'Te', sound: 't', example: 'стол (stol) - table' },
    { letter: 'У', name: 'U', sound: 'oo', example: 'утро (utro) - morning' },
    { letter: 'Ф', name: 'Ef', sound: 'f', example: 'фото (foto) - photo' },
    { letter: 'Х', name: 'Kha', sound: 'kh', example: 'хлеб (khleb) - bread' },
    { letter: 'Ц', name: 'Tse', sound: 'ts', example: 'цветок (tsvetok) - flower' },
    { letter: 'Ч', name: 'Che', sound: 'ch', example: 'час (chas) - hour' },
    { letter: 'Ш', name: 'Sha', sound: 'sh', example: 'школа (shkola) - school' },
    { letter: 'Щ', name: 'Shcha', sound: 'shch', example: 'щека (shcheka) - cheek' },
    { letter: 'Ъ', name: 'Tvyordiy znak', sound: 'hard sign', example: 'объект (obyekt) - object' },
    { letter: 'Ы', name: 'Y', sound: 'ih', example: 'мы (my) - we' },
    { letter: 'Ь', name: 'Myagkiy znak', sound: 'soft sign', example: 'день (den) - day' },
    { letter: 'Э', name: 'E', sound: 'eh', example: 'это (eto) - this' },
    { letter: 'Ю', name: 'Yu', sound: 'yu', example: 'юг (yug) - south' },
    { letter: 'Я', name: 'Ya', sound: 'ya', example: 'яблоко (yabloko) - apple' }
];

// Practice words
const practiceWords = [
    { russian: 'мама', pronunciation: '[mama]', translation: 'mother' },
    { russian: 'папа', pronunciation: '[papa]', translation: 'father' },
    { russian: 'дом', pronunciation: '[dom]', translation: 'house' },
    { russian: 'кот', pronunciation: '[kot]', translation: 'cat' },
    { russian: 'собака', pronunciation: '[sobaka]', translation: 'dog' },
    { russian: 'вода', pronunciation: '[voda]', translation: 'water' },
    { russian: 'хлеб', pronunciation: '[khleb]', translation: 'bread' },
    { russian: 'молоко', pronunciation: '[moloko]', translation: 'milk' },
    { russian: 'стол', pronunciation: '[stol]', translation: 'table' },
    { russian: 'окно', pronunciation: '[okno]', translation: 'window' },
    { russian: 'книга', pronunciation: '[kniga]', translation: 'book' },
    { russian: 'школа', pronunciation: '[shkola]', translation: 'school' },
    { russian: 'работа', pronunciation: '[rabota]', translation: 'work' },
    { russian: 'время', pronunciation: '[vremya]', translation: 'time' },
    { russian: 'друг', pronunciation: '[drug]', translation: 'friend' }
];

// Practice sentences
const practiceSentences = [
    { russian: 'Привет!', pronunciation: '[Privet!]', translation: 'Hello!' },
    { russian: 'Как дела?', pronunciation: '[Kak dela?]', translation: 'How are you?' },
    { russian: 'Меня зовут...', pronunciation: '[Menya zovut...]', translation: 'My name is...' },
    { russian: 'Я из России.', pronunciation: '[Ya iz Rossii.]', translation: 'I am from Russia.' },
    { russian: 'Спасибо большое!', pronunciation: '[Spasibo bolshoye!]', translation: 'Thank you very much!' },
    { russian: 'До свидания!', pronunciation: '[Do svidaniya!]', translation: 'Goodbye!' },
    { russian: 'Я не понимаю.', pronunciation: '[Ya ne ponimayu.]', translation: 'I don\'t understand.' },
    { russian: 'Говорите медленно.', pronunciation: '[Govorite medlenno.]', translation: 'Speak slowly.' },
    { russian: 'Где туалет?', pronunciation: '[Gde tualet?]', translation: 'Where is the bathroom?' },
    { russian: 'Сколько это стоит?', pronunciation: '[Skolko eto stoit?]', translation: 'How much does this cost?' }
];

let currentWordIndex = 0;
let currentSentenceIndex = 0;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeAlphabet();
    initializeTabs();
    initializeWordPractice();
    initializeSentencePractice();
});

function initializeAlphabet() {
    const alphabetGrid = document.getElementById('alphabetGrid');
    
    russianAlphabet.forEach((letterData, index) => {
        const letterBtn = document.createElement('button');
        letterBtn.className = 'letter-btn';
        letterBtn.textContent = letterData.letter;
        letterBtn.addEventListener('click', () => showLetterDetail(letterData));
        alphabetGrid.appendChild(letterBtn);
    });
}

function showLetterDetail(letterData) {
    const letterDetail = document.getElementById('letterDetail');
    const currentLetter = document.getElementById('currentLetter');
    const letterName = document.getElementById('letterName');
    const letterSound = document.getElementById('letterSound');
    const letterExample = document.getElementById('letterExample');
    const playSound = document.getElementById('playSound');
    
    currentLetter.textContent = letterData.letter;
    letterName.textContent = letterData.name;
    letterSound.textContent = letterData.sound;
    letterExample.textContent = letterData.example;
    
    letterDetail.style.display = 'block';
    
    playSound.onclick = () => playLetterSound(letterData.sound);
}

function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

function initializeWordPractice() {
    updateWordDisplay();
    
    document.getElementById('nextWord').addEventListener('click', () => {
        currentWordIndex = (currentWordIndex + 1) % practiceWords.length;
        updateWordDisplay();
    });
    
    document.getElementById('prevWord').addEventListener('click', () => {
        currentWordIndex = currentWordIndex === 0 ? practiceWords.length - 1 : currentWordIndex - 1;
        updateWordDisplay();
    });
    
    document.getElementById('playWordSound').addEventListener('click', () => {
        playWordSound(practiceWords[currentWordIndex].russian);
    });
}

function updateWordDisplay() {
    const word = practiceWords[currentWordIndex];
    document.getElementById('russianWord').textContent = word.russian;
    document.getElementById('pronunciation').textContent = word.pronunciation;
    document.getElementById('translation').textContent = word.translation;
}

function initializeSentencePractice() {
    updateSentenceDisplay();
    
    document.getElementById('nextSentence').addEventListener('click', () => {
        currentSentenceIndex = (currentSentenceIndex + 1) % practiceSentences.length;
        updateSentenceDisplay();
    });
    
    document.getElementById('prevSentence').addEventListener('click', () => {
        currentSentenceIndex = currentSentenceIndex === 0 ? practiceSentences.length - 1 : currentSentenceIndex - 1;
        updateSentenceDisplay();
    });
    
    document.getElementById('playSentenceSound').addEventListener('click', () => {
        playWordSound(practiceSentences[currentSentenceIndex].russian);
    });
}

function updateSentenceDisplay() {
    const sentence = practiceSentences[currentSentenceIndex];
    document.getElementById('russianSentence').textContent = sentence.russian;
    document.getElementById('sentencePronunciation').textContent = sentence.pronunciation;
    document.getElementById('sentenceTranslation').textContent = sentence.translation;
}

// Text-to-speech functions
function playLetterSound(sound) {
    // Create a simple pronunciation for the letter sound
    const utterance = new SpeechSynthesisUtterance(sound);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.7;
    speechSynthesis.speak(utterance);
}

function playWordSound(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
}
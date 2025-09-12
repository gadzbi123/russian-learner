# Russian Learning App 🇷🇺

An interactive web application for learning the Russian Cyrillic alphabet and pronunciation.

## Features

- **Letters Section**: Learn all 33 Cyrillic letters with pronunciation guides
- **Words Section**: Practice common Russian words with audio
- **Sentences Section**: Learn basic Russian phrases
- **Audio Pronunciation**: Built-in text-to-speech for all content
- **Responsive Design**: Works on desktop and mobile devices

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this project
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Production Mode
```bash
npm start
```

#### Development Mode (with auto-restart)
```bash
npm run dev
```

The server will start at `http://localhost:3000`

## Project Structure

```
russian-learning-app/
├── public/
│   ├── index.html      # Main HTML file
│   ├── styles.css      # Styling
│   └── script.js       # JavaScript functionality
├── server.js           # Express server
├── package.json        # Dependencies and scripts
└── README.md          # This file
```

## How to Use

1. **Letters Tab**: Click on any Cyrillic letter to see its name, sound, and example word
2. **Words Tab**: Navigate through common Russian words with pronunciation guides
3. **Sentences Tab**: Practice basic Russian phrases and expressions

## Audio Features

The app uses the browser's built-in Speech Synthesis API for pronunciation. For best results:
- Use a modern browser (Chrome, Firefox, Safari, Edge)
- Ensure your system has Russian language support installed
- Allow audio permissions when prompted

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Audio**: Web Speech API (SpeechSynthesis)

## License

MIT License - feel free to use this project for educational purposes!
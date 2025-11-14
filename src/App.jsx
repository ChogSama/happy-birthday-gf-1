import { useState } from 'react';
import Cat from './components/Cat.jsx';
import confetti from 'canvas-confetti';
import './App.css';
import FloatingEmoji from './components/FloatingEmoji.jsx';

function App() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [catMessages, setCatMessages] = useState([]);

  const handleOpenGift = () => {
    setGiftOpened(true);
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleCatClick = (index) => {
    const messages = [
      "Thus nuh guft! 🎁",
      "Meuw! 😻",
      "Nuh buliuvublu! 📸",
    ];

    const randomMessage =
      messages[Math.floor(Math.random() * messages.length)];

    setCatMessages((prev) => [
      ...prev,
      { id: index + Date.now(), text: randomMessage },
    ]);

    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="fixed inset-0 overflow-hidden">

      {/* 1. Background */}
      <div className="fixed inset-0 bg-red-500 z-0"></div>

      {/* 2. Floating emojis */}
      <FloatingEmoji className="fixed inset-0 z-10 pointer-events-none" />

      {/* 3. Cats (clickable) */}
      <div className="fixed inset-0 z-20 pointer-events-none">
        {Array.from({ length: 7 }).map((_, i) => (
          <Cat
            key={i}
            onClick={() => handleCatClick(i)}
            className="pointer-events-auto"
          />
        ))}
      </div>

      {/* 4. Main UI content */}
      <div className="relative h-screen w-full flex flex-col items-center justify-start p-8">
        <h1 className="text-center text-white text-5xl md:text-6xl mt-10">
          Happy Birthday, U Duh Duh! 🎉
        </h1>

        {/* Messages */}
        <div className="absolute top-0 left-0 w-full flex flex-col items-center mt-4 pointer-events-none">
          {catMessages.map((msg) => (
            <p key={msg.id} className="text-white text-xl md:text-2xl animate-bounce">
              {msg.text}
            </p>
          ))}
        </div>

        {/* Open Gift Button */}
        {!giftOpened && (
          <button
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition mt-4"
            onClick={handleOpenGift}
          >
            Open Gift 🎁
          </button>
        )}

        {/* Surprise Message */}
        {giftOpened && (
          <p className="text-center text-white text-3xl md:text-4xl mt-16 animate-bounce">
            Surprise! 😻 U Duh Duh!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

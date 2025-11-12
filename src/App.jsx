import { useState } from 'react';
import Cat from './components/Cat.jsx';
import confetti from 'canvas-confetti';
import './App.css';
import FloatingEmoji from './components/FloatingEmoji.jsx';

function App() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [catMessages, setCatMessages] = useState([]); // messages from clicked cats

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
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setCatMessages((prev) => [...prev, { id: index + Date.now(), text: randomMessage }]);
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="fixed inset-0 bg-red-500 overflow-hidden">

      {/* Background layer for cats */}
      <div className="fixed inset-0 z-20 pointer-events-none overflow-visible">
        {Array.from({ length: 7 }).map((_, i) => (
          <Cat
            key={i}
            onClick={() => handleCatClick(i)}
            className="pointer-events-auto" // each cat can still be clicked
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative h-screen w-full bg-red-500 flex flex-col items-center justify-start z-10 p-8">
        <FloatingEmoji />

        <h1 className="text-center text-white text-5xl md:text-6xl mt-10">
          Happy Birthday, U Duh Duh! 🎉
        </h1>

        {/* Cat messages */}
        <div className="absolute top-0 left-0 w-full flex flex-col items-center mt-4 pointer-events-none">
          {catMessages.map((msg) => (
            <p key={msg.id} className="text-white text-xl animate-bounce">
              {msg.text}
            </p>
          ))}
        </div>

        {/* Open Gift Button */}
        {!giftOpened && (
          <div className="flex justify-center mt-16">
            <button
              className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition z-10 relative"
              onClick={handleOpenGift}
            >
              Open Gift 🎁
            </button>
          </div>
        )}

        {/* Message after opening gift */}
        {giftOpened && (
          <p className="text-center text-white text-3xl md:text-4xl mt-16 animate-bounce z-10 relative">
            Surprise! 😻 U Duh Duh!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
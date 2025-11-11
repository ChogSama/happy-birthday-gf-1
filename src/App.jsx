import { useState } from 'react';
import Cat from './components/Cat.jsx';
import confetti from 'canvas-confetti';
import './App.css';
import FloatingEmoji from './components/FloatingEmoji.jsx';

function App() {
  const [giftOpened, setGiftOpened] = useState(false);

  const handleOpenGift = () => {
    setGiftOpened(true);
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="fixed inset-0 bg-red-500 overflow-hidden">
    <div className="relative h-screen w-full bg-red-500 flex flex-col items-center justify-start z-10">
      <FloatingEmoji />
      <h1 className="text-center text-white text-5xl md:text-6xl mt-10">
        Happy Birthday, U Duh Duh! 🎉
      </h1>

      {/* Cat decorations */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {Array.from({ length: 7 }).map((_, i) => (
        <Cat key={i} />
      ))}
      </div>

      {/* Open Gift Button */}
      {!giftOpened && (
        <div className="flex justify-center mt-16">
          <button
            className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-500 transition"
            onClick={handleOpenGift}
          >
            Open Gift 🎁
          </button>
        </div>
      )}

      {/* Message after opening gift */}
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
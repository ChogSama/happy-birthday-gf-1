import { useEffect, useState } from "react";

const EMOJIS = ["🎈", "🎂", "🎁", "🐱", "💖"];

export default function FloatingEmoji() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now() + Math.random();

      setItems((prev) =>
        [
          ...prev,
          {
            id,
            emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
            left: Math.random() * 90,    // 0–90% horizontal
            duration: 5 + Math.random() * 4, // 5–9s float
          },
        ].slice(-20) // keep last 20 for performance
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {items.map((item) => (
        <div
          key={item.id}
          className="absolute text-4xl"
          style={{
            left: `${item.left}%`,
            bottom: 0, // start at bottom
            animation: `floatUp ${item.duration}s linear forwards`, 
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
}
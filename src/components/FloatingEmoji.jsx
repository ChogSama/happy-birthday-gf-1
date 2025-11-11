import { useEffect, useState } from "react";

const emojis = ["🎈", "🎂", "🎁", "🐱", "💖"];

export default function FloatingEmoji() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newItem = {
        id: Date.now(),
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 90,
      };
      setItems(prev => [...prev, newItem].slice(-20));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map(item => (
        <div
          key={item.id}
          className="absolute text-4xl animate-float"
          style={{
            left: `${item.left}%`,
            top: 0, // start at top of parent/viewport
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
}

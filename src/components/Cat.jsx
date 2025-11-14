import { useEffect, useState } from "react";

/**
 * Cat component
 * - accepts `onClick` and `className`
 * - positions itself randomly within safe margins
 */
export default function Cat({ onClick, className = "" }) {
  const [position, setPosition] = useState({
    x: Math.random() * 82 + 4, // keep margin (4% - 86%)
    y: Math.random() * 82 + 4,
  });

  const [rotation, setRotation] = useState(Math.random() * 360);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 82 + 4,
        y: Math.random() * 82 + 4,
      });
      setRotation(Math.random() * 360);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src="https://i.pinimg.com/736x/dc/e8/59/dce8591bf187016ffb24b291f8cf15e5.jpg"
      alt="fun cat"
      onClick={onClick}
      draggable={false}
      className={`w-16 h-16 absolute transition-all duration-1000 ${className}`}
      style={{
        top: `${position.y}%`,
        left: `${position.x}%`,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
}
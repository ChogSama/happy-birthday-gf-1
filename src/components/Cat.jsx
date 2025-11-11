import { useEffect, useState } from "react";

export default function Cat() {
  const [position, setPosition] = useState({
    x: Math.random() * 90,
    y: Math.random() * 90,
  });
  const [rotation, setRotation] = useState(Math.random() * 360);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({ x: Math.random() * 90, y: Math.random() * 90 });
      setRotation(Math.random() * 360);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src="https://i.pinimg.com/736x/dc/e8/59/dce8591bf187016ffb24b291f8cf15e5.jpg"
      alt="fun cat"
      className="w-16 h-16 absolute transition-all duration-1000 z-0 pointer-events-none"
      style={{
        top: `${position.y}%`,
        left: `${position.x}%`,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
}
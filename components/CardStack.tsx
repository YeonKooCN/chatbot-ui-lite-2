import React, { useState } from 'react';
import FlippableCard from './FlippableCard';

type CardStackProps = {
  cards: React.ReactNode[];
};

const CardStack: React.FC<CardStackProps> = ({ cards }) => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentCard((prev) => Math.max(prev - 1, 0));
  };

  const handleSwipeRight = () => {
    setCurrentCard((prev) => Math.min(prev + 1, cards.length - 1));
  };

  return (
    <div className="relative w-full h-full min-h-screen">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 transition-all duration-400 ${
            index === currentCard
              ? 'translate-x-0 translate-y-0'
              : index < currentCard
              ? 'translate-x-full opacity-0 pointer-events-none'
              : `translate-x-${(index - currentCard) * 10} translate-y-${(index - currentCard) * 10} opacity-75 pointer-events-none`
          }`}
          style={{
            zIndex: cards.length - index,
          }}
        >
          {card}
        </div>
      ))}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 mb-8">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleSwipeLeft}
        >
          Left
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={handleSwipeRight}
        >
          Right
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center mb-20">
        <p>
          Currently iterating {currentCard + 1}/{cards.length}
        </p>
      </div>
    </div>
  );
};

export default CardStack;

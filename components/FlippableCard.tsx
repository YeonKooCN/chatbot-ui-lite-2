import React, { useState } from 'react';

type FlippableCardProps = {
  className?: string;
};

const FlippableCard: React.FC<FlippableCardProps> = ({ className }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFrontClick = () => {
    setFlipped(true);
  };

  const handleBackClick = () => {
    setFlipped(false);
  };

  return (
    <div
      className={`py-32 relative w-96 h-96 mx-auto mt-8 mb-8 cursor-pointer text-center font-bold tracking-light text-lg ${className}`}
    >
      <div
        className={`absolute text-center py-16 overflow-hidden inset-0 rounded-lg shadow-lg transition-transform duration-400 transform scale-100 ${
          flipped ? 'bg-gradient-to-br from-white via-yellow-200 to-green-300' : 'bg-gradient-to-br from-red-500 via-pink-300 to-transparent'
        }`}
        onClick={flipped ? handleBackClick : handleFrontClick}
      >
        {flipped ? 'Back' : 'Front'}
      </div>
    </div>
  );
};

export default FlippableCard;

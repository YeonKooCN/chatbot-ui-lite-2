import { useState } from "react";

interface FlashcardProps {
  flashcards: { id: number; front: string; back: string }[];
}

const Flashcard: React.FC<FlashcardProps> = ({ flashcards }) => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handlePrev = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`relative w-96 h-60 bg-white shadow-md ${isFlipped ? "rotate-y-in" : "rotate-y-out"
          }`}
        onClick={handleFlip}
      >
        <div
          className={`absolute w-full h-full p-6 text-center front ${isFlipped ? "invisible" : ""
            }`}
        >
          {flashcards[currentCard].front}
        </div>
        <div
          className={`absolute w-full h-full p-6 text-center back transform rotate-y-180 ${isFlipped ? "" : "invisible"
            }`}
        >
          {flashcards[currentCard].back}
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-4">
          Card {currentCard + 1} of {flashcards.length}
        </p>
        <div className="flex items-center">
          <button
            className="px-4 py-2 mr-4 bg-blue-500 text-white rounded-md"
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;

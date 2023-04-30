import React from 'react';
import FlippableCard from '../components/FlippableCard';
import CardStack from '../components/CardStack';

const CardPage = () => {
  const cards = Array.from({ length: 20 }, (_, i) => (
    <FlippableCard key={i} />
  ));

  console.log(cards)

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <CardStack cards={cards} />
      </div>
    </div>
  );
};

export default CardPage;

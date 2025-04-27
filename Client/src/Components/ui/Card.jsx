// components/ui/Card.jsx
import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4">{children}</div>
  );
};

const CardContent = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

// Default export of Card
export default Card;
export { CardContent };
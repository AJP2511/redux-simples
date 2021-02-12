import React from "react";
import Card from "./Card";

const Sorteio = ({ min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <Card title="Sorteio de um números" purple>
      <span>
        <span>Resultado:</span>
        <strong>{randomNumber}</strong>
      </span>
    </Card>
  );
};

export default Sorteio;

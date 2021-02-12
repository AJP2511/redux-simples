import React from "react";
import Card from "./Card";

const Soma = ({ min, max }) => {
  return (
    <Card title="Soma de números" green>
      <span>
        <span>Resultado:</span>
        <strong>{min + max}</strong>
      </span>
    </Card>
  );
};

export default Soma;

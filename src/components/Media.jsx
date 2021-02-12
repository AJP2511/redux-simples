import React from "react";
import Card from "./Card";

const Media = ({ min, max }) => {
  return (
    <Card title="Média de números" blue>
      <span>
        <span>Resultado:</span>
        <strong>{(min + max) / 2}</strong>
      </span>
    </Card>
  );
};

export default Media;

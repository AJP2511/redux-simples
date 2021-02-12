import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

export default connect(mapStateToProps)(Sorteio);

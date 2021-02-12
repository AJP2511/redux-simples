import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

export default connect(mapStateToProps)(Soma);

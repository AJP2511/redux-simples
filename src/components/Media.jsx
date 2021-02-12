import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
};

export default connect(mapStateToProps)(Media);

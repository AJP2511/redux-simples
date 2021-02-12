import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Card from "./Card";
import {
  alterarNumeroMinimo,
  alteraNumeroMaximo,
} from "./store/actions/numeros";

const Input = styled.input`
  font-size: 1.8rem;
  margin-left: 20px;
  margin-right: 20px;
  width: 100px;
`;

const Intervalo = ({ min, max, alterarMinimo, alteraMaximo }) => {
  return (
    <Card title="Intervalo de números" red>
      <span>
        <strong>Mínimo:</strong>
        <Input
          type="text"
          value={min}
          onChange={({ target }) => alterarMinimo(+target.value)}
        />
      </span>
      <span>
        <strong>Máximo:</strong>
        <Input
          type="text"
          value={max}
          onChange={({ target }) => alteraMaximo(+target.value)}
        />
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

const mapDispatchToProps = (dispatch) => {
  return {
    alterarMinimo(novoNumero) {
      //ActionCreator -> action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },

    alteraMaximo(novoNumero) {
      const action = alteraNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);

import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Input = styled.input`
  font-size: 1.8rem;
  margin-left: 20px;
  margin-right: 20px;
  width: 100px;
`;

const Intervalo = ({ min, max, setMin, setMax }) => {
  return (
    <Card title="Intervalo de números" red>
      <span>
        <strong>Mínimo:</strong>
        <Input
          type="text"
          value={min}
          onChange={({ target }) => setMin(+target.value)}
        />
      </span>
      <span>
        <strong>Máximo:</strong>
        <Input
          type="text"
          value={max}
          onChange={({ target }) => setMax(+target.value)}
        />
      </span>
    </Card>
  );
};

export default Intervalo;

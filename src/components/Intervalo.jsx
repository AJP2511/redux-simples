import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Input = styled.input`
  font-size: 1.8rem;
  margin-left: 20px;
  margin-right: 20px;
  width: 100px;
`;

const Intervalo = () => {
  return (
    <Card title="Intervalo de números" red>
      <span>
        <strong>Mínimo:</strong>
        <Input type="number" value={0} readOnly />
      </span>
      <span>
        <strong>Máximo:</strong>
        <Input type="number" value={10} readOnly />
      </span>
    </Card>
  );
};

export default Intervalo;
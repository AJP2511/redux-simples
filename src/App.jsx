import "./App.css";
import styled from "styled-components";
import Intervalo from "./components/Intervalo";
import Soma from "./components/Soma";
import Media from "./components/Media";
import Sorteio from "./components/Sorteio";
import { useState } from "react";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font-weight: 200;
  }
`;

const Linha = styled.div`
  display: flex;
`;

function App() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  return (
    <MainContainer>
      <h1>Exercícios React-Redux (simples)</h1>
      <Linha>
        <Intervalo min={min} max={max} setMin={setMin} setMax={setMax} />
      </Linha>
      <Linha>
        <Soma min={min} max={max} />
        <Media min={min} max={max} />
        <Sorteio min={min} max={max} />
      </Linha>
    </MainContainer>
  );
}

export default App;

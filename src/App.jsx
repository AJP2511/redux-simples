import "./App.css";
import styled from "styled-components";
import Intervalo from "./components/Intervalo";
import Soma from "./components/Soma";
import Media from "./components/Media";
import Sorteio from "./components/Sorteio";

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
  return (
    <MainContainer>
      <h1>Exercícios React-Redux (simples)</h1>
      <Linha>
        <Intervalo />
      </Linha>
      <Linha>
        <Soma />
        <Media />
        <Sorteio />
      </Linha>
    </MainContainer>
  );
}

export default App;

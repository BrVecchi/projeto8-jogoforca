import styled from "styled-components";
import forca from "./assets/forca0.png";
import cabeca from "./assets/forca1.png";
import tronco from "./assets/forca2.png";
import bracoEsq from "./assets/forca3.png";
import bracoDir from "./assets/forca4.png";
import pernaEsq from "./assets/forca5.png";
import PernaDir from "./assets/forca6.png";

export default function Jogo(props) {
  const arrayImagens = [
    forca,
    cabeca,
    tronco,
    bracoEsq,
    bracoDir,
    pernaEsq,
    PernaDir,
  ];
  return (
    <ConteudoSuperior>
      <Forca>
        <img
          data-identifier="game-image"
          src={arrayImagens[props.erros]}
          alt="imagem da forca"
        />
      </Forca>
      <ConteudoSuperiorDireito>
        <button data-identifier="choose-word" onClick={props.iniciarJogo}>
          Sortear Palavra
        </button>
        <Palavra data-identifier="word" cor={props.corPalavra}>
          {props.palavraSorteada.map((letra) =>
            props.letrasEscolhidas.includes(letra) || props.finalizado === "sim"
              ? letra
              : (letra = "_")
          )}
        </Palavra>
      </ConteudoSuperiorDireito>
    </ConteudoSuperior>
  );
}

const Forca = styled.div`
  width: 35%;
  img {
    width: 100%;
  }
`;
const ConteudoSuperior = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`;
const ConteudoSuperiorDireito = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  button {
    background-color: rgb(14, 151, 83);
    color: white;
    font-size: 20px;
    font-weight: 700;
    width: 200px;
    height: 50px;
    border-radius: 15px;
    border: none;
    margin-top: 42px;
    &:hover {
      cursor: pointer;
      background-color: rgb(17, 180, 99);
    }
  }
`;
const Palavra = styled.div`
  font-size: 28px;
  font-family: "Comfortaa", cursive;
  letter-spacing: 8px;
  color: ${(props) => props.cor};
`;

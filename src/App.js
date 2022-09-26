import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ResetCSS from "./ResetCSS";

import forca from "./assets/forca0.png";
import cabeca from "./assets/forca1.png";
import tronco from "./assets/forca2.png";
import bracoEsq from "./assets/forca3.png";
import bracoDir from "./assets/forca4.png";
import pernaEsq from "./assets/forca5.png";
import PernaDir from "./assets/forca6.png";

import listaPalavras from "./palavras";

export default function App() {
  const letras = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const arrayImagens = [
    forca,
    cabeca,
    tronco,
    bracoEsq,
    bracoDir,
    pernaEsq,
    PernaDir,
  ];
  const palavras = listaPalavras.map((palavra) => palavra.toUpperCase());

  const [erros, setErros] = useState(0);
  const [letraStyle, setLetraStyle] = useState([
    "rgb(75, 75, 75)",
    "rgb(202, 202, 202)",
    "none",
    "none",
    "unset",
    "none",
  ]);
  const [inputStyle, setInputStyle] = useState([
    "grey",
    "1px",
    "none",
    "none",
    "-9999px",
  ]);
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
  const [corPalavra, setCorPalavra] = useState("black");
  const [finalizado, setFinalizado] = useState("nao");
  const [textoChute, setTextoChute] = useState("");
  const [palavraAleatoria, setPalavraAleatoria] = useState("");

  function iniciarJogo() {
    sortearPalavra();
    setLetrasEscolhidas([]);
    setErros(0);
    setLetraStyle(["#31858c", "#b1f9ff", "#31858c", "1px", "solid", "initial"]);
    setInputStyle(["black", "2px", "initial", "initial", ""]);
    setCorPalavra("black");
    setFinalizado("nao");
  }

  function sortearPalavra() {
    const palavraAleat = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavraAleatoria(palavraAleat);
    const palavraArray = [];
    for (let i = 0; i < palavraAleat.length; i++) {
      palavraArray.push(palavraAleat[i]);
    }
    setPalavraSorteada(palavraArray);
  }

  function escolherLetra(letra) {
    const novaArray = [...letrasEscolhidas];
    if (!letrasEscolhidas.includes(letra)) {
      novaArray.push(letra);
    }
    setLetrasEscolhidas(novaArray);
    let novoErro = erros;
    if (!palavraSorteada.includes(letra)) {
      novoErro++;
      setErros(novoErro);
    }
    finalizarJogo(novaArray, novoErro);
  }

  function finalizarJogo(novaArray, novoErro) {
    const letrasUnicas = palavraSorteada.filter(
      (letra, i) => palavraSorteada.indexOf(letra) === i
    );
    if (novoErro === 6) {
      setCorPalavra("red");
      setLetraStyle([
        "rgb(75, 75, 75)",
        "rgb(202, 202, 202)",
        "none",
        "none",
        "unset",
        "none",
      ]);
      setInputStyle(["grey", "1px", "none", "none", "-9999px"]);
      setFinalizado("sim");
    } else if (letrasUnicas.length === novaArray.length - novoErro) {
      setCorPalavra("green");
      setLetraStyle([
        "rgb(75, 75, 75)",
        "rgb(202, 202, 202)",
        "none",
        "none",
        "unset",
        "none",
      ]);
      setInputStyle(["grey", "1px", "none", "none", "-9999px"]);
      setFinalizado("sim");
    }
  }

  function chutar() {
    if (textoChute === palavraAleatoria) {
      setCorPalavra("green");
      setLetraStyle([
        "rgb(75, 75, 75)",
        "rgb(202, 202, 202)",
        "none",
        "none",
        "unset",
        "none",
      ]);
      setInputStyle(["grey", "1px", "none", "none", "-9999px"]);
      setFinalizado("sim");
    } else {
      setCorPalavra("red");
      setLetraStyle([
        "rgb(75, 75, 75)",
        "rgb(202, 202, 202)",
        "none",
        "none",
        "unset",
        "none",
      ]);
      setInputStyle(["grey", "1px", "none", "none", "-9999px"]);
      setFinalizado("sim");
    }
    setTextoChute("");
  }

  return (
    <>
      <Conteudo>
        <ResetCSS />
        <GlobalStyle />
        <ConteudoSuperior>
          <Forca>
            <img
              data-identifier="game-image"
              src={arrayImagens[erros]}
              alt="imagem da forca"
            />
          </Forca>
          <ConteudoSuperiorDireito>
            <button data-identifier="choose-word" onClick={iniciarJogo}>
              Sortear Palavra
            </button>
            <Palavra data-identifier="word" cor={corPalavra}>
              {palavraSorteada.map((letra) =>
                letrasEscolhidas.includes(letra) || finalizado === "sim"
                  ? letra
                  : (letra = "_")
              )}
            </Palavra>
          </ConteudoSuperiorDireito>
        </ConteudoSuperior>
        <ConteudoInferior>
          <Letras>
            {letras.map((letra, index) =>
              letrasEscolhidas.includes(letra) ? (
                <Letra
                  data-identifier="letter"
                  key={index}
                  onClick={() => escolherLetra(letra)}
                  cor={"rgb(75, 75, 75)"}
                  fundo={"rgb(202, 202, 202)"}
                  borda={"black"}
                  contorno={"1px"}
                  estilo={"unset"}
                  evento={"none"}
                >
                  {letra}
                </Letra>
              ) : (
                <Letra
                  key={index}
                  className={letraStyle}
                  onClick={() => escolherLetra(letra)}
                  cor={letraStyle[0]}
                  fundo={letraStyle[1]}
                  borda={letraStyle[2]}
                  contorno={letraStyle[3]} //1px
                  estilo={letraStyle[4]} //solid
                  evento={letraStyle[5]} //initial
                >
                  {letra}
                </Letra>
              )
            )}
          </Letras>
          <GrupoInput>
            <p>Já sei a palavra!</p>
            <Input
              data-identifier="type-guess"
              corBorda={inputStyle[0]}
              tamanhoBorda={inputStyle[1]}
              evento={inputStyle[2]}
              outLine={inputStyle[3]}
              indent={inputStyle[4]}
              onChange={(event) =>
                setTextoChute(() => event.target.value.toUpperCase())
              }
              value={textoChute}
            ></Input>
            <button data-identifier="guess-button" onClick={chutar}>
              Chutar
            </button>
          </GrupoInput>
          <Aviso>*Cuidado! Ao chutar o jogo terminará!*</Aviso>
        </ConteudoInferior>
      </Conteudo>
    </>
  );
}

const Conteudo = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
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
const ConteudoInferior = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;
const Letras = styled.ul`
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const Letra = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  width: 40px;
  height: 40px;
  pointer-events: ${(props) => props.evento};
  background-color: ${(props) => props.fundo};
  color: ${(props) => props.cor};
  border-color: ${(props) => props.borda};
  border-width: ${(props) => props.contorno};
  border-style: ${(props) => props.estilo};
  &:hover {
    cursor: pointer;
    background-color: #86c4c9;
  }
`;
const Palavra = styled.div`
  font-size: 28px;
  font-family: "Comfortaa", cursive;
  letter-spacing: 8px;
  color: ${(props) => props.cor};
`;
const GrupoInput = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 550px;
  p {
    font-size: 22px;
    font-family: "Comfortaa", cursive;
  }
  button {
    font-size: 16px;
    font-weight: 700;
    color: rgb(41, 85, 70);
    background-color: rgba(161, 243, 216, 0.664);
    border-width: 1px;
    border-color: rgb(41, 85, 70);
    border-radius: 6px;
    height: 40px;
    &:hover {
      cursor: pointer;
      background-color: rgb(161, 243, 216);
    }
  }
`;
const Input = styled.input`
  width: 260px;
  height: 35px;
  border-radius: 8px;
  font-family: "Comfortaa", cursive;
  border-color: ${(props) => props.corBorda};
  border-width: ${(props) => props.tamanhoBorda};
  pointer-events: ${(props) => props.evento};
  outline: ${(props) => props.outLine};
  text-indent: ${(props) => props.indent};
`;

const Aviso = styled.p`
  font-family: "Comfortaa", cursive;
  color: brown;
  font-size: 10px;
`;

import { useState } from "react";
import styled from 'styled-components';
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
  const [letraStyle, setLetraStyle] = useState("letra-desab");
  const [inputStyle, setInputStyle] = useState("input-desab");
  const [palavraSorteada, setPalavraSorteada] = useState([]);
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([]);
  const [corPalavra, setCorPalavra] = useState("tracos");
  const [finalizado, setFinalizado] = useState("nao");
  const [textoChute, setTextoChute] = useState("")
  const [palavraAleatoria, setPalavraAleatoria] = useState("")

  function iniciarJogo() {
    sortearPalavra();
    setLetrasEscolhidas([]);
    setErros(0);
    setLetraStyle("letra-hab");
    setInputStyle("input-hab");
    setCorPalavra("tracos");
    setFinalizado("nao");
  }

  function sortearPalavra() {
    const palavraAleat = palavras[Math.floor(Math.random() * palavras.length)]
    setPalavraAleatoria(palavraAleat)
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
      setCorPalavra("errou");
      setLetraStyle("letra-desab");
      setInputStyle("input-desab");
      setFinalizado("sim");
    } else if (letrasUnicas.length === novaArray.length - novoErro) {
      setCorPalavra("acertou");
      setLetraStyle("letra-desab");
      setInputStyle("input-desab");
      setFinalizado("sim");
    }
  }

  function chutar() {
    if (textoChute === palavraAleatoria) {
      setCorPalavra("acertou");
      setLetraStyle("letra-desab");
      setInputStyle("input-desab");
      setFinalizado("sim");
    } else {
      setCorPalavra("errou");
      setLetraStyle("letra-desab");
      setInputStyle("input-desab");
      setFinalizado("sim");
    }
    setTextoChute("")
  }

  return (
    <>
      <Conteudo>
        <ResetCSS />
        <GlobalStyle />
        <ConteudoSuperior>
          <Forca>
            <img src={arrayImagens[erros]} alt="imagem da forca" />
          </Forca>
          <ConteudoSuperiorDireito>
            <button onClick={iniciarJogo}>
              Sortear Palavra
            </button>
            <div className={corPalavra}>
              {palavraSorteada.map((letra) =>
                letrasEscolhidas.includes(letra) || finalizado === "sim"
                  ? (letra)
                  : (letra = "_")
              )}
            </div>
          </ConteudoSuperiorDireito>
        </ConteudoSuperior>
        <ConteudoInferior>
          <Letras>
            {letras.map((letra, index) =>
              letrasEscolhidas.includes(letra) ? (
                <LetraDesab
                  key={index}
                  onClick={() => escolherLetra(letra)}
                >
                  {letra}
                </LetraDesab>
              ) : (
                <li
                  key={index}
                  className={letraStyle}
                  onClick={() => escolherLetra(letra)}
                >
                  {letra}
                </li>
              )
            )}
          </Letras>
          <GrupoInput>
            <p>Já sei a palavra!</p>
            <input className={inputStyle} onChange={(event)=> setTextoChute(()=>event.target.value.toUpperCase())} value={textoChute}></input>
            <button onClick={chutar}>Chutar</button>
          </GrupoInput>
          <Aviso >*Cuidado! Ao chutar o jogo terminará!*</Aviso>
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
`
const Forca = styled.div`
  width: 35%;
  img {
    width: 100%;
  }
`
const ConteudoSuperior = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

 
`
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
`
const ConteudoInferior = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`
const Letras = styled.ul`
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`
const LetraDesab = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(202, 202, 202);
  color: rgb(75, 75, 75);
  border-radius: 8px;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  width: 40px;
  height: 40px;
  pointer-events: none;
`
const LetraHab = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(194, 249, 253);
  color: rgb(14, 98, 104);
  border-color: rgb(14, 98, 104);
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  width: 40px;
  height: 40px;
` 
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
`
const Aviso = styled.p`
  font-family: "Comfortaa", cursive;
  color: brown;
  font-size: 10px;
`

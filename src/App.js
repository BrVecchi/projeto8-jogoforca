import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import ResetCSS from "./ResetCSS";
import Jogo from "./Jogo";
import Letras from "./Letras";
import Chutar from "./Chutar";

import listaPalavras from "./palavras";

export default function App() {
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
  console.log(erros);
  console.log(letrasEscolhidas);

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
    let novoErro = erros;

    if (!letrasEscolhidas.includes(letra)) {
      novaArray.push(letra);
    }
    setLetrasEscolhidas(novaArray);
    if (letra === "C" && palavraSorteada.includes("Ç")) {
      novaArray.push("Ç");
    } else if (letra === "A" && palavraSorteada.includes("Á")) {
      novaArray.push("Á");
    } else if (letra === "A" && palavraSorteada.includes("À")) {
      novaArray.push("À");
    } else if (letra === "A" && palavraSorteada.includes("Ã")) {
      novaArray.push("Ã");
    } else if (letra === "A" && palavraSorteada.includes("Â")) {
      novaArray.push("Â");
    } else if (letra === "E" && palavraSorteada.includes("É")) {
      novaArray.push("É");
    } else if (letra === "E" && palavraSorteada.includes("Ê")) {
      novaArray.push("Ê");
    } else if (letra === "I" && palavraSorteada.includes("Í")) {
      novaArray.push("Í");
    } else if (letra === "O" && palavraSorteada.includes("Ó")) {
      novaArray.push("Ó");
    } else if (letra === "O" && palavraSorteada.includes("Ô")) {
      novaArray.push("Ô");
    } else if (letra === "O" && palavraSorteada.includes("Õ")) {
      novaArray.push("Õ");
    } else if (letra === "U" && palavraSorteada.includes("Ú")) {
      novaArray.push("Ú");
    } else if (!palavraSorteada.includes(letra)) {
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
      setErros(6);
      setFinalizado("sim");
    }
    setTextoChute("");
  }

  return (
    <>
      <Conteudo>
        <ResetCSS />
        <GlobalStyle />
        <Jogo
          erros={erros}
          iniciarJogo={iniciarJogo}
          corPalavra={corPalavra}
          palavraSorteada={palavraSorteada}
          letrasEscolhidas={letrasEscolhidas}
          finalizado={finalizado}
        />
        <ConteudoInferior>
          <Letras
            letrasEscolhidas={letrasEscolhidas}
            escolherLetra={escolherLetra}
            letraStyle={letraStyle}
          />
          <Chutar
            inputStyle={inputStyle}
            setTextoChute={setTextoChute}
            textoChute={textoChute}
            chutar={chutar}
          />
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
const ConteudoInferior = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;
const Aviso = styled.p`
  font-family: "Comfortaa", cursive;
  color: brown;
  font-size: 10px;
`;

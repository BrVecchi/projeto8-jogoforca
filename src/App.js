import { useState } from "react";

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
    const palavraAleatoria =
      palavras[Math.floor(Math.random() * palavras.length)];
    const palavraArray = [];
    for (let i = 0; i < palavraAleatoria.length; i++) {
      palavraArray.push(palavraAleatoria[i]);
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

  return (
    <>
      <div className="conteudo">
        <div className="conteudo-superior">
          <div className="forca">
            <img src={arrayImagens[erros]} alt="imagem da forca" />
          </div>
          <div className="conteudo-superior-direito">
            <button className="botao-sortear-palavra" onClick={iniciarJogo}>
              Sortear Palavra
            </button>
            <div className={corPalavra}>
              {palavraSorteada.map((letra) =>
                letrasEscolhidas.includes(letra) || finalizado === "sim"
                  ? (letra = letra)
                  : (letra = "_")
              )}
            </div>
          </div>
        </div>
        <div className="conteudo-inferior">
          <ul className="letras">
            {letras.map((letra, index) =>
              letrasEscolhidas.includes(letra) ? (
                <li
                  key={index}
                  className={"letra-desab"}
                  onClick={() => escolherLetra(letra)}
                >
                  {letra}
                </li>
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
          </ul>
          <div className="grupo-input">
            <p>Já sei a palavra!</p>
            <input className={inputStyle}></input>
            <button>Chutar</button>
          </div>
        </div>
      </div>
    </>
  );
}

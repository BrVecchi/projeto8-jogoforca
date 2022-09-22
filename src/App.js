import { useState } from "react";

import forca from "./assets/forca0.png";
import cabeca from "./assets/forca1.png";
import tronco from "./assets/forca2.png";
import bracoEsq from "./assets/forca3.png";
import bracoDir from "./assets/forca4.png";
import pernaEsq from "./assets/forca5.png";
import PernaDir from "./assets/forca6.png";

import palavras from "./palavras";

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

  const [letraStyle, setLetraStyle] = useState("letra-desab");
  const [inputStyle, setInputStyle] = useState("input-desab");

  function habilitarFuncionalidades() {
    setLetraStyle("letra-hab");
    setInputStyle("input-hab");
  }

  return (
    <>
      <div className="conteudo">
        <div className="conteudo-superior">
          <div className="forca">
            <img src={forca} alt="imagem da forca" />
          </div>
          <div className="conteudo-superior-direito">
            <button
              className="botao-escolher-palavra"
              onClick={habilitarFuncionalidades}
            >
              Escolher Palavra
            </button>
            <div className="tracos"></div>
          </div>
        </div>
        <div className="conteudo-inferior">
          <ul className="letras">
            {letras.map((letra) => (
              <li className={letraStyle}>{letra}</li>
            ))}
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

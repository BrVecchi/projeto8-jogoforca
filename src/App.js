import forca from "./assets/forca0.png";
import cabeca from "./assets/forca1.png";
import tronco from "./assets/forca2.png";
import bracoEsq from "./assets/forca3.png";
import bracoDir from "./assets/forca4.png";
import pernaEsq from "./assets/forca5.png";
import PernaDir from "./assets/forca6.png";

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

  return (
    <>
      <div className="conteudo">
        <div className="conteudo-superior">
          <div className="forca">
            <img src={forca} alt="imagem da forca" />
          </div>
          <button className="botao-escolher-palavra">Escolher Palavra</button>
        </div>
        <div className="conteudo-inferior">
          <ul className="letras">
            {letras.map((letra) => (
              <li>{letra}</li>
            ))}
          </ul>
          <div className="grupo-input">
            <p>Já sei a palavra!</p>
            <input></input>
            <button>Chutar</button>
          </div>
        </div>
      </div>
    </>
  );
}

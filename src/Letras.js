import styled from "styled-components";

export default function Letras(props) {
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
    <LetrasStyle>
      {letras.map((letra, index) =>
        props.letrasEscolhidas.includes(letra) ? (
          <Letra
            data-identifier="letter"
            key={index}
            onClick={() => props.escolherLetra(letra)}
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
            className={props.letraStyle}
            onClick={() => props.escolherLetra(letra)}
            cor={props.letraStyle[0]}
            fundo={props.letraStyle[1]}
            borda={props.letraStyle[2]}
            contorno={props.letraStyle[3]} //1px
            estilo={props.letraStyle[4]} //solid
            evento={props.letraStyle[5]} //initial
          >
            {letra}
          </Letra>
        )
      )}
    </LetrasStyle>
  );
}

const LetrasStyle = styled.ul`
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

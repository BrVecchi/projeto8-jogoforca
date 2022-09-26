import styled from "styled-components";

export default function Chutar(props) {
  return (
    <GrupoInput>
      <p>Já sei a palavra!</p>
      <Input
        data-identifier="type-guess"
        corBorda={props.inputStyle[0]}
        tamanhoBorda={props.inputStyle[1]}
        evento={props.inputStyle[2]}
        outLine={props.inputStyle[3]}
        indent={props.inputStyle[4]}
        onChange={(event) =>
          props.setTextoChute(() => event.target.value.toUpperCase())
        }
        value={props.textoChute}
      ></Input>
      <button data-identifier="guess-button" onClick={props.chutar}>
        Chutar
      </button>
    </GrupoInput>
  );
}

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

import styled from "styled-components";

export default function DeleteAndCancelButton({ onDelete, onCancel }) {
  return (
    <Container>
      <div>
        <Title>Are you sure you want to forgo your habit?</Title>
        <CancelIcon onClick={onCancel}>X</CancelIcon>
        <DeleteButton onClick={onDelete}>Yes</DeleteButton>
        <CancelButton onClick={onCancel}>No</CancelButton>
      </div>
    </Container>
  );
}

const Title = styled.div`
  font-size: 1.5em;
  margin: 1em;
`;

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  bottom: 0;
  background-color: white;
  text-align: center;
  padding-top: 7em;
`;
const CancelIcon = styled.button`
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 2em;
  margin: auto;
  display: block;
  background-color: transparent;
  border: 0;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;
const CancelButton = styled.button`
  margin: auto;
  display: block;
  background-color: #ffffff;
  color: #000000;
  border-radius: 0.3rem;
  padding: 0.4rem 0.75rem;
  transition: 0.3s;
  margin-bottom: 2em 0 3em 0;
  background-color: #ffcccb;
  transition: transform 0.2s;
  border: 0;
  &:hover {
    cursor: pointer;
    filter: invert(1);
    transform: scale(1.5);
  }
`;

const DeleteButton = styled.button`
  margin: auto;
  display: block;
  background-color: #ffffff;
  color: #000000;
  border-radius: 0.3rem;
  padding: 0.4rem 0.75rem;
  transition: 0.3s;
  margin-bottom: 2em;
  margin-top: 3em;
  background-color: #90ee90;
  border: 0;
  transition: transform 0.2s;
  &:hover {
    cursor: pointer;
    filter: invert(1);

    transform: scale(1.5);
  }
`;

import styled from "styled-components";
import Image from "next/image";
import deleteIcon from "../public/images/deleteIcon.png";

export default function Card({ id, name, onDelete, onToggle, isChecked }) {
  return (
    <CardContainer isChecked={isChecked}>
      <StyledInput
        id={id}
        type="radio"
        defaultChecked={isChecked}
        onClick={() => onToggle(id)}
      />
      <label htmlFor={id}>{name}</label>
      <DeleteButton onClick={onDelete}>
        <Image src={deleteIcon} alt="delete your habit" />
      </DeleteButton>
    </CardContainer>
  );
}

const CardContainer = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;
  padding-left: 1em;
  padding-right: 1em;

  &:hover {
    filter: invert(1);
  }
`;

const DeleteButton = styled.button`
  background-color: white;
  width: 3em;
  height: 3em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
const StyledInput = styled.input`
  margin-right: 0.5rem;
  color: transparent;
  background-color: transparent;
`;

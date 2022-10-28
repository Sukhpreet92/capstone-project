import styled from "styled-components";
import Image from "next/image";
import deleteIcon from "../public/images/deleteIcon.svg";

export default function Card({ id, name, onDelete, onToggle, isChecked }) {
  return (
    <CardContainer isChecked={isChecked}>
      <StyledInput
        id={id}
        type="radio"
        defaultChecked={isChecked}
        onClick={onToggle}
      />
      {name}
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
  background-color: transparent;
  width: 2em;
  height: 2.2em;
`;
const StyledInput = styled.input`
  margin-right: 0.5rem;
  color: transparent;
  background-color: transparent;
`;

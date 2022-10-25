import styled from "styled-components";
import Image from "next/image";
import deleteIcon from "../public/images/deleteIcon.svg";

export default function Card({ name, onDelete }) {
  return (
    <CardContainer>
      <HabitContainer>{name} </HabitContainer>
      <DeleteButton onClick={onDelete}>
        <Image src={deleteIcon} alt="delete your habit" />
      </DeleteButton>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  display: flex;
  justify-content: space-between;
  background: lightblue;
  border-radius: 80em;
  margin: 2em 0;
  padding-left: 1em;
`;
const HabitContainer = styled.ol`
  justify-content: center;
  font-size: 1em;
  padding: 0em;
`;

const DeleteButton = styled.button`
  width: 2em;
  height: 2em;
`;

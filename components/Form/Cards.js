import styled from "styled-components";
import Image from "next/image";
import deleteButton from "/Users/sukhpreet/Desktop/Project/capstone-project/public/images/deleteButton.svg";

export default function Card({ name, onDelete }) {
  return (
    <>
      <CardContainer>
        <HabitContainer>{name} </HabitContainer>
        <ImageContainer onClick={onDelete}>
          <Image src={deleteButton} alt="delete your habit" />
        </ImageContainer>
      </CardContainer>
    </>
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

const ImageContainer = styled.button`
  width: 2em;
  height: 2em;
`;

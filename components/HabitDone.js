import Card from "./Card";
import styled from "styled-components";

export default function HabitDone({ habits, handleDelete }) {
  return (
    <HabitContainer>
      <HabitTitle>Done</HabitTitle>

      <ul>
        {habits
          .filter((habit) => habit.isFinished)
          .map((habit) => (
            <Card
              key={habit.id}
              id={habit.id}
              name={habit.name}
              isFinished={habit.isFinished}
              handleDelete={handleDelete}
            />
          ))}
      </ul>
    </HabitContainer>
  );
}
const HabitTitle = styled.h3`
  font-size: 1.2rem;
`;
const HabitContainer = styled.div`
  display: relative;
  background: rgba(255, 255, 255);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 1rem 0 2rem 1rem;
  margin: 1em 1em 1em 1em;
`;

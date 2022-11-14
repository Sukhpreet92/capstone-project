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
  font-size: 1.5rem;
`;
const HabitContainer = styled.div`
  display: relative;
  background: rgba(255, 255, 255);
  box-shadow: var(--box-shadow);
  padding: 1rem 0 2rem 1rem;
  margin: 1em 1em 1em 1em;
`;

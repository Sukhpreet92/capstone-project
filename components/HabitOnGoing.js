import styled from "styled-components";
import Card from "./Card";

export default function HabitOnGoing({ habits, handleDelete }) {
  const habitsOnGoing = habits.filter((habit) => !habit.isFinished);

  return (
    <HabitContainer>
      <HabitTitle>Today</HabitTitle>

      <ul>
        {habitsOnGoing.map(({ id, name, isFinished }) => (
          <Card
            key={id}
            id={id}
            name={name}
            isFinished={isFinished}
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
  padding: 1rem 0 1rem 1rem;
  margin: 1em 1em 1em 1em;
`;

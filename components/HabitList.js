import styled from "styled-components";

export function Habit({ habit }) {
  return <HabitName>{habit.name}</HabitName>;
}

const HabitName = styled.li`
  color: darkblue;
`;

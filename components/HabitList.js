import styled from "styled-components";
import { HABITS } from "../lib/db";

function Card({ habit }) {
  return (<ul>{habit.id}</ul>), (<p>{habit.name}</p>);
}
export function HabitList() {
  return (
    <Main>
      <h3>All Day</h3>
      <ul>
        {HABITS.map((habitElement) => {
          return <Card key={habitElement.id} habit={habitElement} />;
        })}
      </ul>
    </Main>
  );
}

const Main = styled.main`
  background-color: white;
`;

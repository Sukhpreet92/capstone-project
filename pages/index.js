import styled from "styled-components";
import HabitDone from "../components/HabitDone";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import HabitOnGoing from "../components/HabitOnGoing";

export default function Home({ habits, handleToggleHabit, handleDelete }) {
  return (
    <>
      <Header />
      <Main>
        <ul>
          <HabitOnGoing
            habits={habits}
            handleToggleHabit={handleToggleHabit}
            handleDelete={handleDelete}
          />
          <HabitDone
            habits={habits}
            handleToggleHabit={handleToggleHabit}
            handleDelete={handleDelete}
          />
        </ul>
      </Main>
      <Navigation />
    </>
  );
}

const Main = styled.main`
  margin: 0;
`;

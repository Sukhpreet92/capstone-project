import styled from "styled-components";
import { useState } from "react";
import { HabitsData } from "../lib/db";
import Header from "../components/Header";
import Card from "../components/Card";
import CreateNewForm from "../components/CreateNewForm";
import { nanoid } from "nanoid";
import Navigation from "../components/Navigation";

export default function Home() {
  const [cardData, setCardData] = useState(HabitsData);

  function appendCard(name) {
    setCardData((cardData) => [
      ...cardData,
      {
        name,
        id: nanoid(),
      },
    ]);
  }

  return (
    <>
      <Header />

      <Main>
        <CreateNewForm onAddNewData={appendCard} />
        <Navigation />
      </Main>
    </>
  );
}

const Main = styled.main`
  margin: 0;
`;

const Headline = styled.h2`
  color: black;
`;
const HabitForTodayList = styled.ul`
  font-size: 1.5em;
  color: pink;
`;

const HabitDone = styled.ul`
  font-size: 1.2em;
  filter: blur(0.04em);
`;

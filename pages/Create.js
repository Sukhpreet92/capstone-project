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

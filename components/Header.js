import styled from "styled-components";

export default function Header() {
  return (
    <HeaderPage>
      <H2>HabitTracker</H2>
    </HeaderPage>
  );
}

const HeaderPage = styled.header`
  position: sticky;
  color: rgb(0, 0, 0);
  text-align: center;
  background-color: transparent;
`;

const H2 = styled.h2`
  position: sticky;
  font-size: 2em;
  margin-top: 0;
`;

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
  color: white;
  text-align: center;
  background-color: skyblue;
`;

const H2 = styled.h2`
  position: sticky;
  font-size: 2em;
  margin-top: 0;
`;

import styled from "styled-components";

export default function Header() {
  return (
    <HeaderPage>
      <Title>HabitTracker</Title>
    </HeaderPage>
  );
}

const HeaderPage = styled.header`
  position: sticky;
  color: rgb(0, 0, 0);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  text-align: center;
  background-color: transparent;
`;

const Title = styled.h2`
  position: sticky;
  font-size: 2em;
  margin-top: 0;
`;

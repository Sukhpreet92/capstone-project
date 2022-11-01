import styled from "styled-components";
import Image from "next/image";
import homeIcon from "../public/images/homeIcon.png";
import addIcon from "../public/images/addIcon.png";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <StyledNavigation>
      <UlStyledList>
        <StyledList>
          <SyledHomeButton onClick={() => router.push("/")} type="button">
            <Image src={homeIcon} alt="Go to Homepage" />
          </SyledHomeButton>
        </StyledList>
        <StyledList>
          <StyledAddButton onClick={() => router.push("Create")} type="button">
            <Image src={addIcon} alt="Go to Createpage" />
          </StyledAddButton>
        </StyledList>
      </UlStyledList>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  background-color: white;
  position: fixed;
  padding: 0%;
  bottom: 0em;
  width: 100%;
  overflow: clip;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const UlStyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 2em;
  margin-top: 0;
  padding-bottom: 0.1em;
`;
const StyledList = styled.li`
  display: flex;
  align-items: center;
  padding-top: 0.3em;
  padding-bottom: 0.1em;
`;

const SyledHomeButton = styled.button`
  width: 3em;
  height: 3em;
  border: 0em;
  background-color: transparent;

  &:hover {
    cursor: pointer;

    filter: invert(1);
  }
`;

const StyledAddButton = styled.button`
  width: 3em;
  height: 3em;
  border: 0em;
  background-color: transparent;
  padding-bottom: 0.5em;
  &:hover {
    cursor: pointer;

    filter: invert(1);
  }
`;

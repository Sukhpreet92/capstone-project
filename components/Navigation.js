import styled from "styled-components";
import Image from "next/image";
import homeIcon from "../public/images/homeIcon.png";
import addIcon from "../public/images/addIcon.png";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledListEntry>

        <StyledList>
          <Link href="/" passHref>
            <NavLink aria-label="Go to Homepage">
              <Image src={homeIcon} alt="Go to Homepage" />
            </NavLink>
          </Link>
        </StyledList>
        <StyledList>
          <Link href="create">
            <Image src={addIcon} alt="Go to Createpage" />
          </Link>
        </StyledList>
      </StyledListEntry>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  background-color: #ffffff;
  position: fixed;
  padding: 0%;
  bottom: 0em;
  width: 100%;
  overflow: clip;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const StyledListEntry = styled.ul`
=======

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
  &:hover {
    cursor: pointer;

    filter: invert(1);
  }
`;

const NavLink = styled.a`
  width: 3em;
  border: 0em;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;

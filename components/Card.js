import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import deleteIcon from "../public/images/deleteIcon.png";
import unCheckedIcon from "../public/images/unCheckedIcon.png";
import checkedIcon from "../public/images/checkedIcon.png";

const Card = ({ id, name, isFinished, handleDelete }) => {
  const router = useRouter();

  async function handleToggleHabit() {
    const data = {
      id: id,
      isFinished: !isFinished,
    };

    const JSONdata = JSON.stringify(data);
    const url = `/api/habits/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    await fetch(url, options);
    router.push("/");
  }

  return (
    <CardContainer isFinished={isFinished}>
      <UnCheckedIcon onClick={handleToggleHabit}>
        {!isFinished ? (
          <Image src={unCheckedIcon} alt="uncheck icon for habit" />
        ) : (
          <Image src={checkedIcon} alt="check icon for habit" />
        )}
      </UnCheckedIcon>
      <HabitContainer onClick={handleToggleHabit}>{name}</HabitContainer>
      <DeleteButton onClick={() => handleDelete(id)}>
        <Image src={deleteIcon} alt="delete icon for habit" />
      </DeleteButton>
    </CardContainer>
  );
};
export default Card;

const CardContainer = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 2em 0;
  padding-left: 1em;
  padding-right: 1em;
  &:hover {
    filter: invert(1);
  }
`;

const UnCheckedIcon = styled.button`
  border: 0;
  margin: 0 0.5em 0 0;
  color: transparent;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const DeleteButton = styled.button`
  background-color: #ffffff;
  width: 3em;
  height: 3em;
  box-shadow: var(--box-shadow);
  &:hover {
    cursor: pointer;
  }
`;

const HabitContainer = styled.label`
  margin-top: 0.5em;
  transition: 0.3s;
  &:hover {
    letter-spacing: 0.1em;
  }
`;

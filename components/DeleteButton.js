import styled from "styled-components";
import Image from "next/image";
import cancelIcon from "../public/images/cancelIcon.png";
import yesIcon from "../public/images/yesIcon.png";
import noIcon from "../public/images/noIcon.png";

export default function DeleteAndCancelButton({ onDelete, onCancel }) {
  return (
    <Container>
      <div>
        <h2>Are you sure you want to forgo your habit?</h2>
        <CancelIcon onClick={onCancel}>
          <Image src={cancelIcon} alt="cancel icon to cancel the box" />
        </CancelIcon>
        <DeleteButton onClick={onDelete}>
          <Image src={yesIcon} alt="yes icon to delete the habit" />
        </DeleteButton>
        <DeleteButton onClick={onCancel}>
          <Image src={noIcon} alt="no icon to cancel the deletion" />
        </DeleteButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  bottom: 0;
  background-color: white;
  text-align: center;
  padding-top: 7em;
`;
const CancelIcon = styled.button`
  position: absolute;
  right: 35px;
  top: 15px;
  font-size: 2em;
  margin: auto;
  display: block;
  background-color: transparent;
  border: 0;
  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;
const DeleteButton = styled.button`
  margin: auto;
  display: block;
  padding: 0.4rem 0.75rem;
  transition: 0.3s;
  margin-top: 2em;
  margin-bottom: 2em;
  background: transparent;
  border: 0;
  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;

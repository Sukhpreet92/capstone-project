import styled from "styled-components";
export default function CreateNewForm({ onAddNewData }) {
  function sendForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name } = Object.fromEntries(formData);

    const nameInput = event.target.name.value;
    if (!nameInput) {
      alert("please enter your habit");
      return false;
    }
    onAddNewData(name);
    event.target.reset();
  }

  return (
    <form onSubmit={sendForm}>
      <InputBox
        type="text"
        placeholder="Enter your habit..."
        name="name"
        rows="1"
        maxLength="50"
        minLength={3}
      ></InputBox>

      <Button type="submit">Submit</Button>
    </form>
  );
}

const Button = styled.button`
  margin: auto;
  display: block;
  background-color: white;
  color: black;
  border-radius: 0.3rem;
  padding: 0.4rem 0.75rem;
  transition: 0.3s;
  align-items: center;

  &:hover {
    cursor: pointer;

    filter: invert(1);
  }
`;

const InputBox = styled.input`
  margin: auto;
  display: block;
`;

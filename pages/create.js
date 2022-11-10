import styled from "styled-components";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";

export default function Create() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name } = Object.fromEntries(formData);
    const data = {
      name: name,
      isFinished: false,
    };
    const JSONdata = JSON.stringify(data);
    const url = "/api/habits";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    await fetch(url, options);
    router.push("/");
  }

  return (
    <div>
      <main>
        <StyledFieldset>
          <Title>Add New Habit</Title>
          <form onSubmit={handleSubmit}>
            <StyledLabel htmlFor="name">Habit</StyledLabel>
            <InputBox
              aria-label="Enter your habit"
              type="text"
              name="name"
              id="name"
              rows="1"
              placeholder="&#9997;&#65039;Enter your habit..."
              maxLength="50"
              minLength={3}
              required
            />

            <StyledLabel htmlFor="Details">Details</StyledLabel>
            <InputBox
              aria-label="Enter details to your habit"
              type="text"
              placeholder="&#9997;&#65039;details..."
              name="details"
              rows="1"
              maxLength="50"
              minLength={2}
              required
            ></InputBox>
            <StyledLabel htmlFor="Starting date">Starting date</StyledLabel>
            <DateInput
              aria-label="Enter your starting date"
              type="date"
              name="date"
              id="date"
              required
            ></DateInput>
            <StyledLabel htmlfor="Frequency">Frequency</StyledLabel>
            <input type="radio" name="Frequency" value="Daily" />
            <label htmlfor="Daily">Daily</label>
            <input type="radio" name="Frequency" value="Weekly" />
            <label htmlfor="Weekly">Weekly</label>
            <input type="radio" name="Frequency" value="Monthly" />
            <label htmlfor="Monthly">Monthly</label>
            <StyledLabel htmlFor="Daytime">Daytime</StyledLabel>
            <input
              type="radio"
              name="Daytime"
              aria-label="select for All-day"
            />
            <label htmlfor="All-day">All-day</label>
            <input
              type="radio"
              name="Daytime"
              aria-label="select for Morning"
            />
            <label htmlfor="Afternoon">Morning</label>
            <input
              type="radio"
              name="Daytime"
              aria-label="select for Evening"
            />
            <label htmlfor="Afternoon">Evening</label>
            <input type="radio" name="Daytime" aria-label="select for Night" />

            <label htmlfor="Night">Night</label>
            <SubmitButton type="submit">Create</SubmitButton>
            <CancelButton onClick={() => router.push("/")}>Cancel</CancelButton>
          </form>
        </StyledFieldset>
      </main>
      <Navigation />
    </div>
  );
}

const Title = styled.h2`
  text-align: center;
`;
const InputBox = styled.input`
  align-self: center;
  border: 1 solid;
  width: 99%;
  height: 2rem;
  backdrop-filter: blur(30px);
  border-radius: 0.5em;
  font-size: 1.2rem;
  border: 0;
`;

const DateInput = styled.input`
  align-self: center;
  border: 1 solid;
  width: 99%;
  height: 2rem;
  backdrop-filter: blur(30px);
  border-radius: 0.5em;
  font-size: 1.2rem;
  border: 0;
`;
const StyledLabel = styled.label`
  font-size: 1.5em;
  display: flex;
  justify-content: left;
  border: 0;
`;

const StyledFieldset = styled.fieldset`
  display: relative;
  background: rgba(255, 255, 255);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  padding: 1rem 0 1rem 1rem;
  margin: 1em 1em 1em 1em;
  border: none;
`;
const CancelButton = styled.button`
  margin: auto;
  display: block;
  background-color: #ffffff;
  color: #000000;
  border-radius: 0.3rem;
  padding: 0.4rem 0.75rem;
  transition: 0.3s;
  margin-bottom: 3em;
  background-color: #ffcccb;
  border: 0;
  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;
const SubmitButton = styled.button`
  margin: auto;
  display: block;
  background-color: #ffffff;
  color: #000000;
  border-radius: 0.3rem;
  padding: 0.4rem 0.75rem;
  transition: 0.3s;
  margin-bottom: 3em;
  background-color: #90ee90;
  border: 0;
  &:hover {
    cursor: pointer;
    filter: invert(1);
  }
`;

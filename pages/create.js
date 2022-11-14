import styled from "styled-components";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";

export default function Create() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { name } = Object.fromEntries(formData);
    if (name.trim() === "") {
      alert("Please Enter your habit!");
      return;
    }
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
            <FormRadioItem>
              <FrequencyContaniner
                type="radio"
                name="Frequency"
                value="Daily"
              />
              <label for="Daily">Daily</label>
              <FrequencyContaniner
                type="radio"
                name="Frequency"
                value="Weekly"
              />
              <label for="Weekly">Weekly</label>
              <FrequencyContaniner
                type="radio"
                name="Frequency"
                value="Monthly"
              />

              <label for="Monthly">Monthly</label>
            </FormRadioItem>
            <StyledLabel htmlFor="Daytime">Daytime</StyledLabel>
            <FormRadioItem>
              <FrequencyContaniner
                type="radio"
                name="Daytime"
                aria-label="select for All-day"
              />
              <label htmlfor="All-day">AllDay</label>
              <FrequencyContaniner
                type="radio"
                name="Daytime"
                aria-label="select for Morning"
              />
              <label htmlfor="Afternoon">Morning</label>
              <FrequencyContaniner
                type="radio"
                name="Daytime"
                aria-label="select for Evening"
              />
              <label htmlfor="Afternoon">Evening</label>
              <FrequencyContaniner
                type="radio"
                name="Daytime"
                aria-label="select for Night"
              />

              <label htmlfor="Night">Night</label>
            </FormRadioItem>
            <SubmitButton type="submit">Create</SubmitButton>
            <CancelButton
              onClick={(event) => {
                event.preventDefault();
                router.push("/");
              }}
            >
              Cancel
            </CancelButton>
          </form>
        </StyledFieldset>
      </main>
      <Navigation />
    </div>
  );
}

const Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
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
  width: 99%;
  height: 1.2rem;
  backdrop-filter: blur(30px);
  font-size: 1.2rem;
  border: 0;
  color: var(--text-primary);
`;
const StyledLabel = styled.label`
  display: flex;
  justify-content: left;
  border: 0;
`;

const StyledFieldset = styled.fieldset`
  display: relative;
  background: rgba(255, 255, 255);
  box-shadow: var(--box-shadow);
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
  margin-bottom: 2em 0 3em 0;
  background-color: #ffcccb;
  border: 0;
  &:hover {
    cursor: pointer;
    filter: invert(1);
    letter-spacing: 5px;
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
  margin-bottom: 2em;
  margin-top: 3em;
  background-color: #90ee90;
  border: 0;
  &:hover {
    cursor: pointer;
    filter: invert(1);

    letter-spacing: 5px;
  }
`;

const FrequencyContaniner = styled.input`
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

const FormRadioItem = styled.li`
  padding-left: 0em;
  display: flex;
  font-size: 0.9em;
`;

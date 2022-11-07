import GlobalStyle from "../components/GlobalStyle";
import { useState } from "react";
import { HabitsData } from "../lib/db";
import { nanoid } from "nanoid";

function MyApp({ Component, pageProps }) {
  const [habits, setHabits] = useState(HabitsData);

  function appendHabit(title) {
    const newHabits = [
      {
        id: nanoid(),
        name: title,
        checked: false,
      },
      ...habits,
    ];
    setHabits(newHabits);
  }
  function handleDelete(id) {
    const updatedHabitsList = habits.filter((habit) => habit.id !== id);
    setHabits(updatedHabitsList);
  }
  function handleToggleHabit(id) {
    const toggledHabit = habits.map((habit) => {
      if (habit.id === id) habit.checked = !habit.checked;
      return habit;
    });
    setHabits(toggledHabit);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        habits={habits}
        appendHabit={appendHabit}
        setHabits={setHabits}
        handleDelete={handleDelete}
        handleToggleHabit={handleToggleHabit}
      />
    </>
  );
}
export default MyApp;

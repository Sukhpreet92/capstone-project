import HabitOnGoing from "../components/HabitOnGoing";
import Navigation from "../components/Navigation";
import DeleteButton from "../components/DeleteButton";
import { useState } from "react";
import Habit from "../models/Habit";
import dbConnect from "../lib/dbConnect";
import { useRouter } from "next/router";
import HabitDone from "../components/HabitDone";
import Header from "../components/Header";

export async function getServerSideProps() {
  await dbConnect();

  const result = await Habit.find();
  const habits = result.map((item) => ({
    id: item.id,
    name: item.name,
    isFinished: item.isFinished,
  }));

  return { props: { habits: habits } };
}

export default function Home({ habits }) {
  const router = useRouter();

  const [deleteButton, setDeleteButton] = useState({ show: false, id: null });

  async function handleToggleHabit() {
    const data = {
      id: id,
      isFinished: !isFinished,
    };

    const JSONdata = JSON.stringify(data);
    const url = `/api/tasks/${id}`;
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    await fetch(url, options);
  }
  function handleDelete(id) {
    setDeleteButton({ show: true, id });
  }

  async function onDelete() {
    if (deleteButton.show && deleteButton.id) {
      const id = deleteButton.id;
      const data = {
        id: id,
      };
      const JSONdata = JSON.stringify(data);
      const url = `/api/habits/${id}`;
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSONdata,
      };

      await fetch(url, options);
      setDeleteButton({ show: false, id: null });
      router.push("/");
    }
  }

  function onCancel() {
    setDeleteButton({ show: false, id: null });
  }

  return (
    <>
      <Header />
      <main>
        <HabitOnGoing
          habits={habits}
          handleDelete={handleDelete}
          handleToggleHabit={handleToggleHabit}
        />
        <HabitDone
          habits={habits}
          handleDelete={handleDelete}
          handleToggleHabit={handleToggleHabit}
        />
        {deleteButton.show && (
          <DeleteButton onDelete={onDelete} onCancel={onCancel} />
        )}

        <Navigation />
      </main>
    </>
  );
}

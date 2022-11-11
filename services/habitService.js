import dbConnect from "../lib/dbConnect";
import Habit from "../models/Habit";

export async function find() {
  const habits = await Habit.find();
  console.log(habits);
}

export async function getAllHabits() {
  await dbConnect();

  const habits = await Habit.find();

  const sanitizedHabits = habits.map((item) => ({
    id: item.id,
    name: item.name,
    isFinished: item.isFinished,
  }));

  return sanitizedHabits;
}

export async function getHabitById(id) {
  await dbConnect();

  const item = await Habit.findById(id);

  const sanitizedHabit = {
    id: item.id,
    name: item.name,
    isFinished: item.isFinished,
  };

  return sanitizedHabit;
}

export async function updateHabit(obj) {
  await dbConnect();

  const item = await Habit.updateOne(obj);

  const sanitizedHabit = {
    id: item.id,
    name: item.name,
    isFinished: false,
  };
  return sanitizedHabit;
}

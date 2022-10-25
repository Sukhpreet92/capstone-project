import { nanoid } from "nanoid";

const HabitsData = [
  {
    id: nanoid(),
    name: "brush",
    categoryId: "a",
  },
  {
    id: nanoid(),
    name: "exercise",
    categoryId: "a",
  },
  {
    id: nanoid(),
    name: "shower",
    categoryId: "a",
  },
  {
    id: nanoid(),
    name: "drink water",
    categorie: "a",
  },
  {
    id: nanoid(),
    name: "no smoking",
    categoryId: "a",
  },
  {
    id: nanoid(),
    name: "have breakfast",
    categoryId: "b",
  },
];

const category = [
  {
    id: "a",
    name: "all-day",
  },
  {
    id: "b",
    name: "Morning",
  },
];
export { HabitsData, category };

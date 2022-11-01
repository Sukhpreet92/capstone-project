import { nanoid } from "nanoid";

const HabitsData = [
  {
    id: nanoid(),
    name: "try me",
    categoryId: "a",
    checked: false,
  },
  {
    id: nanoid(),
    name: "brush",
    categoryId: "a",
    checked: true,
  },
  {
    id: nanoid(),
    name: "exercise",
    categoryId: "a",
    checked: false,
  },
  {
    id: nanoid(),
    name: "shower",
    categoryId: "a",
    checked: false,
  },
  {
    id: nanoid(),
    name: "drink water",
    categorie: "a",
    checked: true,
  },
  {
    id: nanoid(),
    name: "no smoking",
    categoryId: "a",
    checked: false,
  },
  {
    id: nanoid(),
    name: "have breakfast",
    categoryId: "b",
    checked: false,
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

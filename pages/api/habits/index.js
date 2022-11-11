import dbConnect from "../../../lib/dbConnect";
import Habit from "../../../models/Habit";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const habits = await Habit.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: habits });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const habit = await Habit.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: habit });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}

import dbConnect from "../../../lib/dbConnect";
import Habit from "../../../models/Habit";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const habit = await Habit.findById(id);
        res.status(200).json({ success: true, data: habit });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const habit = await habit.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!habit) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: habit });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedHabit = await Habit.deleteOne({ _id: id });
        res.status(200).json({ success: true, data: { deletedHabit } });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}

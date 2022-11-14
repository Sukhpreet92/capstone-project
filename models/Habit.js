import mongoose from "mongoose";

const { Schema } = mongoose;

const habitSchema = new Schema({
  name: { type: String, required: true },

  isFinished: { type: Boolean, required: false },
});

mongoose.models = {};

const Habit = mongoose.models.Habit || mongoose.model("Habit", habitSchema);

export default Habit;

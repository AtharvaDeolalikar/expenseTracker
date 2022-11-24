import { Schema, model } from "mongoose";

const expenseSchema = new Schema({
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
});

const expenseModel = model("Expenses", expenseSchema);

export default expenseModel;

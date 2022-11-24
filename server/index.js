import express from "express";
import connectWithDB from "./connectDB.js";
import Expenses from "./models/expenseSchema.js";
const app = express();

app.use(express.json());

// app.get("/", async (req, res) => {
//   try {
//     return res.send({ message: "Server is running successfully" });
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// });

app.get("/", async (req, res) => {
  try {
    let expenses = await Expenses.find();
    setTimeout(() => {
      return res.send({ success: true, data: { expenses: expenses } });
    }, 3000);
  } catch (e) {
    return res.status(400).send({ success: false, message: e.message });
  }
});

app.post("/", async (req, res) => {
  try {
    console.log(req.body);
    let expense = new Expenses(req.body);
    await expense.save();
    return res.send({
      success: true,
      message: "The expense added successfully",
    });
  } catch (e) {
    return res.status(400).send({ success: false, message: e.message });
  }
});

app.get("*", (req, res) => {
  res
    .status(404)
    .send({ message: "This route does not exist", success: false });
});

connectWithDB(app);

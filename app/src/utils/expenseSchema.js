import * as yup from "yup";

let expenseSchema = yup.object().shape({
  category: yup.string().required(),
  amount: yup.number().required().positive().integer(),
  transactionDate: yup.date().default(() => new Date()),
});

export default expenseSchema;

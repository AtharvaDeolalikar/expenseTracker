import { StatusBar, StyleSheet, View } from "react-native";
import AddTransanction from "../components/AddExpenseBtn";
import ExpenseStats from "../components/expenseStats";
import Transanctions from "../components/expensesList";
import { useQuery } from "react-query";
import Lottie from "lottie-react-native";
import expenseSchema from "../utils/expenseSchema";
import ExpensesModal from "../components/expensesModal";
import showToast from "../utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { hideModel } from "../utils/reducers/modelReducer";

export default function Home() {
  const input = useSelector((state) => state.input.value);
  const dispatch = useDispatch();
  const { isLoading, error, data, refetch } = useQuery("expenses", () =>
    fetch("https://expense-tracker-server.vercel.app/").then((res) =>
      res.json()
    )
  );

  async function addTransanction() {
    console.log(input);
    expenseSchema
      .validate(input)
      .then(async () => {
        let response = await fetch(
          "https://expense-tracker-server.vercel.app/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(input),
          }
        );
        response = await response.json();
        if (response.success) {
          showToast(response.message);
          dispatch(hideModel());
          refetch();
        }
      })
      .catch((e) => showToast(e.message));
  }

  if (error) {
    console.log(error);
  }

  if (isLoading) {
    return (
      <View style={[styles.loaderContainer, styles.container]}>
        <Lottie source={require("../animation.json")} autoPlay loop />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#5b60b8"} />
      <ExpenseStats transanctions={data.data.expenses} />
      <View style={styles.paddingContainer}>
        <Transanctions transanctions={data.data.expenses} />
        <AddTransanction />
        <ExpensesModal addTransanction={addTransanction} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#5b60b8",
  },
  paddingContainer: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

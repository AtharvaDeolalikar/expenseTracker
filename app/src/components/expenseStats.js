import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function getTotalTransanctions(transanctions) {
  let total = 0;
  transanctions.map((transanction) => {
    total += transanction.amount;
  });
  return total;
}

export default function ExpenseStats({ transanctions }) {
  const [totalTransanctionsAmt, setTotalTransanctionsAmt] = useState();

  useEffect(() => {
    setTotalTransanctionsAmt(getTotalTransanctions(transanctions));
  }, [transanctions]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Total Expenses</Text>
      <Text style={styles.text}>INR {totalTransanctionsAmt}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    color: "white",
  },
  text: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },
});

import { FlatList, StyleSheet, Text, View } from "react-native";
import TransanctionItem from "./expenseItem";

export default function Transanctions({ transanctions }) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>All Expenses</Text>
      <FlatList
        style={styles.transanctionsContainer}
        data={transanctions}
        renderItem={({ item }) => <TransanctionItem item={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  headerTitle: { fontWeight: "400", fontSize: 20, marginBottom: 10 },
  container: {
    flex: 1,
  },
  transanctionsContainer: {
    flex: 1,
  },
});

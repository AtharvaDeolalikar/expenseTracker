import { StyleSheet, Text, View } from "react-native";
import parseDate from "../utils/parseDate";

export default function TransanctionItem({ item }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.categoryText}>{item.category}</Text>
        <Text style={styles.amountText}>INR {item.amount}</Text>
      </View>
      <View>
        <Text>{parseDate(item.trasanctionDate)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#eeeff6",
    borderRadius: 8,
  },
  categoryText: { fontSize: 18 },
  amountText: {
    color: "#696060",
  },
});

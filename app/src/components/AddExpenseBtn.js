import { Button, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { showModel } from "../utils/reducers/modelReducer";

export default function AddExpenseBtn() {
  const dispatch = useDispatch();
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          onPress={() => dispatch(showModel())}
          title="Add Transanction"
          color={"#5b60b8"}
        ></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  button: {
    textAlign: "center",
    color: "white",
  },
});

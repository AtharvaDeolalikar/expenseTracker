import { useEffect } from "react";
import {
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { resetInput, setInput } from "../utils/reducers/inputReducer";
import { hideModel } from "../utils/reducers/modelReducer";

export default function ExpensesModal({ addTransanction }) {
  const modelOpen = useSelector((state) => state.model.value);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetInput());
  }, []);

  return (
    <Modal
      transparent={true}
      statusBarTranslucent
      visible={modelOpen}
      animationType="fade"
      onRequestClose={() => {
        dispatch(hideModel);
      }}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Text style={styles.inputLabel}>Category</Text>

          <TextInput
            style={styles.input}
            onChangeText={(val) => dispatch(setInput({ category: val }))}
          />

          <Text style={styles.inputLabel}>Amount</Text>

          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(val) => dispatch(setInput({ amount: +val }))}
          />

          <TouchableHighlight
            style={styles.modalBtnContainer}
            underlayColor="#454aa3"
            onPress={() => {
              addTransanction();
            }}
          >
            <Text style={styles.modalBtn}>ADD</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    width: 300,
  },
  modalBtnContainer: {
    backgroundColor: "#5b60b8",
    paddingVertical: 8,
    marginTop: 20,
    borderRadius: 5,
  },
  modalBtn: {
    textAlign: "center",
    color: "white",
  },
  inputLabel: {
    marginTop: 10,
  },
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    paddingHorizontal: 10,
  },
});

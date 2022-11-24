import { ToastAndroid } from "react-native";

export default function showToast(message) {
  return ToastAndroid.show(message, ToastAndroid.SHORT);
}

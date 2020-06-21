import { StyleSheet } from "react-native";
import { textStyle } from "../../styles/Text";

export const styles = StyleSheet.create({
  instructions: {
    ...textStyle.text,
    margin: 15,
  },
  image: { margin: 10, height: 300, width: "90%" },
});

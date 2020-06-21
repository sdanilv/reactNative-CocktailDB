import { StyleSheet } from "react-native";
import { textStyle } from "../../../styles/Text";

export const styles = StyleSheet.create({
  ingredients: {
    borderWidth: 1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    margin: 10,
    ...textStyle.text,
  },
  measures: { marginRight: 100 },
  ingredient: { flexDirection: "row", justifyContent: "space-around" },
});

import { StyleSheet } from "react-native";
import { textStyle } from "styles/Text";

export const styles = StyleSheet.create({
  drinksHeader: {
    ...textStyle.text,
    marginLeft: 20,
    margin: 20,
    fontSize: 14,
  },
  filterIcon: {
    marginRight: 20,
  },
  end: {
    justifyContent: "center",
    alignItems: "center",
  },
  endText: {
    ...textStyle.text,
    color: "#FF7F50",
    fontSize: 20,
    padding: 20,
  },
});

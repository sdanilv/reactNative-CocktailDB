import { StyleSheet } from "react-native";
import { textStyle } from "../../styles/Text";

export const styles = StyleSheet.create({
  check: {
    marginRight: 65,
  },
  filters: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#272727",
    width: 260,
    height: 53,
    margin: 27,
  },
  buttonText: {
    ...textStyle.text,
    color: "white",
  },
});

import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import { Icon } from "react-native-elements";
import { textStyle } from "styles/Text";
import { styles } from "./Filter.styles";

const Filter = ({ filter, checked, setChecked }) => {
  const isChecked = checked.includes(filter);
  const filterCheckHandler = () => {
    if (isChecked) setChecked(checked.filter((item) => item !== filter));
    else setChecked((state) => [...state, filter]);
  };

  return (
    <TouchableNativeFeedback onPress={filterCheckHandler}>
      <View style={styles.filter}>
        <Text style={textStyle.text}>{filter}</Text>
        {isChecked && <Icon style={styles.check} type="material" name="done" />}
      </View>
    </TouchableNativeFeedback>
  );
};

export default Filter;

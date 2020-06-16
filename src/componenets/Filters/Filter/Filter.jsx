import React from "react";
import { Text, TouchableNativeFeedback, View } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./Filter.styles";

const Filter = ({ filter, checked, setChecked }) => {
  const filterCheckHandler = () => {
    if (checked.includes(filter))
      setChecked(checked.filter((item) => item !== filter));
    else setChecked((state) => [...state, filter]);
  };

  return (
    <TouchableNativeFeedback onPress={filterCheckHandler}>
      <View style={styles.filter}>
        <Text style={styles.filterText}>{filter}</Text>
        {checked.includes(filter) && (
          <Icon style={styles.check} type="material" name="done" />
        )}
      </View>
    </TouchableNativeFeedback>
  );
};

export default Filter;

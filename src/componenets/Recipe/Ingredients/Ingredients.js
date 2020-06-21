import React from "react";
import { Text, View } from "react-native";
import { styles } from "./Ingredients.styles";

const Ingredients = ({ recipe }) => {
  const names = [];
  const measures = [];

  for (let i = 0; i < 15; i++) {
    const name = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (name) {
      names.push(
        <Text key={"name" + name} style={styles.text}>
          {name}
        </Text>
      );
      measures.push(
        <Text key={"measure" + name} style={styles.text}>
          {measure}
        </Text>
      );
    }
  }

  return (
    <View style={styles.ingredients}>
      <View>{names}</View>
      <View style={styles.measures}>{measures}</View>
    </View>
  );
};
export default Ingredients;

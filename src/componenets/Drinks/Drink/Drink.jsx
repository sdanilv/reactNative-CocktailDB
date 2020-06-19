import React from "react";
import { Image, Text, View } from "react-native";
import { styles } from "./Drink.styles";

const Drink = ({ strDrinkThumb, strDrink }) => {
  return (
    <View style={styles.drink}>
      <Image
        style={styles.drinkImg}
        source={{
          uri: strDrinkThumb,
        }}
      />
      <Text style={styles.text}>{strDrink}</Text>
    </View>
  );
};

export default Drink;

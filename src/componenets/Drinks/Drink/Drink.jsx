import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { textStyle } from "../../../styles/Text";

import { styles } from "./Drink.styles";

const Drink = ({ strDrinkThumb, strDrink, goToRecipe, idDrink }) => {
  return (
    <TouchableOpacity onPress={() => goToRecipe(idDrink)}>
      <View style={styles.drink}>
        <Image
          style={styles.drinkImg}
          source={{
            uri: strDrinkThumb,
          }}
        />
        <Text style={textStyle.text}>{strDrink}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Drink;

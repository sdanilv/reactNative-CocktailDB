import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";


const Drink = ({ idDrink, strDrinkThumb, strDrink }) => (

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

export default Drink;
const styles = StyleSheet.create({
  drink: {
    height: 60,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  drinkImg: {
    marginRight: 20,
    width: 50,
    height: 50,
  },
});

import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text } from "react-native";
import Drinks from "./src/componenets/Drinks/Drinks";
import { Provider } from "react-redux";
import { store } from "./src/reduce/store";
import Filters from "./src/componenets/Filters/Filters";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from './src/componenets/MainScreen/MainScreen';


const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <MainScreen/>
    </NavigationContainer>
  </Provider>
);

export default App;

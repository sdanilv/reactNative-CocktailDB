import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Drinks from "../Drinks/Drinks";
import Filters from "../Filters/Filters";
import Recipe from "../Recipe/Recipe";

const RootStack = createStackNavigator();

const MainScreen = () => (
  <RootStack.Navigator mode="modal">
    <RootStack.Screen name="Main" component={Drinks} />
    <RootStack.Screen name="Filters" component={Filters} />
    <RootStack.Screen name="Recipe" component={Recipe} />
  </RootStack.Navigator>
);

export default MainScreen;

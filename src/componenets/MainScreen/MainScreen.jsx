import React from "react";
import Drinks from "../Drinks/Drinks";
import { Text } from "react-native";
import Filters from "../Filters/Filters";
import { styles } from "./MainScreen.styles";
import { createStackNavigator } from "@react-navigation/stack";

const RootStack = createStackNavigator();

const MainScreen = () => (
  <RootStack.Navigator mode="modal">
    <RootStack.Screen
      name="Main"
      component={Drinks}
      options={() => ({
        headerTitle: () => <Text style={styles.navbarText}>Drinks</Text>,
      })}
    />
    <RootStack.Screen
      name="Filters"
      component={Filters}
      options={() => ({
        headerTitle: () => <Text style={styles.navbarText}>Filters</Text>,
      })}
    />
  </RootStack.Navigator>
);

export default MainScreen;

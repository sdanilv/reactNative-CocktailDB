import React from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Drinks from "../Drinks/Drinks";
import Filters from "../Filters/Filters";
import { styles } from "./MainScreen.styles";

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

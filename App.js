import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/reduce/store";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./src/componenets/MainScreen/MainScreen";

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  </Provider>
);

export default App;

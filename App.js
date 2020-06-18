import React from "react";
import { Provider } from "react-redux";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import store  from "./src/reduce";
import MainScreen from "./src/componenets/MainScreen/MainScreen";

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>
  </Provider>
);

export default App;

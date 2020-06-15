import React from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import {fetchFilters} from '../reduce/DrinksReducer';
import {connect} from 'react-redux';
import {useState} from 'react';

const Navbar = (props) => {
const [filterOpen, setFilterOpen] =  useState(false);
  const touchFilterEvent = (event) =>{
    setFilterOpen(!filterOpen)
  }
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Drinks</Text>
      <TouchableNativeFeedback onPress = {touchFilterEvent}>
        <Text >Filter {filterOpen.toString()} </Text>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    height: 90,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    marginBottom:10
  },
  text: {
    paddingLeft: 20,
    fontSize: 20,
  },
  button: {
    backgroundColor: "black",
    marginRight: 50,
  },
});

export default connect(state=>({}),{fetchFilters})(Navbar);

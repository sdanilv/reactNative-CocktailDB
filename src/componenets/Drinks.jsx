import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  SectionList,
} from "react-native";
import { connect } from "react-redux";
import { fetchDrinks } from "../reduce/DrinksReducer";
import Drink from "./Drink";


const Drinks = (props) => {
  useEffect(() => {
    props.fetchDrinks();
  }, [fetchDrinks]);
  return (
    <View style={styles.container}>
      <Text style={styles.filterName}>{props.filter}</Text>
      <ScrollView >
      {props.drinks.map((item) => (
        <Fragment key={item.idDrink}>
          <Drink {...item} />
        </Fragment>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },

  filterName: {
    paddingLeft: 10,
  },
});
const mapStateToProps = (state) => ({
  drinks: state.Drinks.drinks,
  filter: state.Drinks.filter,
});

export default connect(mapStateToProps, { fetchDrinks })(Drinks);

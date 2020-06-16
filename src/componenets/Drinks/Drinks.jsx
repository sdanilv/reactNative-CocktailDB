import React, { useEffect } from "react";
import { SectionList, Text, TouchableNativeFeedback, View } from "react-native";
import { connect } from "react-redux";
import {fetchFilters, loadNextSection} from '../../reduce/DrinksReducer';
import Drink from "./Drink/Drink";
import { Icon } from "react-native-elements";
import { styles } from "./Drinks.styles";

const Drinks = ({ navigation, fetchFilters, drinks, loadNextSection }) => {
  const pressFiltersHandler = () => navigation.navigate("Filters")

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableNativeFeedback onPress={pressFiltersHandler}>
          <Icon
            name="filter"
            type="material-community"
            style={styles.filterIcon}
          />
        </TouchableNativeFeedback>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    fetchFilters();
  }, [fetchFilters]);

  return (
    <View>
      <SectionList
        sections={drinks}
        keyExtractor={(item) => item.idDrink}
        renderItem={({ item }) => <Drink {...item} />}
        renderSectionHeader={({ section: { filter } }) => (
          <Text style={styles.drinksHeader}>{filter}</Text>
        )}
        // onEndReached ={() => {loadNextSection()}}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  drinks: state.Drinks.drinks,
});

export default connect(mapStateToProps, { fetchFilters, loadNextSection })(Drinks);

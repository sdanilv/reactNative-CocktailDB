import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Text, TouchableNativeFeedback, View } from "react-native";
import { setCheckedFilters } from "../../reduce/DrinksReducer";
import Filter from "./Filter/Filter";
import {styles} from "./Filters.styles";

const Filters = ({
  filters,
  checkedFilters,
  setCheckedFilters,
  navigation,
}) => {
  const [checked, setChecked] = useState([]);
  useEffect(() => {
    setChecked(checkedFilters);
  }, [checkedFilters]);
  const applyHandler = () => {
    setCheckedFilters(checked);
    navigation.goBack();
  };

  return (
    <View style={styles.filters}>
      {filters.map((filter) => (
        <Filter
          key={filter}
          filter={filter}
          checked={checked}
          setChecked={setChecked}
        />
      ))}
      <TouchableNativeFeedback onPress={applyHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>APPLY</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const mapStateToProps = (state) => ({
  filters: state.Drinks.filters,
  checkedFilters: state.Drinks.checkedFilters,
});

export default connect(mapStateToProps, { setCheckedFilters })(Filters);
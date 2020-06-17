import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ScrollView, Text, TouchableNativeFeedback, View } from "react-native";
import Filter from "./Filter/Filter";
import { styles } from "./Filters.styles";
import {setCheckedFilters} from "../../reduce/FIltersReducer";

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
      <ScrollView >
        {filters.map((filter) => (
          <Filter
            key={filter}
            filter={filter}
            checked={checked}
            setChecked={setChecked}
          />
        ))}
      </ScrollView>
      <TouchableNativeFeedback onPress={applyHandler}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>APPLY</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const mapStateToProps = (state) => ({
  filters: state.Filters.filters,
  checkedFilters: state.Filters.checkedFilters,
});

export default connect(mapStateToProps, { setCheckedFilters })(Filters);

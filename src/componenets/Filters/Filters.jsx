import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {ScrollView, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";
import Filter from "./Filter/Filter";
import { styles } from "./Filters.styles";
import {setCheckedFilters} from "../../reduce/FIltersReducer";
import {Icon} from "react-native-elements";

const Filters = ({
  filters,
  checkedFilters,
  setCheckedFilters,
  navigation,
}) => {
  const [checked, setChecked] = useState([]);

  const checkAllHandler = ()=>{
    console.log(checked.length?[]:filters);
    setChecked(checked.length?filters:[])};
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
          <TouchableOpacity activeOpacity={0.3} onPress={checkAllHandler}>
            <Icon style={styles.check} type="material" name="done" />
          </TouchableOpacity>
      ),
    });
  }, [navigation]);

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

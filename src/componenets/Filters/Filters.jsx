import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { setCheckedFilters } from "../../reduce/FIltersReducer";
import { textStyle } from "../../styles/Text";
import Filter from "./Filter/Filter";
import { styles } from "./Filters.styles";

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

  const checkAllHandler = () =>
    setChecked((state) => (state.length ? [] : filters));
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={textStyle.title}>Filters</Text>,
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.3} onPress={checkAllHandler}>
          <Icon style={styles.check} type="material" name="done" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const applyHandler = () => {
    setCheckedFilters(checked);
    navigation.goBack();
  };

  return (
    <View style={styles.filters}>
      <ScrollView>
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

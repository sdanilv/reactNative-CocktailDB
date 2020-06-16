import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SectionList,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { connect } from "react-redux";
import { fetchFilters, loadNextSection } from "../../reduce/DrinksReducer";
import Drink from "./Drink/Drink";
import { Icon } from "react-native-elements";
import { styles } from "./Drinks.styles";

const Drinks = ({ navigation, fetchFilters, drinks, loadNextSection }) => {
  const pressFiltersHandler = () => navigation.navigate("Filters");
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
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
        onEndReached={() => {
          setLoading(true);
          loadNextSection().then((data) => {
            setIsEnd(data);
            setLoading(false);
          });
        }}
        renderSectionFooter={() => {
          if (isEnd)
            return (
              <View style={styles.end}>
                <Text style={styles.endText}>You have reached the end</Text>
              </View>
            );
          if (loading)
            return (
              <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
            );
        }}
        stickySectionHeadersEnabled
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  drinks: state.Drinks.drinks,
});

export default connect(mapStateToProps, { fetchFilters, loadNextSection })(
  Drinks
);

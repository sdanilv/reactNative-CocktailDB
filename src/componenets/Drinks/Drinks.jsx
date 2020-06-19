import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  RefreshControl,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { loadNextSection } from "../../reduce/DrinksReducer";
import Drink from "./Drink/Drink";
import { styles } from "./Drinks.styles";
import { fetchFilters } from "../../reduce/FIltersReducer";

const mapStateToProps = (state) => ({
  drinks: state.Drinks.drinks,
});

const Drinks = ({ navigation, fetchFilters, drinks, loadNextSection }) => {
  const pressFiltersHandler = () => navigation.navigate("Filters");
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.3} onPress={pressFiltersHandler}>
          <Icon
            name="filter"
            type="material-community"
            style={styles.filterIcon}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    fetchFilters();
  }, [fetchFilters]);

  const onEndReachedHandler = () => {
    setLoading(true);
    loadNextSection().then((data) => {
      setIsEnd(data);
      setLoading(false);
    });
  };
  const renderSectionFooterCallback = () =>
    isEnd && (
      <View style={styles.end}>
        <Text style={styles.endText}>You have reached the end</Text>
      </View>
    );
  return (
    <View>
      <SectionList
        sections={drinks}
        keyExtractor={({ idDrink }) => idDrink}
        renderItem={({ item }) => <Drink {...item} />}
        renderSectionHeader={({ section: { filter } }) => (
          <Text style={styles.drinksHeader}>{filter}</Text>
        )}
        onEndReached={onEndReachedHandler}
        renderSectionFooter={renderSectionFooterCallback}
        refreshControl={<RefreshControl refreshing={loading} />}
        stickySectionHeadersEnabled
      />
    </View>
  );
};

export default connect(mapStateToProps, { fetchFilters, loadNextSection })(
  Drinks
);

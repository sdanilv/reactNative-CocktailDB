import React, { useEffect, useState } from "react";
import {
  RefreshControl,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { textStyle } from "styles/Text";
import { loadNextSection } from "reduce/DrinksReducer";
import { fetchFilters } from "reduce/FIltersReducer";
import { fetchRecipe } from "reduce/RecipeReducer";
import Drink from "./Drink/Drink";
import { styles } from "./Drinks.styles";

const mapStateToProps = (state) => ({
  drinks: state.Drinks.drinks,
});

const Drinks = ({
  navigation,
  fetchFilters,
  fetchRecipe,
  drinks,
  loadNextSection,
}) => {
  const [loading, setLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const goToFilters = () => navigation.navigate("Filters");
  const goToRecipe = (id) => {
    fetchRecipe(id);
    navigation.navigate("Recipe");
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={textStyle.title}>Drinks</Text>,
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.3} onPress={goToFilters}>
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
        renderItem={({ item }) => <Drink goToRecipe={goToRecipe} {...item} />}
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

export default connect(mapStateToProps, {
  fetchFilters,
  fetchRecipe,
  loadNextSection,
})(Drinks);

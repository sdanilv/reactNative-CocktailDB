import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { connect } from "react-redux";
import { textStyle } from "../../styles/Text";
import Ingredients from "./Ingredients/Ingredients";
import { styles } from "./Recipe.styles";

const Recipe = ({ recipe, navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text style={textStyle.title}>{recipe.strDrink}</Text>,
    });
  }, [navigation, recipe]);
  if (!recipe.idDrink) return <View />;
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          style={styles.image}
          source={{
            uri: recipe.strDrinkThumb,
          }}
        />
        <Ingredients recipe={recipe} />
        <View>
          <Text style={styles.instructions}>{recipe.strInstructions}</Text>
        </View>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = (state) => ({ recipe: state.Recipe.recipe });
export default connect(mapStateToProps)(Recipe);

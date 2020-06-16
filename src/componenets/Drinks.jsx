import React, {useEffect} from "react";
import {Button, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View,} from "react-native";
import {connect} from "react-redux";
import {fetchDrinks} from "../reduce/DrinksReducer";
import Drink from "./Drink";
import {Icon} from "react-native-elements";


const Drinks = ({navigation, ...props}) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableNativeFeedback onPress={() => navigation.navigate('Filter')}>
                    <Icon name="filter" type='material-community' />
                </TouchableNativeFeedback>

            ),
        });
    }, [navigation]);

    useEffect(() => {
        props.fetchDrinks();
    }, [fetchDrinks]);
    return (<View>
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.filterName}>{props.filter}</Text>
                <View>
                    {props.drinks.map((item) => (
                        <Drink key={item.idDrink} {...item} />
                    ))}
                </View>
            </View>
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
        overflow: "scroll"
    },

    filterName: {
        paddingLeft: 10,
    },
});
const mapStateToProps = (state) => ({
    drinks: state.Drinks.drinks,
    filter: state.Drinks.filter,
});

export default connect(mapStateToProps, {fetchDrinks})(Drinks);

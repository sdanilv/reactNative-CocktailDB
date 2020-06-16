import React from 'react';
import {connect} from "react-redux";
import {Button, StyleSheet, TouchableNativeFeedback, View} from "react-native";
import {Text} from "react-native";
import {fetchFilters} from "../reduce/DrinksReducer";
import {useEffect} from "react";
import {Icon} from "react-native-elements";



const Filters = ({fetchFilters, filters, navigation }) => {

    useEffect(()=>{
            fetchFilters()
        },
        [fetchFilters]);
    return (
        <View style={styles.filters}>
            {filters.map(({strCategory}, index) => <Text key = {strCategory} >{strCategory}</Text>)}
        </View>
    );
};
const styles = StyleSheet.create({
    filters: {
        backgroundColor:"white"
    }
});

const mapStateToProps = state => ({openFilters: state.Drinks.openFilters,
filters:state.Drinks.filters });

export default connect(mapStateToProps, {fetchFilters})(Filters)
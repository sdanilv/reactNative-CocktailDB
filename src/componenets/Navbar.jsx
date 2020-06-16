import React, {useState} from "react";
import {StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {connect} from 'react-redux';
import {Icon} from "react-native-elements";

const Navbar = (props) => {


    const [filterOpen, setFilterOpen] = useState(false);
    const touchFilterEvent = (event) => {
        setFilterOpen(!filterOpen)
    }
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>Drinks</Text>
            <TouchableNativeFeedback onPress={touchFilterEvent}>
                <Icon name="filter" type='material-community' />
            </TouchableNativeFeedback>

        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        flexDirection: "row",
        height: 90,
        alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        marginBottom: 10
    },
    text: {
        paddingLeft: 20,
        fontSize: 20,
    },
    button: {
        backgroundColor: "black",
        marginRight: 50,
    },
});

export default connect(state => ({openFilters: state.Drinks.openFilters}), {})(Navbar);

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Navbar = (props) => {
  return (
      <View style={styles.navbar}>
        <Text style={styles.text}>{props.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    paddingBottom: 10,
    height: 70,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default Navbar;

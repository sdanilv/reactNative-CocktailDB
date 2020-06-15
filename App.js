import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navbar from './src/componenets/Navbar';
import Drinks from './src/componenets/Drinks';
import {Provider} from 'react-redux';
import {store} from './src/reduce/store';

const App = () => (
    <Provider store={store} >
        <View style={styles.container}>
          <Navbar title={'Heo'}/>
          <Drinks />
        </View>
    </Provider>
);

const styles = StyleSheet.create({
  container: {
  },

});

export default App;

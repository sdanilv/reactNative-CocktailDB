import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {getFilterCocktails} from '../api/api';

const Cocktails = (props) => {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    const setFilterCocktails = async () => {
      setCocktails(await getFilterCocktails("Ordinary Drink"))
    };
    setFilterCocktails();
  }, [getFilterCocktails, setCocktails])
  return <View>
    <Text>{JSON.stringify(cocktails)}</Text>
  </View>
}

export default Cocktails;

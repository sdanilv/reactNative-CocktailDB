import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Navbar from './src/componenets/Navbar';
import Drinks from './src/componenets/Drinks';
import {Provider} from 'react-redux';
import {store} from './src/reduce/store';
import Filters from "./src/componenets/Filters";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
            <Button
                onPress={() => navigation.navigate('MyModal')}
                title="Open Modal"
            />
        </View>
    );
}

function ModalScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>This is a modal!</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
        </View>
    );
}

function DetailsScreen() {
    return (
        <View>
            <Text>Details</Text>
        </View>
    );
}

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();
function LogoTitle() {
    return (
       <Text>Hello orld </Text>
    );
}

function MainStackScreen() {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={HomeScreen}   options={({ navigation, route }) => ({
                headerTitle: props => <Navbar {...props} />,
            })}
            />
            <MainStack.Screen name="Details" component={DetailsScreen} />
        </MainStack.Navigator>
    );
}
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    }, {
        id: 'asd',
        title: 'Third Item',
    }, {
        id: 'asd',
        title: 'Third Item',
    }, {
        id: 'asd',
        title: 'Third Item',
    }, {
        id: 'asd',
        title: 'Third Item',
    }, {
        id: 'asd',
        title: 'Third Item',
    },
];



function Item({title}) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const App = () => (
        <Provider store={store}>
            {/*<View style={styles.container}>*/}
                {/*<Navbar/>*/}
                {/*<FlatList*/}
                {/*    style={styles.ss}*/}
                {/*    data={DATA}*/}
                {/*    renderItem={({ item }) => <Item title={item.title} />}*/}
                {/*    keyExtractor={item => item.id}*/}
                {/*/>*/}

    <NavigationContainer>
                    <RootStack.Navigator mode="modal" >
                        <RootStack.Screen name="Main" component={Drinks}  options={({ navigation, route }) => ({
                            headerTitle: props => <Text>Drinks</Text> ,
                        })}/>
                        <RootStack.Screen name="Filter" component={Filters} />
                    </RootStack.Navigator>
    </NavigationContainer>
            {/*</View>*/}
        </Provider>
);

const styles = StyleSheet.create({
    container: {},
    ss: {height: "auto"},
    sideMenu: {
        backgroundColor: "white",
        opacity: 1
    },
    side: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

export default App;

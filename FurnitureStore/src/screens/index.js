import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';

// screens
import ItemDetail from './ItemDetail';
import Home from './Home';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    },
};

const Stack = createStackNavigator();

const Furniture = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'Home'}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
};

export default () => {
    return <Furniture />;
};

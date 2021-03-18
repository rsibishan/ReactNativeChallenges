import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';

import Home from './Home';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    },
};

const Stack = createStackNavigator();

const ExpenseTracker = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'Home'}>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
};

export default ExpenseTracker;

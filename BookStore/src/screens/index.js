import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';

import BookDetail from './BookDetail';
import Tabs from '../navigations/tabs';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    },
};

const Stack = createStackNavigator();

const BookStore = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={'Home'}>
                {/* Tabs */}
                <Stack.Screen name="Home" component={Tabs} />

                {/* Screens */}
                <Stack.Screen
                    name="BookDetail"
                    component={BookDetail}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
            <StatusBar style="light" />
        </NavigationContainer>
    );
};

export default BookStore;

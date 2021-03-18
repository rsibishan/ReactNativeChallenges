import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';

import OnBoardingScreen from './OnBoarding';

const Stack = createStackNavigator();
const OnBoarding = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoardingScreen}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
};

export default () => {
    return <OnBoarding />;
};

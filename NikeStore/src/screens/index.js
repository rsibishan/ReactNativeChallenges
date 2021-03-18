import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';

// screens
import Home from './Home';

// constants
import {icons, COLORS, FONTS, SIZES} from '../constants/index';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent',
    },
};

const Stack = createStackNavigator();

const Nike = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator initialRouteName={'Home'}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'SHOE SELECTOR',
                        headerTintColor: COLORS.lightGray,
                        headerTitleStyle: {
                            ...FONTS.navTitle,
                        },
                        headerLeft: ({onPress}) => (
                            <TouchableOpacity
                                style={{marginLeft: SIZES.padding}}
                                onPress={onPress}>
                                <Image
                                    source={icons.menu}
                                    resizeMode="contain"
                                    style={styles.menu}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={{marginRight: SIZES.padding}}
                                onPress={() => console.log('Pressed')}>
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={styles.search}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
    );
};

export default () => {
    return <Nike />;
};

const styles = StyleSheet.create({
    menu: {
        width: 25,
        height: 25,
    },
    search: {
        width: 30,
        height: 30,
    },
});

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';

import {COLORS} from '../constants/index';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: '10%',
    },
};

const CameraButton = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.primary,
            }}>
            <Image
                source={require('../icons/camera.png')}
                resizeMode="contain"
                style={{
                    width: 23,
                    height: 23,
                }}
            />
        </View>
    );
};

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;

                    switch (route.name) {
                        case 'Home':
                            return (
                                <Image
                                    source={require('../icons/flash_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        case 'Box':
                            return (
                                <Image
                                    source={require('../icons/cube_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        case 'Camera':
                            return <CameraButton />;
                        case 'Search':
                            return (
                                <Image
                                    source={require('../icons/search_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        case 'Favourite':
                            return (
                                <Image
                                    source={require('../icons/heart_icon.png')}
                                    resizeMode="contain"
                                    style={{
                                        tintColor: tintColor,
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                    }
                },
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Box" component={Home} />
            <Tab.Screen name="Camera" component={Home} />
            <Tab.Screen name="Search" component={Home} />
            <Tab.Screen name="Favourite" component={Home} />
        </Tab.Navigator>
    );
};

export default Tabs;

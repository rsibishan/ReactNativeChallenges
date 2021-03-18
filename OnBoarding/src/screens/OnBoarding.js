/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    Animated,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {StatusBar} from 'expo-status-bar';

// constants
import {theme} from '../constants/index';

// theme
const {COLORS, FONTS, SIZES} = theme;

import onboarding1 from '../images/onboarding-1.png';
import onboarding2 from '../images/onboarding-2.png';
import onboarding3 from '../images/onboarding-3.png';

const onBoardings = [
    {
        title: "Let's Travel",
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
        img: onboarding1,
    },
    {
        title: 'Navigation',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
        img: onboarding2,
    },
    {
        title: 'Destination',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut',
        img: onboarding3,
    },
];

const OnBoarding = () => {
    const scrollX = new Animated.Value(0);

    // Render
    function renderContent() {
        return (
            <Animated.ScrollView
                horizontal
                pagingEnabled
                scrollEnabled
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false},
                )}>
                {onBoardings.map((item, index) => (
                    <View
                        //center
                        //bottom
                        key={`img-${index}`}
                        style={styles.imageAndTextContainer}>
                        <View
                            style={{
                                flex: 2,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            />
                        </View>
                        <View
                            style={{
                                position: 'absolute',
                                bottom: '10%',
                                left: 40,
                                right: 40,
                            }}>
                            <Text
                                style={{
                                    ...FONTS.h1,
                                    color: COLORS.gray,
                                    textAlign: 'center',
                                }}>
                                {item.title}
                            </Text>

                            <Text
                                style={{
                                    ...FONTS.body3,
                                    textAlign: 'center',
                                    marginTop: SIZES.base,
                                    color: COLORS.gray,
                                }}>
                                {item.description}
                            </Text>
                        </View>
                        {/* Button */}
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                console.log('Button on pressed');
                            }}>
                            <IconAntDesign
                                name="right"
                                color="#fff"
                                size={35}
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </Animated.ScrollView>
        );
    }

    function renderDots() {
        const dotPosition = Animated.divide(scrollX, SIZES.width);

        return (
            <View style={styles.dotsContainer}>
                {onBoardings.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: 'clamp',
                    });

                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [SIZES.base, 17, SIZES.base],
                        extrapolate: 'clamp',
                    });

                    return (
                        <Animated.View
                            key={`dot-${index}`}
                            opacity={opacity}
                            style={[
                                styles.dot,
                                {width: dotSize, height: dotSize},
                            ]}
                        />
                    );
                })}
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>{renderContent()}</View>
            <View style={styles.dotsRootContainer}>{renderDots()}</View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    imageAndTextContainer: {
        width: SIZES.width,
    },
    dotsRootContainer: {
        position: 'absolute',
        bottom: SIZES.height > 700 ? '20%' : '16%',
    },
    dotsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: SIZES.padding / 2,
        marginBottom: SIZES.padding * 3,
        height: SIZES.padding,
    },
    dot: {
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.blue,
        marginHorizontal: SIZES.radius / 2,
    },
    button: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 70,
        height: 60,
        paddingLeft: 20,
        justifyContent: 'center',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: COLORS.blue,
    },
});

export default OnBoarding;

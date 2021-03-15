import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../images/TeslaLogo.png')}
            />
            <Image style={styles.menu} source={require('../images/menu.png')} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    menu: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
});

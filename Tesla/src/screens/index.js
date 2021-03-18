import React from 'react';
import {StyleSheet, View} from 'react-native';
import CarsList from '../components/CardList';
import Header from '../components/Header';
import {StatusBar} from 'expo-status-bar';

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <CarsList />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

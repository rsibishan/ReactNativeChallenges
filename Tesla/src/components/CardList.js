import React from 'react';
import {View, StyleSheet, FlatList, Dimensions} from 'react-native';
import CarItem from './CardItem';

import cars from '../data/cars';

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarsList;

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
});

import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, TouchableOpacity} from 'react-native';
import Colors from "../constants/colors";
import Card from "../widgets/Card";

const CategoryGridTiles = props => {
    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={props.onSelect}>
            <Card style={styles.cardContainer} style={{...styles.container, ...{backgroundColor: props.color}}}>
                <Text style={styles.categoryTitle} numberOfLines={1} style={styles.headerTitle}>{props.title}</Text>
                <Text>{props.eta.toUpperCase()}</Text>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 20
    },
    categoryTitle: {
        fontFamily: 'open-sans-bold',
        fontSize: 12,
    },
    eta: {
        fontFamily: 'open-sans',
        fontSize: 10,
        color: Colors.deepPrimaryColor
    }
});

export default CategoryGridTiles;





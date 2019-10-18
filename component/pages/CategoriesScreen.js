import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity, Dimensions,
} from 'react-native';

import {CATEGORIES} from '../../assets/data/app-data';
import Card from "../widgets/Card";
import CategoryGridTiles from './CategoryGridTile'

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return <CategoryGridTiles
            title={itemData.item.title}
            eta={itemData.item.eta}
            onSelect={() => {
            props.navigation.navigate({
                routeName: 'WashScreen',
                params: {
                    categoryId: itemData.item.id
                }
            });
        }}/>;
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Wash Categories',
};

const styles = StyleSheet.create({
    eta: {
        color: '#CCC',
        fontSize: 10
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        height: 150
    },

    headerTitle: {
            // marginVertical: 10,
        fontFamily: 'open-sans-bold'
    }
});

export default CategoriesScreen;

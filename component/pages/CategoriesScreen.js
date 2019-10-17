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

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'WashScreen',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }}
            >
                <Card style={styles.cardContainer}>
                    <Text style={styles.headerTitle}>{itemData.item.title}</Text>
                    <Text style={styles.eta}>{itemData.item.eta}</Text>
                </Card>
            </TouchableOpacity>
        );
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
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    headerTitle: {
            // marginVertical: 10,
        fontFamily: 'open-sans-bold'
    }
});

export default CategoriesScreen;

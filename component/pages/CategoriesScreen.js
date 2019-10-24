import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity, Dimensions,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import {CATEGORIES} from '../../assets/data/app-data';
import Card from "../widgets/Card";
import CategoryGridTiles from './CategoryGridTile'
import HeaderButton from '../HeaderButton';

const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return <CategoryGridTiles
                title={itemData.item.title}
                eta={itemData.item.eta}
                image={itemData.item.image}
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
        />
    );
};

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Wash Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
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
    container: {
        marginTop: 20
    },
    headerTitle: {
            // marginVertical: 10,
        fontFamily: 'open-sans-bold'
    }
});

export default CategoriesScreen;

import React from 'react';
import {FlatList, StyleSheet, Platform} from 'react-native';
import {CATEGORIES} from "../../data/app-data";
import Container from "../../widgets/Container";
import HeaderButton from "../../widgets/HeaderButton";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import GridTiles from "../components/CridTiles";
import CustomHeaderButton from "../../widgets/CustomHeader"

const CategoryScreen = props => {

    const renderGridItem = (itemData, itemType) => {
        return <GridTiles
            title={itemData.item.title}
            eta={itemData.item.eta}
            image={itemData.item.image}
            total={itemData.item.total}
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
        <Container>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}/>
        </Container>
    );
};

CategoryScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Categories',
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
        ),
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Cart"
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => {
                    navData.navigation.navigate('Order');
                }}
            />
        </HeaderButtons>,
    };
};

const styles = StyleSheet.create({
});

export default CategoryScreen;

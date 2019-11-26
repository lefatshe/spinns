import React from 'react';
import {FlatList, StyleSheet, Platform} from 'react-native';
import {CATEGORIES} from "../../data/app-data";
import Container from "../../widgets/Container";
import HeaderButton from "../../widgets/HeaderButton";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import GridTiles from "../components/CridTiles";
import CustomHeaderButton from "../../widgets/CustomHeader"
import {useSelector} from "react-redux";

const CategoryScreen = props => {

    const Totals = useSelector(state => state.cart);
    console.log(Totals.Wash)

    const TotalInger = Totals.Wash;
    // console.log(Totals.Iron)
    // console.log(Totals.DryClean)
    // console.log(Totals.PremiumWash)

    // const washState = useSelector(state => state.cart.Wash)

    const renderGridItem = (itemData, itemType) => {
        let totalInCart = 0;

        if (itemData.item.title === 'Wash') {
             totalInCart = TotalInger;
        }

        // if (itemData.item.title === 'Iron') {
        //     totalInCart = useSelector(state => state.cart.Iron);
        // }
        //
        // if (itemData.item.title === 'DryClean') {
        //     totalInCart = useSelector(state => state.cart.DryClean);
        // }
        //
        // if (itemData.item.title === 'PremiumWash') {
        //     totalInCart = useSelector(state => state.cart.PremiumWash);
        // }

        return <GridTiles
            title={itemData.item.title}
            eta={itemData.item.eta}
            image={itemData.item.image}
            cartTotal={totalInCart}
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

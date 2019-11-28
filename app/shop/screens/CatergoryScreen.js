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
    // console.log(Totals.Wash)
    // console.log(Totals.Iron)
    // console.log(Totals.DryClean)
    // console.log(Totals.PremiumWash)
    // const washState = useSelector(state => state.cart.Wash)
    // const Totals = useSelector(state => state.cart);

    const totalWashState = useSelector(state => state.cart.Wash);
    const totalIronState = 0;
    const totalDryCleanState = 0;
    const totalPremiumState = 0;

    const renderGridItem = (itemData, itemType) => {
        let totalInCart = 0;

        // if (itemData.item.title === 'Wash') {
        //     totalInCart = totalWashState;
        // }
        //
        // if (itemData.item.title === 'Iron') {
        //     totalInCart = totalIronState;
        // }
        //
        // if (itemData.item.title === 'DryClean') {
        //     totalInCart = totalDryCleanState;
        // }
        //
        // if (itemData.item.title === 'PremiumWash') {
        //     totalInCart = totalPremiumState;
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
                        categoryId: itemData.item.id,
                        categoryTitle: itemData.item.title
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
        headerTitle: 'CATEGORIES',
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

const styles = StyleSheet.create({});

export default CategoryScreen;

import React from 'react';
import {FlatList, Platform, Text} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from "../components/ProductItem";
import CategoryScreen from "../../shop/screens/CatergoryScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../../widgets/HeaderButton";

import * as productsActions from '../../store/actions/products';

const ProductScreen = props => {
    const userProduct = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch();
    return <FlatList
        data={userProduct}
        keyExtractor={item => item.id}
        renderItem={itemData => <ProductItem
            title={itemData.item.title}
            price={itemData.item.price}
            category={itemData.item.categoryTitle}
            editProduct={() => {
            }}
            deleteProduct={() => {
                dispatch(productsActions.deleteProduct(itemData.item.id));
            }}
        />}
    />
}

ProductScreen.navigationOptions = navData => {
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
        )
    };
}

export default ProductScreen

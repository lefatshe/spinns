import React from 'react';
import {CATEGORIES, WASHES, TYPES} from '../../data/app-data';
import WashItems from "../components/WashItems";
import {useSelector} from 'react-redux'
import HeaderButton from "../../widgets/HeaderButton";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {Platform} from "react-native";

const WashScreen = props => {
    return <WashItems  navigation={props.navigation} />
};

WashScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Cart"
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => {
                    navigationData.navigation.navigate('Order');
                }}
            />
        </HeaderButtons>,
    };
};

export default WashScreen;

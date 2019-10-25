import React from 'react';
import {CATEGORIES, WASHES} from '../../assets/data/app-data';
import WashList from "./WashList";
import {View, Text, StyleSheet} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import createReactClass from 'create-react-class';

const CategoryWashScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedWashes = WASHES.filter( wash => wash.categoryIds.indexOf(catId) >= 0);
    const getType = WASHES.id;
    return <WashList listData={displayedWashes} navigation={props.navigation}/>;
};

CategoryWashScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    };
};

export default CategoryWashScreen;

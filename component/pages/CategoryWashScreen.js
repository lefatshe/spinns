import React from 'react';
import {CATEGORIES, WASHES, TYPES} from '../../assets/data/app-data';
import WashList from "./WashList";
import {View, Text, StyleSheet} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import createReactClass from 'create-react-class';
import MetroTabs from "./tabs/MetroTab";
import CategoryTypes from "./tabs/CategoryTypes";
import WashTabs from "./tabs/WashTabs";


const CategoryWashScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedWashes = WASHES.filter( wash => wash.categoryIds.indexOf(catId) >= 0);
    const washTypes = TYPES.filter( type => { return type});
    return <WashList listData={displayedWashes} listTypes={washTypes} navigation={props.navigation}/>
};

CategoryWashScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    // const washType = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    };
};

export default CategoryWashScreen;

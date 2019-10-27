import React from 'react';
import {CATEGORIES, WASHES, TYPES} from '../../assets/data/app-data';
import WashList from "./WashList";
import {View, Text, StyleSheet} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import createReactClass from 'create-react-class';
import MetroTabs from "./tabs/MetroTab";
import CategoryTypes from "./tabs/CategoryTypes";


const CategoryWashScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const displayedWashes = WASHES.filter( wash => wash.categoryIds.indexOf(catId) >= 0);
    const getType = WASHES.id;

    // return <WashList listData={displayedWashes} navigation={props.navigation}/>;
    return <MetroTabs
        screens={[
            { key: '1', title: 'top free', screen: <CategoryTypes /> },
            { key: '2', title: 'trending', screen: <CategoryTypes /> },
            { key: '3', title: 'top paid', screen: <CategoryTypes /> }
        ]}
    />
};

CategoryWashScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    };
};

export default CategoryWashScreen;

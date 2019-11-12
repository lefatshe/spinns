import React from 'react';
import {CATEGORIES, WASHES, TYPES} from '../../data/app-data';
import WashItems from "../components/WashItems";

import {useSelector} from 'react-redux'

const WashScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const washes = WASHES.filter( wash => wash.categoryIds.indexOf(catId) >= 0);

    const selectedWashes = useSelector(state => state.washes.filteredWashes);

    return <WashItems listData={washes} navigation={props.navigation} />
};

WashScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return {
        headerTitle: selectedCategory.title
    };
};

export default WashScreen;

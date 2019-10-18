import React from 'react';
import {WASHES} from '../assets/data/app-data';
import WashList from "./pages/WashList";

const FavoritesScreen = props => {
    const favWashes = WASHES.filter(wash => wash.id === 'w1' || wash.id === 'w2');
    return <WashList listData={favWashes} navigation={props.navigation}/>
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
};


export default FavoritesScreen;

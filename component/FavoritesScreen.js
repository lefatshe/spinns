import React from 'react';
import {WASHES} from '../assets/data/app-data';
import WashList from "./pages/WashList";
import ProfileScreen from "./ProfileScreen";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';
import { useSelector } from "react-redux";

const FavoritesScreen = props => {
    // const favWashes = WASHES.filter(wash => wash.id === 'w1' || wash.id === 'w2');
    const favWashes = useSelector(state => state.washes.favourites)
    return <WashList listData={favWashes} navigation={props.navigation}/>
};


FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
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
};


export default FavoritesScreen;

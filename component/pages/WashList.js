import React from 'react';
import {
    FlatList,
    StyleSheet,
    View, Text, Picker,
} from 'react-native';
import WashItem from "./WashItemList";
import Card from "../widgets/Card";
import WashType from "../WashType";
import MetroTabs from "./tabs/MetroTab";
import CategoryTypes from "./tabs/CategoryTypes";
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Headgear from "./types/headgear";
import {WASHES} from "../../assets/data/app-data";
import Tops from "./types/tops";
import WashTypes from "./types/washtype";

const WashListing = props => {

    const catId = props.navigation.getParam('categoryId');

    const typeHeadgear = WASHES.filter(wash => wash.unit === 'Headgear' && wash.categoryIds.indexOf(catId) >= 0 );
    const typeTops = WASHES.filter(wash => wash.unit === 'Tops' && wash.categoryIds.indexOf(catId) >= 0 );
    const typeFullBodyWear = WASHES.filter(wash => wash.unit === 'Full Body Wear' && wash.categoryIds.indexOf(catId) >= 0 );
    const typeOuterwear = WASHES.filter(wash => wash.unit === 'Outerwear' && wash.categoryIds.indexOf(catId) >= 0 );
    const typeWomenLingerie = WASHES.filter(wash => wash.unit === 'Women’s Lingerie' && wash.categoryIds.indexOf(catId) >= 0 );
    const typeFootwear = WASHES.filter(wash => wash.unit === 'Foot wear' && wash.categoryIds.indexOf(catId) >= 0 );
    const typeMenUndergarments = WASHES.filter(wash => wash.unit === 'Men’s Undergarments' && wash.categoryIds.indexOf(catId) >= 0 );

    return<MetroTabs
                screens={[
                    { key: 't1', title: 'Headgear', screen: <WashTypes listData={typeHeadgear} /> },
                    { key: 't2', title: 'Tops', screen: <WashTypes listData={typeTops} /> },
                    { key: 't3', title: 'Full Body Wear', screen: <WashTypes listData={typeFullBodyWear} /> },
                    { key: 't4', title: 'Outerwear', screen: <WashTypes listData={typeOuterwear} /> },
                    { key: 't5', title: 'Women’s Lingerie', screen: <WashTypes listData={typeWomenLingerie} /> },
                    { key: 't6', title: 'Foot wear', screen: <WashTypes listData={typeFootwear} /> },
                    { key: 't7', title: 'Men’s Undergarments', screen: <WashTypes listData={typeMenUndergarments} /> },
                ]}
            />
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    select: {
        // flex: 1,
        // overflow: 'hidden'
    }
});

export default WashListing;

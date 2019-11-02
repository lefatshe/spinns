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

    const _typeHeadgear = WASHES.filter(wash => wash.unit === 'Headgear' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeTops = WASHES.filter(wash => wash.unit === 'Tops' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeFullBodyWear = WASHES.filter(wash => wash.unit === 'Full Body Wear' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeOuterwear = WASHES.filter(wash => wash.unit === 'Outerwear' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeWomenLingerie = WASHES.filter(wash => wash.unit === 'Women’s Lingerie' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeFootwear = WASHES.filter(wash => wash.unit === 'Foot wear' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeMenUndergarments = WASHES.filter(wash => wash.unit === 'Men’s Undergarments' && wash.categoryIds.indexOf(catId) >= 0 );

    return<MetroTabs
                screens={[
                    { key: 't1', title: 'Headgear', screen: <WashTypes listData={_typeHeadgear} /> },
                    { key: 't2', title: 'Tops', screen: <WashTypes listData={_typeTops} /> },
                    { key: 't3', title: 'Full Body Wear', screen: <WashTypes listData={_typeFullBodyWear} /> },
                    { key: 't4', title: 'Outerwear', screen: <WashTypes listData={_typeOuterwear} /> },
                    { key: 't5', title: 'Women’s Lingerie', screen: <WashTypes listData={_typeWomenLingerie} /> },
                    { key: 't6', title: 'Foot wear', screen: <WashTypes listData={_typeFootwear} /> },
                    { key: 't7', title: 'Men’s Undergarments', screen: <WashTypes listData={_typeMenUndergarments} /> },
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

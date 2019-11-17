import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';
import {WASHES} from "../../data/app-data";
import Card from "../../widgets/Card";
import ScrollTabs from "./ScrollTabs";
import WashType from "./WashType";


const WashItems = props => {
    const catId = props.navigation.getParam('categoryId');
    const catTitle = props.navigation.getParam('categoryTitle');

    const _typeHeadgear = WASHES.filter(wash => wash.unit === 'Headgear' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeTops = WASHES.filter(wash => wash.unit === 'Tops' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeFullBodyWear = WASHES.filter(wash => wash.unit === 'Full Body Wear' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeOuterwear = WASHES.filter(wash => wash.unit === 'Outerwear' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeWomenLingerie = WASHES.filter(wash => wash.unit === 'Women’s Lingerie' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeFootwear = WASHES.filter(wash => wash.unit === 'Foot wear' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeMenUndergarments = WASHES.filter(wash => wash.unit === 'Men’s Undergarments' && wash.categoryIds.indexOf(catId) >= 0 );


    return <ScrollTabs
        screens={[
            { key: 't1', title: 'Headgear', screen: <WashType listData={_typeHeadgear} categoryID={catId}/> },
            { key: 't2', title: 'Tops', screen: <WashType listData={_typeTops} categoryID={catId} /> },
            { key: 't3', title: 'Full Body Wear', screen: <WashType listData={_typeFullBodyWear} categoryID={catId} /> },
            { key: 't4', title: 'Outerwear', screen: <WashType listData={_typeOuterwear} categoryID={catId} /> },
            { key: 't5', title: 'Women’s Lingerie', screen: <WashType listData={_typeWomenLingerie} categoryID={catId} /> },
            { key: 't6', title: 'Foot wear', screen: <WashType listData={_typeFootwear} categoryID={catId} /> },
            { key: 't7', title: 'Men’s Undergarments', screen: <WashType listData={_typeMenUndergarments} categoryID={catId} /> }

        ]}
    />
};


const styles = StyleSheet.create({
});

export default WashItems;

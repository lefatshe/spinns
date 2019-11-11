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

    const _typeHeadgear = WASHES.filter(wash => wash.unit === 'Headgear' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeTops = WASHES.filter(wash => wash.unit === 'Tops' && wash.categoryIds.indexOf(catId) >= 0 );
    const _typeFullBodyWear = WASHES.filter(wash => wash.unit === 'Full Body Wear' && wash.categoryIds.indexOf(catId) >= 0 );

    console.log(_typeHeadgear)

    return <ScrollTabs
        screens={[
            { key: 't1', title: 'Headgear', screen: <WashType listData={_typeHeadgear} /> },
            { key: 't2', title: 'Tops', screen: <WashType listData={_typeTops} /> },
            { key: 't3', title: 'Full Body Wear', screen: <WashType listData={_typeFullBodyWear} /> },
        ]}
    />
};


const styles = StyleSheet.create({
});

export default WashItems;

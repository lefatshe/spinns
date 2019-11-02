import React from 'react';
import {FlatList, Text, Platform} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {ORDERS} from "../../data/app-data";
import HeaderButton from '../components/HeaderButton';
import OrderList from "../components/OrderList";


const OrdersScreen = props => {

    const prepareOrderData = (itemData, itemType) => {
        return <OrderList
            id={itemData.item.id}
            label={itemData.item.label}
            keys={itemData.item.keys}/>;
    };

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={ORDERS}
            renderItem={prepareOrderData}
        />
    );
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Order'
    };
};

export default OrdersScreen;

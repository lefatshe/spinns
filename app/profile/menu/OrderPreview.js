import React from 'react';
import { FlatList, Text, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from "../../shop/components/OrderItem";
import WashType from "../../shop/components/WashType";
import ScrollTabs from "../../shop/components/ScrollTabs";
import OrderType from "../../shop/components/OrderType";


const OrdersPrev = props => {
    const orders = useSelector(state => state.orders.orders);
    const pastOrders = useSelector(state => state.orders.pastOrders);
    // console.log(orders)

  return (
      <ScrollTabs
          screens={[
              { key: 's1', title: 'Current', screen: <OrderType listData={orders} title={'Current'} /> },
              { key: 's2', title: 'Past', screen: <OrderType listData={pastOrders}  title={'Past'} /> },
              { key: 's3', title: 'Scheduled', screen: <OrderType listData={pastOrders}  title={'Scheduled'} /> }
          ]}
      />
  );
};

export default OrdersPrev;

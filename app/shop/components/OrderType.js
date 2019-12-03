import React from 'react';
import {
    FlatList,
    View,
    StyleSheet, Text, Button
} from 'react-native';
import WashItem from "./WashItem";
import Container from "../../widgets/Container";
import Footer from "../../widgets/FooterStick";
import Card from "../../widgets/Card";
import OrderItem from "./OrderItem";

const OrderType = props => {

    // console.log(props.type)

    const renderOrderItem = itemData => {
        return <Text> {itemData.item.date} </Text>;
    };

    return <Container>
        <View>
            {props.listData.length !== 0 ? (
                <FlatList
                    data={props.listData}
                    keyExtractor={item => item.id}
                    renderItem={itemData => (
                        <OrderItem
                            amount={itemData.item.totalAmount}
                            date={itemData.item.readableDate}
                            items={itemData.item.items}
                        />
                    )}
                />
            ) : (
                <Text> No {props.title} order's </Text>
            )}
        </View>
    </Container> ;
};

const styles = StyleSheet.create({});

export default OrderType;

import React from 'react';
import {
    FlatList,
    View,
    StyleSheet, Text, Button
} from 'react-native';
import WashItem from "./WashList";
import Container from "../../widgets/Container";
import Footer from "../../widgets/FooterStick";
import Card from "../../widgets/Card";

const WashType = props => {

    const renderWashItem = itemData => {
        return <WashItem title={itemData.item.title}/>;
    };

    return <Container>
        <FlatList
            data={props.listData}
            keyExtractor={(item, index) => item.id}
            renderItem={renderWashItem}/>
        <Card>
            <Text> Total </Text>
            <Button title="Add Basket"  />
        </Card>
    </Container>;
};

const styles = StyleSheet.create({});

export default WashType;

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

const WashType = props => {

    const renderWashItem = itemData => {
        return <WashItem id={itemData.item.id} title={itemData.item.title} categoryID={props.categoryID} />;
    };

    return <Container>
        <View>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderWashItem}/>
        </View>
    </Container> ;
};

const styles = StyleSheet.create({});

export default WashType;

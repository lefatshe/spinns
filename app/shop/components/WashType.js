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

    // console.log(props.type)

    const renderWashItem = itemData => {
        return <WashItem id={itemData.item.id} title={itemData.item.title} categoryID={props.categoryID} />;
    };

    return <Container>
        <View>
            {props.listData.length !== 0 ? (
                <FlatList
                    data={props.listData}
                    keyExtractor={(item, index) => item.id}
                    renderItem={renderWashItem}/>
            ) : (
                <Text> 0 {props.type} in {props.categoryTitle} </Text>
            )}

        </View>
    </Container> ;
};

const styles = StyleSheet.create({});

export default WashType;

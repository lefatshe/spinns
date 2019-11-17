import React, {useState} from 'react';
import {FlatList, Text, View, Button, ScrollView, StyleSheet} from 'react-native';
import {ORDERS} from "../data/app-data";
import Container from "../widgets/Container";
import TitleText from "../widgets/TitleText";
import Footer from "../widgets/FooterStick";
import Colors from '../theme/constants/Colors';

const OrdersScreen = props => {

    let isSelect = false;
    let selectedClass;

    const renderOrder = itemData => {

        const renderItem = (data, arr, selectedClass) => {
            isSelect = arr[0] === data.item;
            selectedClass = isSelect ? styles.selected : styles.list;
            return <Text style={[styles.list, selectedClass]} onPress={(item) => item}> {data.item} </Text>
            // let update = (item, arr) => {
            //     isSelect = arr.filter( val => val.indexOf(item) >= 0 );
            //     selectedClass = isSelect ? styles.selected : styles.list;
            //     console.log('Selected', isSelect.toString())
            // }
        };

        return (
            <View>
                <TitleText> {itemData.item.title} </TitleText>
                <View style={styles.overlay}>
                    <FlatList keyExtractor={item => item.toString()}
                              extraData={itemData.item}
                              data={itemData.item.keys}
                              renderItem={(item, arr) => renderItem(item, itemData.item.keys, selectedClass = itemData.item.keys[0])}/>
                </View>
            </View>
        );
    };

    return (
        <ScrollView>
            <Container>
                <FlatList keyExtractor={item => item.id} data={ORDERS} renderItem={renderOrder}/>
                <Footer>
                    <Button title="Category" onPress={() => {props.navigation.navigate({routeName: 'CategoryScreen'});}}  />
                </Footer>
            </Container>
        </ScrollView>
    );
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Order'
    };
};

const styles = StyleSheet.create({
    list: {
        padding: 5,
        borderRadius: 4
    },
    overlay: {
        padding: 5,
        backgroundColor: Colors.settleGray,
    },
    selected: {
        borderRadius: 4,
        color: 'white',
        backgroundColor: Colors.sameBlue,
    }
});

export default OrdersScreen;

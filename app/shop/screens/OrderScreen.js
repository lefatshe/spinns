import React from 'react';
import {FlatList, Text, View, Button, ScrollView, StyleSheet} from 'react-native';
import {ORDERS} from "../../data/app-data";
import Container from "../../widgets/Container";
import TitleText from "../../widgets/TitleText";
import Footer from "../../widgets/FooterStick";
import Colors from '../../theme/constants/Colors';

const OrdersScreen = props => {

    let isSelect = false;
    let selectedClass;

    const renderOrder = itemData => {

        const renderItem = (data, arr, selectedClass) => {
            isSelect = arr[0] === data.item;
            selectedClass = isSelect ? styles.selected : styles.list;
            return <Text style={[styles.list, selectedClass]}> {data.item} </Text>
        };

        return (
            <View>
                <TitleText> {itemData.item.title} </TitleText>

                <View>
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
                    <Button title="Proceed to Category"/>
                </Footer>
            </Container>
        </ScrollView>
    );
};

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Order'
    };
};

const styles = StyleSheet.create({
    list: {
        padding: 7
    },
    selected: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: Colors.sameBlue,
    }
});

export default OrdersScreen;

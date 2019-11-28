import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Card from "../../widgets/Card";
import Colors from "../../theme/constants/Colors";
import TitleText from "../../widgets/TitleText";
// https://ionicons.com/cheatsheet.html

const CartItem = props => {
    return (
        <View style={styles.container}>
            <View style={styles.viewContainer}>
                <View style={styles.item}>
                    <Text style={styles.title} numberOfLines={1}> {props.title} </Text>
                    <Text style={styles.days}> {props.quantity} * {props.price} = R {props.total.toFixed(2)}  </Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.valCount}> {props.quantity} </Text>
                </View>
                <View>
                    <Text style={styles.mainText}> {props.categoryTitle} </Text>
                </View>
                <View style={styles.totalItem}>
                    <View style={styles.itemData}>
                        <View style={styles.itemBtm}>
                            <TouchableOpacity style={styles.deleteButton} onPress={props.decrement}>
                                <Ionicons name={Platform.OS === 'android' ? 'md-return-left' : 'ios-return-left'}
                                          size={23}
                                          color="#4E8AF1"/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemBtm}>
                            <TouchableOpacity style={styles.deleteButton} onPress={props.increment}>
                                <Ionicons name={Platform.OS === 'android' ? 'md-return-right' : 'ios-return-right'}
                                          size={23}
                                          color="#4E8AF1"/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.itemBtm}>
                            <TouchableOpacity style={styles.deleteButton} onPress={props.onRemove}>
                                <Ionicons name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                                          size={23}
                                          color="#293064"/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    itemBtm: {

        width: '30%',
        marginTop: 20,
        margin: 5,
    },
    containerBottom: {
        width: '100%',
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    deleteButton: {
        marginLeft: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    totalItem: {
        color: Colors.deepGray
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderColor: Colors.settleGray
    },
    viewContainer: {
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        width: '50%' // is 50% of container width
    },
    valCount: {
        textAlign: 'right',
        fontSize: 22,
        color: Colors.sameBlue,
        fontFamily: 'open-sans-bold'
    },
    title: {
        color: Colors.deepPrimaryColor,
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    },
    days: {
        color: Colors.deepGray,
    },
    quantity: {
        fontFamily: 'open-sans',
        color: '#888',
        fontSize: 16
    },
    mainText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    }
});

export default CartItem;

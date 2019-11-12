import React from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from "../../theme/constants/Colors"
import CartItem from "../components/Cartitem";
import HeaderButton from "../../widgets/HeaderButton";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

const OrderScreen = props => {

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);

    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                sum: state.cart.items[key].sum
            })
        }
        return transformedCartItems;
        return
    });

    return (
        <View style={styles.container}>

            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData => (
                    <CartItem
                        quantity={itemData.item.quantity}
                        title={itemData.item.productTitle}
                        amount={itemData.item.sum}
                        onRemove={() => {
                        }}
                    />
                )}
            />

            <View style={styles.bottom}>
                <View style={styles.button}>
                    <View style={styles.summary}>
                        <Text style={styles.summaryText}>
                            <Text style={styles.amount}>R {cartTotalAmount.toFixed(2)}</Text>
                        </Text>
                        <Button
                            color={Colors.sameBlue}
                            title="Place order"
                            disabled={cartItems.length === 0}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

OrderScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Orders',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        marginTop: 50
    },
    heading: {
        marginTop: 40
    },
    text: {
        marginHorizontal: 8,
        marginVertical: 10
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: 10,
        width: '90%'
    },
    screen: {
        marginTop: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginBottom: 20,
        padding: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        // borderRadius: 10,
        backgroundColor: 'white'
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: Colors.sameBlue
    }
});

export default OrderScreen;

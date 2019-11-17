import React from 'react';
import {SafeAreaView, View, FlatList, StyleSheet, Text, Button, Platform} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Colors from "../../theme/constants/Colors"
import CartItem from "../components/Cartitem";
import HeaderButton from "../../widgets/HeaderButton";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import Container from "../../widgets/Container";

const OrderScreen = props => {

    const cartTotalAmount = useSelector(state => state.cart.totalAmount);

    const cartItems = useSelector(state => {
        const transformedCartItems = [];

        for (const key in state.cart.items) {
            transformedCartItems.push({
                id: key,
                title: state.cart.items[key].title,
                price: state.cart.items[key].price,
                quantity: state.cart.items[key].quantity,
                total: state.cart.items[key].total,
                categoryTitle: state.cart.items[key].categoryTitle,
            });
        }
        return transformedCartItems.sort((a, b) =>
            a.id > b.id ? 1 : -1
        );
    });
    const dispatch = useDispatch();
    console.log(cartItems)

    return (
        <View style={styles.container}>

            <Container>

                <FlatList
                    data={cartItems}
                    keyExtractor={item => item.id}
                    renderItem={itemData => (
                        <CartItem
                            id={itemData.item.id}
                            title={itemData.item.title}
                            price={itemData.item.price}
                            quantity={itemData.item.quantity}
                            total={itemData.item.total}
                            categoryTitle={itemData.item.categoryTitle}
                            // deletable
                            // onRemove={() => {
                            //     dispatch(cartActions.removeFromCart(itemData.item.productId));
                            // }}
                        />
                    )}
                />

            </Container>


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
        ),
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Cart"
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-shirt'}
                onPress={() => {
                    navData.navigation.navigate('Category');
                }}
            />
        </HeaderButtons>,
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

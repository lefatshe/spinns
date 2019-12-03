import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import CartItem from './Cartitem';
import Colors from '../../theme/constants/Colors';
import TitleText from "../../widgets/TitleText";

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);
    console.log(props)

    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <TitleText>R {props.amount.toFixed(2)}</TitleText>
            </View>
            <Text style={styles.date}>{props.date}</Text>
            <Button color={Colors.primary}
                    title={showDetails ? 'Hide Details' : 'Show Details'}
                    onPress={() => {
                        setShowDetails(prevState => !prevState);
                    }}/>
            {showDetails && (
                <View style={styles.detailItems}>
                    {props.items.map(cartItem => (
                        <CartItem
                            key={cartItem.id}
                            quantity={cartItem.quantity}
                            total={cartItem.total}
                            title={cartItem.title}
                            price={cartItem.price}
                            categoryTitle={cartItem.categoryTitle}
                        />
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    date: {
        fontSize: 16,
        fontFamily: 'open-sans',
        color: '#888'
    },
    detailItems: {
        width: '100%'
    }
});

export default OrderItem;

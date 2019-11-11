import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../widgets/HeaderButton';

const PaymentScreen = props => {
    return (
        <View>
            <Text> Payments </Text>
        </View>
    );
};

PaymentScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Profile',
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
});

export default PaymentScreen;

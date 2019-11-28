import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import HeaderButton from "../widgets/HeaderButton";
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {Platform} from "react-native";
import {MENU} from "../data/app-data";
import WashScreen from "../shop/screens/WashScreen";
import TitleText from "../widgets/TitleText";

const MenuScreen = props => {
    const PageTitle = props.navigation.getParam('menuItem');
    // return <View style={styles.screen}>
    //     <TitleText>{PageTitle}</TitleText>
    // </View>
    return <View>
        {PageTitle === 'Orders' ? (
            <Text> Style here </Text>
        ) : (
            <View style={styles.headerWrapper}>
                <TitleText style={styles.header}> {PageTitle} </TitleText>
            </View>
        )}
    </View>
};

MenuScreen.navigationOptions = navigationData => {
    const menuItem = navigationData.navigation.getParam('menuItem');
    // console.log(menuItem);

    return {
        headerTitle: menuItem.toUpperCase(),
        // headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
        //     <Item
        //         title="Cart"
        //         iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        //         onPress={() => {
        //             navigationData.navigation.navigate('Order');
        //         }}
        //     />
        // </HeaderButtons>,
    };
}

const styles = StyleSheet.create({
    headerWrapper: {
        borderBottomColor: '#CCC',
        borderBottomWidth: 1,
        marginBottom: 30,
        padding: 10
    },
    header: {
        alignSelf: 'auto',
    },
});

export default MenuScreen;

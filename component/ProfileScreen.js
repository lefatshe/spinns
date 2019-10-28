import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from './HeaderButton';
import Colors from "./constants/colors";

const ProfileScreen = props => {
    return (
        <View style={styles.screen}>
            <Image source={require('../assets/images/spinns-logo-mobile.jpg')} style={styles.image}
                   resizeMode="center"/>
        </View>
    );
};

ProfileScreen.navigationOptions = navData => {
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
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.cleanYellow
    },
    image: {
        width: '100%',
        height: '100%'
    },

});

export default ProfileScreen;

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../widgets/HeaderButton';

const PrefScreen = props => {
    return (
        <View>
            <Text> PrefScreen </Text>
        </View>
    );
};

ProfileScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Preferences',
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

export default PrefScreen;

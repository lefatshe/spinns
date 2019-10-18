import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {WASHES} from "../../assets/data/app-data";
import HeaderButton from '../HeaderButton'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

const WashDetails = props => {
    const washId = props.navigation.getParam('washId');

    const selectedWash = WASHES.find(wash => wash.id === washId);

    return (
        <View style={styles.screen}>
            <Text>{selectedWash.title}</Text>
            <Button
                title="Go Back to Categories"
                onPress={() => {
                    props.navigation.navigate({routeName: 'Categories'})
                }}
            />
        </View>
    );
};
// https://expo.github.io/vector-icons/
WashDetails.navigationOptions = navigationData => {
    const washId = navigationData.navigation.getParam('washId');
    const selectedWash = WASHES.find(wash => wash.id === washId);
    return {
        headerTitle: selectedWash.title,
        headerRight:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Mark as favorite!');
                    }}
                />
            </HeaderButtons>

    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WashDetails;

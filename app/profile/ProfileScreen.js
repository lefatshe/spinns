import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../widgets/HeaderButton';
import {USER, MENU} from "../data/app-data";
import Container from "../widgets/Container";
import TitleText from "../widgets/TitleText";
import Card from "../widgets/Card";

const ProfileScreen = props => {

    const renderProfile = (itemData) => {
        return <View>
            <TitleText>{itemData.item.title}</TitleText>
            <Text>{itemData.item.address}</Text>
        </View>;
    };

    const renderMenu = (itemData) => {
        return <Card>
            <Text>{itemData.item.title}</Text>
        </Card>;
    };

    return (
        <Container>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={USER}
                renderItem={renderProfile}/>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={MENU}
                renderItem={renderMenu}/>
        </Container>
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

const styles = StyleSheet.create({});

export default ProfileScreen;

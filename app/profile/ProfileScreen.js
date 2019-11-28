import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, Platform, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../widgets/HeaderButton';
import {USER, MENU} from "../data/app-data";
import Container from "../widgets/Container";
import TitleText from "../widgets/TitleText";
import Card from "../widgets/Card";
import GridTiles from "../shop/components/CridTiles";
import MenuTiles from "../shop/components/MenuTiles";
import {Ionicons} from "@expo/vector-icons";

const ProfileScreen = props => {

    const renderProfile = (itemData) => {
        // return <View style={styles.content}>
        //     <Text>
        //         <Text>Welcome </Text>
        //         <Text>{" "}</Text>
        //         <Text style={{fontWeight: 'bold'}}>
        //             {itemData.item.title}
        //         </Text>
        //     </Text>
        // </View>;

        let avatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQEA9T_HI732QySmJepLFzq7JrcjGBkBFLvWAIgwY1jAY2CQeAb'

        return <View style={styles.headerContainer}>
            <View style={styles.userRow}>
                <Image
                    style={styles.userImage}
                    source={{
                        uri: avatar,
                    }}
                />
                <View style={styles.userNameRow}>
                    <Text style={styles.userNameText}>Sechaba Mothobi</Text>
                </View>
                <View style={styles.userBioRow}>
                    <Text style={styles.userBioText}>{itemData.item.address}</Text>
                </View>
            </View>
            <View style={styles.socialRow}>

                <View style={styles.socialIcon}>
                    <Ionicons name={Platform.OS === 'android' ? 'md-settings' : 'ios-settings'}
                              size={23}
                              color="#4E8AF1"/>
                </View>

            </View>
        </View>
    };

    const renderMenu = (itemData) => {
        return <MenuTiles
            title={itemData.item.title}
            onSelect={() => {
                props.navigation.navigate({
                    routeName: 'Menu',
                    params: {
                        menuItem: itemData.item.title
                    }
                });
            }}/>;;
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

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        paddingTop: 20,
        backgroundColor: "#ecf0f1"
    },
    cardContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 10,
        // marginTop: 45,
    },
    indicatorTab: {
        backgroundColor: 'transparent',
    },
    scroll: {
        backgroundColor: '#FFF',
    },
    sceneContainer: {
        marginTop: 10,
    },
    socialIcon: {
        marginLeft: 14,
        marginRight: 14,
    },
    socialRow: {
        flexDirection: 'row',
    },
    tabBar: {
        backgroundColor: '#EEE',
    },
    tabContainer: {
        flex: 1,
        marginBottom: 12,
    },
    tabLabelNumber: {
        color: 'gray',
        fontSize: 12.5,
        textAlign: 'center',
    },
    tabLabelText: {
        color: 'black',
        fontSize: 22.5,
        fontWeight: '600',
        textAlign: 'center',
    },
    userBioRow: {
        marginLeft: 40,
        marginRight: 40,
    },
    userBioText: {
        color: 'gray',
        fontSize: 13.5,
        textAlign: 'center',
    },
    userImage: {
        borderRadius: 60,
        height: 120,
        marginBottom: 10,
        width: 120,
    },
    userNameRow: {
        marginBottom: 10,
    },
    userNameText: {
        color: '#5B5A5A',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    userRow: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 12,
    },
});

export default ProfileScreen;

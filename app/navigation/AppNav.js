import React from "react";
import {Platform} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation'
import {Ionicons} from '@expo/vector-icons';
import Colors from "../theme/constants/Colors"
import CategoryScreen from "../shop/screens/CatergoryScreen";
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import OrderScreen from "../shop/screens/OrderScreen";
import ProfileScreen from "../profile/ProfileScreen";
import Payments from "../profile/PaymentsScreen";
import WashScreen from "../shop/screens/WashScreen";

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: ''
};
const OrderNavigator = createStackNavigator({
    CategoryScreen: CategoryScreen,
    WashScreen: WashScreen
});

const tabScreenConfig = {
    Washes: {
        screen: OrderNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons name="ios-shirt" md="md-sync" size={25} color={tabInfo.tintColor}/>
                );
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Orders: {
        screen: OrderScreen,
        navigationOptions: {
            tabBarLabel: 'Order',
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons name="ios-calendar" size={25} color={tabInfo.tintColor}/>
                );
            },
            tabBarColor: Colors.primaryColor
        }
    },
};
const ProfileNavigator = createStackNavigator(
    {
        Profile: ProfileScreen,
        Payment: Payments
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);
const helpNavigator = createStackNavigator(
    {
        Profile: ProfileScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);
const SiteNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.sameBlue
            }
        })
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                tabStyle: Colors.sameBlue,
                activeTintColor: Colors.sameBlue
            }
        });

// Main encapsulated navigation stack
const MainNavigator = createDrawerNavigator({
    Washes: {
        screen: SiteNavigator,
        navigationOptions: {
            drawerLabel: 'Spinns Laundry'
        }
    },
    Profile: ProfileNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.deepPrimaryColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});


export default createAppContainer(MainNavigator);

import {Platform} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation'
import SignUpPage from '../pages/SignUp';
import SignInPage from '../pages/SignIn';
import WelcomePage from "../pages/Welcome";
import StartApp from '../pages/Start'
import CategoriesScreen from "../pages/CategoriesScreen";
import CategoryWashScreen from "../pages/CategoryWashScreen"

import Colors from '../constants/colors';
import WashDetails from "../pages/WashDetails";
import {Ionicons} from '@expo/vector-icons';
import FavoritesScreen from "../FavoritesScreen";
import React from "react";
import ProfileScreen from "../ProfileScreen";
import OrderScreen from "../OrdersScreen";

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: ''
};


const WahesNavigator = createStackNavigator(
    {
        // WelcomePage: WelcomePage,
        Categories: {
            screen: CategoriesScreen
        },
        WashScreen: {
            screen: CategoryWashScreen
        },
        Start: StartApp,
        SignUp: SignUpPage,
        SignIn: SignInPage,
        WashDetail: WashDetails
    },
    {
        // initialRouteName: 'WelcomePage',
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        WashDetail: WashDetails
    },
    {
        // initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const tabScreenConfig = {
    Washes: {
        screen: WahesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons name="ios-shirt" md="md-sync" size={25} color={tabInfo.tintColor}/>
                );
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons name="ios-star" size={25} color={tabInfo.tintColor}/>
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
    // Profile: {
    //     screen: ProfileScreen,
    //     navigationOptions: {
    //         tabBarLabel: 'Profile',
    //         tabBarIcon: tabInfo => {
    //             return (
    //                 <Ionicons name="ios-person" size={25} color={tabInfo.tintColor}/>
    //             );
    //         },
    //         tabBarColor: Colors.primaryColor
    //     }
    // }
};


const SpinnsSiteNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        })
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.accentColor
            }
        });

const ProfileNavigator = createStackNavigator(
    {
        Profile: ProfileScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

// Main encapsulated navigation stack
const MainNavigator = createDrawerNavigator({
    Washes: {
        screen: SpinnsSiteNavigator,
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

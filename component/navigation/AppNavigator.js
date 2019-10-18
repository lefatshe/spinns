import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, } from 'react-navigation';

import SignUpPage from '../pages/SignUp';
import SignInPage from '../pages/SignIn';
import WelcomePage from "../pages/Welcome";
import StartApp from '../pages/Start'
import CategoriesScreen from "../pages/CategoriesScreen";
import CategoryWashScreen from "../pages/CategoryWashScreen"

import Colors from '../constants/colors';
import WashDetails from "../pages/WashDetails";
import { Ionicons } from '@expo/vector-icons';
import FavoritesScreen from "../FavoritesScreen";
import React from "react";
import ProfileScreen from "../ProfileScreen";
import OrderScreen from "../OrdersScreen";

const WahesNavigator = createStackNavigator(
    {
        WelcomePage: WelcomePage,
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
        initialRouteName: 'WelcomePage',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor:
                Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            headerTitle: ''
        }
    }
);

const SpinnsSiteNavigator = createBottomTabNavigator(
    {
        Washes: {
            screen: WahesNavigator,
            navigationOptions: {
                tabBarIcon: tabInfo => {
                    return (
                        <Ionicons name="ios-shirt" md="md-sync" size={25} color={tabInfo.tintColor}/>
                    );
                }
            }
        },
        Favorites: {
            screen: FavoritesScreen,
            navigationOptions: {
                tabBarLabel: 'Favorites',
                tabBarIcon: tabInfo => {
                    return (
                        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
                    );
                }
            }
        },
        Orders: {
            screen: OrderScreen,
            navigationOptions: {
                tabBarLabel: 'Order',
                tabBarIcon: tabInfo => {
                    return (
                        <Ionicons name="ios-calendar" size={25} color={tabInfo.tintColor} />
                    );
                }
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: tabInfo => {
                    return (
                        <Ionicons name="ios-person" size={25} color={tabInfo.tintColor} />
                    );
                }
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.primaryColor
        }
    }
);



export default createAppContainer(SpinnsSiteNavigator);

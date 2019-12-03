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
import MenuScreen from "../profile/menuScreen";
import OrdersScreen from "../profile/OrderScreen";
import ProductScreen from "../admin/screens/ProductsScreen";

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        // fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        // fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};


const WashesNavigator = createStackNavigator(
    {
            Category: CategoryScreen,
            WashScreen: WashScreen,
            Order: OrderScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons
                    name={Platform.OS === 'android' ? 'md-shirt' : 'ios-shirt'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const OrdersNavigator = createStackNavigator({
    OrderScreen: OrderScreen
});
const tabScreenConfig = {
    Washes: {
        screen: WashesNavigator,
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
        screen: OrdersNavigator,
        navigationOptions: {
            tabBarLabel: 'Order',
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons name="ios-basket" size={25} color={tabInfo.tintColor}/>
                );
            },
            tabBarColor: Colors.primaryColor
        }
    },
};
const ProfileNavigator = createStackNavigator(
    {
         Profile: ProfileScreen,
         Order: OrdersScreen,
         Menu: MenuScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons
                    name={Platform.OS === 'android' ? 'md-contact' : 'ios-contact'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const AdminNavigator = createStackNavigator(
    {
        Product: ProductScreen
    },
    {
        navigationOptions: {
            drawerIcon: drawerConfig => (
                <Ionicons
                    name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                    size={23}
                    color={drawerConfig.tintColor}
                />
            )
        },
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
                activeTintColor: Colors.sameBlue,
                tabBarVisible: false
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

const ShopNavigator = createDrawerNavigator(
    {
        Washes: WashesNavigator,
        Profile: ProfileNavigator,
        Admin: AdminNavigator
    }, {
        contentOptions: {
            activeTintColor: Colors.deepPrimaryColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
);

export default createAppContainer(ShopNavigator);

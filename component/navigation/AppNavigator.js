import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignUpPage from '../pages/SignUp';
import SignInPage from '../pages/SignIn';
import WelcomePage from "../pages/Welcome";
import StartApp from '../pages/Start'
import CategoriesScreen from "../pages/CategoriesScreen";
import CategoryWashScreen from "../pages/CategoryWashScreen"

import Colors from '../constants/colors';
import WashDetailScreen from "../pages/CategoryDetailScreen";

const AppNavigator = createStackNavigator(
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
        WashDetail: WashDetailScreen
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

export default createAppContainer(AppNavigator);

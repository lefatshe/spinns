import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignUpPage from '../pages/SignUp';
import SignInPage from '../pages/SignIn';
import WelcomePage from "../pages/Welcome";
import StartApp from '../pages/Start'

const AppNavigator = createStackNavigator({
    WelcomePage: {
        screen: WelcomePage
    },
    Start: StartApp,
    SignUp: SignUpPage,
    SignIn: SignInPage
});

export default createAppContainer(AppNavigator);

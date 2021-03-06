import React, {useState, Component} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {useScreens} from 'react-native-screens';
import OrderNavigator from "./app/navigation/AppNav";
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import ReduxThunk from 'redux-thunk';

import washersReducers from "./app/store/reducers/washes";
import cartReducers from "./app/store/reducers/cart";
import ordersReducer from "./app/store/reducers/orders";
import productReducer from "./app/store/reducers/products";

const rootReducer = combineReducers({
    washes: washersReducers,
    cart: cartReducers,
    orders: ordersReducer,
    products: productReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

useScreens();
const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
    });
    this.setState({ isReady: true });
};

export default function App() {

    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                // onError={(err) => console.log(err)}
            />
        );
    }

    return (
        <Provider store={store}>
            <OrderNavigator/>
        </Provider>
    );
}




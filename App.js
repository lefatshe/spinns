import React, {useState, Component} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {useScreens} from 'react-native-screens';
import OrderNavigator from "./app/navigation/AppNav";
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import washersReducers from "./app/store/reducers/washes";
import cartReducers from "./app/store/reducers/cart";

const rootReducer = combineReducers({
    washes: washersReducers,
    cart: cartReducers,
    // orders: ordersReducer
});

const store = createStore(rootReducer, composeWithDevTools());

useScreens();
const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
};

export default function App() {

    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    return (
        <Provider store={store}>
            <OrderNavigator/>
        </Provider>
    );
}




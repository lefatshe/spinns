import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import AppNavigator from "./component/navigation/AppNavigator";
import {createStore, combineReducers} from 'redux'
import {useScreens} from 'react-native-screens';

import washesReducer from './assets/store/reducers/washes'
import {Provider} from 'react-redux'

useScreens();

const rootReducer = combineReducers({
    washes: washesReducer
});

const store = createStore(rootReducer);
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
            <AppNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
});


import React, {useState, Component} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {Text, View} from 'react-native';
import {useScreens} from 'react-native-screens';
import OrderNavigator from "./app/navigation/AppNav";

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
        <OrderNavigator />
    );
}

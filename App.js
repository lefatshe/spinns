import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./component/Header";
import WelcomePage from "./component/pages/Welcome";
import { Font, AppLoading } from "expo";

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
    <View style={styles.screen}>
      <Header title="Welcome" />
      <WelcomePage date="MON . 12 . 2019" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});


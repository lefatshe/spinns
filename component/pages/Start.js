import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const StartApp = props => {
    return (
        <View style={styles.screen}>
            <Text>Start</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default StartApp;

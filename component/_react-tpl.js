import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Colors from "../constants/colors";

const PropName = props => {
    return (
        <View style={styles.screen}>
            {<Text>PropName Screen!</Text>}
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

export default PropName;

import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const SignUp = props => {
    return (
        <View style={styles.screen}>
            <Text>SignUp Screen!</Text>
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

export default SignUp;

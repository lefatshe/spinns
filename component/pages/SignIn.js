import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import Colors from "../constants/colors";

const SignIn = props => {
    return (
        <View style={styles.screen}>
            {/*<Text>SignIn Screen!</Text>*/}
            <View>
                <Button title="Start" onPress={() => {props.navigation.navigate({routeName: 'Categories'});}} color={Colors.deepPrimaryColor}/>
            </View>
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

export default SignIn;

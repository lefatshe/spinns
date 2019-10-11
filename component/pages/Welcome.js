import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Card from '../widgets/Card';
import Colors from '../constants/colors'

const WelcomePage = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.headerTitle}>{props.date}</Text>
            <Image source={require('../../assets/images/logo.png')}
                   style={styles.logoImage}
                   resizeMode='cover'
            />
            <Card style={styles.inputContainer}>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}><Button title="Signin" color={Colors.deepPrimaryColor}/></View>
                    <View style={styles.btn}><Button title="Signup" color={Colors.deepPrimaryColor}/></View>
                </View>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        width: 100,
        color: 'black'
    },
    helpText: {
        textAlign: 'center',
        marginBottom: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    headerTitle: {
       marginVertical: 10,
       // fontFamily: 'open-sans-bold'
    },
    logoImage: {
        width: '100%',
        height: 320,
        marginTop: 80,
        marginBottom: 80
    }
});
export default WelcomePage;

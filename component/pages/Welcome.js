import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    Dimensions,
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';
import Card from '../widgets/Card';
import Colors from '../constants/colors'

const WelcomePage = props => {
    const [ buttonWidth, setButtonWidth ] = useState(Dimensions.get('window').width / 4);

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                >
        <View style={styles.screen}>
            {/*<Text style={styles.headerTitle}>{props.date}</Text>*/}
            <View style={styles.imgContainer}>
                <Image source={require('../../assets/images/logo.png')}
                       style={styles.image}
                       resizeMode="cover" />
            </View>
            <Card style={styles.inputContainer}>
                <View style={styles.buttonContainer}>
                    <View style={{width: buttonWidth}}><Button title="Signin" color={Colors.deepPrimaryColor}/></View>
                    <View style={{width: buttonWidth}}><Button title="Signup" color={Colors.deepPrimaryColor}/></View>
                </View>
            </Card>
        </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    btn: {
        width: Dimensions.get('window').width / 2,
        color: 'black'
    },
    imgContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    helpText: {
        textAlign: 'center',
        marginBottom: 10
    },
    inputContainer: {
        width: '80%',
        // maxWidth: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems: 'center'
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    headerTitle: {
       marginVertical: 10,
       // fontFamily: 'open-sans-bold'
    }
});
export default WelcomePage;

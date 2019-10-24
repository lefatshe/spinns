import React, {useState, useEffect} from 'react';
import {
    Text,
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
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

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
        <View style={styles.screen}>

            <View style={styles.imgContainer}>
                <Image source={require('../../assets/images/spinns-logo-mobile.jpg')} style={styles.image}
                       resizeMode="contain"/>
            </View>
            {/*<Card style={styles.inputContainer}>*/}
            {/*    <View style={styles.buttonContainer}>*/}
            {/*        <View style={{width: buttonWidth}}>*/}
            {/*            <Button title="Signin" onPress={() => {props.navigation.navigate({routeName: 'Categories'});}} color={Colors.deepPrimaryColor}/>*/}
            {/*        </View>*/}
            {/*        <View style={{width: buttonWidth}}>*/}
            {/*            <Button title="Signup" onPress={() => {props.navigation.navigate({routeName: 'SignUp'});}} color={Colors.deepPrimaryColor}/>*/}
            {/*        </View>*/}
            {/*    </View>*/}
            {/*</Card>*/}
            <Text style={styles.footText}>The reason behind this app approach is, mostly common people and students will
                use this app. And its created to take the load off their hands and not make it more complex getting
                laundry washing done.</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        width: Dimensions.get('window').width / 2,
        color: 'black'
    },
    imgContainer: {
        // width: '100%',
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        // overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
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
        alignItems: 'center',
        backgroundColor: Colors.cleanYellow
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    footText: {
        width: '80%',
        alignItems: 'center',
        fontFamily: 'open-sans',
        fontSize: 9,
        textAlign: 'center',
        marginTop: -40,
        color: 'black',
        paddingBottom: 10
    },
    headerTitle: {
        // marginVertical: 10,
        // fontFamily: 'open-sans-bold'
    }
});
export default WelcomePage;

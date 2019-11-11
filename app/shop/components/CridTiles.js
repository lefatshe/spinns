import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Colors from "../../theme/constants/Colors";
import ListText from "../../widgets/ListText";
import TitleText from "../../widgets/TitleText";
import Card from "../../widgets/Card";


const GridTiles = props => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View style={styles.article}>
                <Card>
                    <Image style={styles.stretch} source={{uri: props.image}} />
                    <View style={styles.countNum}>
                        <Text style={styles.valCount}> {props.total} </Text>
                    </View>
                    <View>
                        <Text style={styles.title}> {props.title} </Text>
                        <Text style={styles.sub}> {props.eta.toUpperCase()} </Text>
                    </View>
                </Card>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    article: {
        margin: 10,
    },
    title: {
        color: Colors.deepPrimaryColor,
        fontSize: 18,
        paddingTop: 10,
        fontFamily: 'open-sans-bold'
    },
    stretch: {
        width: '100%',
        height: 200,
        resizeMode: 'center',
        backgroundColor: Colors.cleanYellow,
        padding: 20
    },
    sub: {
        color: Colors.primaryColor
    },
    valCount: {
        padding: 10,
        fontSize: 28,
        color: Colors.primaryColor
    },
    countNum: {
        right: 0,
        bottom: 0,
        paddingRight: 20,
        marginVertical: 25,
        position: 'absolute'
    },
    num: {
        backgroundColor: Colors.deepPrimaryColor,
        borderRadius: 10,
        color: 'white',
        padding: 3
    }
});

export default GridTiles;

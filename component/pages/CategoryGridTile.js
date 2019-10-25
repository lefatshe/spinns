import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableNativeFeedback, ImageBackground, Image, Dimensions
} from 'react-native';
import Colors from "../constants/colors";
import Card from "../widgets/Card";

const CategoryGridTiles = props => {
    // console.log(props.image);
    return (
        <TouchableOpacity
            style={styles.gridItem}
            onPress={props.onSelect}>
            <View style={styles.article}>
                <Card>
                    <Image style={styles.stretch} source={{uri: props.image}} />
                    <View style={styles.countNum}>
                        <Text style={styles.num}> Orders: 0 </Text>
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

export default CategoryGridTiles;





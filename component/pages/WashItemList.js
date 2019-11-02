import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Card from "../widgets/Card";
import Slider from "react-native-slider";
import Colors from "../constants/colors";
import SliderComponent from "../SliderComponent";
import {Item} from "react-navigation-header-buttons";
import {Ionicons} from '@expo/vector-icons';

// https://github.com/react-native-community/react-native-slider
// https://snack.expo.io/@ptomasroos/react-native-scrollable-tab-view-examples
const WashItem = props => {

    return (
        <Card style={styles.article}>
            <Text style={styles.title} numberOfLines={1}>
                {props.title}
            </Text>

            <Text>
                <Icon name="ios-star" size={20} color="#f2ba13" />
            </Text>

            <View style={styles.slide}>
                <SliderComponent />
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    article: {
        margin: 10,
    },
    title: {
        color: Colors.deepPrimaryColor,
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    },
    slide: {},
    countNum: {
        right: 0,
        bottom: 0,
        paddingRight: 20,
        marginVertical: 60,
        position: 'absolute'
    },
    num: {
        backgroundColor: Colors.deepPrimaryColor,
        borderRadius: 10,
        color: 'white',
        padding: 3
    }
});

export default WashItem;

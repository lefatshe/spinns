import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Slider
} from 'react-native';
import Card from "../widgets/Card";
import Colors from "../constants/colors";
// https://github.com/react-native-community/react-native-slider
// https://snack.expo.io/@ptomasroos/react-native-scrollable-tab-view-examples
const WashItem = props => {
    // let state = {
    //     slideValue: 0,
    // };
    const [val, setValue] = useState(0)
    return (
        <Card style={styles.article}>
            <Text style={styles.title} numberOfLines={1}>
                {props.title}
            </Text>

            <View style={styles.countNum}>
                <Text style={styles.num}> {val} </Text>
            </View>

            <View style={styles.slide}>
                <Slider
                    style={{width: '100%', height: 40}}
                    maximumValue={100}
                    minimumValue={0}
                    minimumTrackTintColor="#FFDD00"
                    maximumTrackTintColor="#43D9F9"
                    thumbTintColor="#293064"
                    step={1}
                    onValueChange={() => setValue(10)}
                />
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

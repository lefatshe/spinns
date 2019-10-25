import React from "react";
import Slider from "react-native-slider";
import { AppRegistry, StyleSheet, View, Text } from "react-native";
import State from '../component/constants/state'
import CategoryGridTiles from "./pages/CategoryGridTile";
import {WASHES} from "../assets/data/app-data";
import Colors from '../component/constants/colors'

class SliderComponent extends React.Component {

    state = {
        value: 0
    };

    itemTotal = [];

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.valCount}>
                    {this.state.value}
                </Text>
                <Slider
                    value={this.state.value}
                    style={{width: '100%', height: 40}}
                    maximumValue={10}
                    minimumValue={0}
                    minimumTrackTintColor="#FFDD00"
                    maximumTrackTintColor="#43D9F9"
                    animateTransitions={true}
                    animationType={"spring"}
                    thumbTouchSize={{width: 100, height: 100}}
                    thumbTintColor="#293064"
                    step={1}
                    onValueChange={value => this.setState({ value })}
                    onSlidingComplete={()=> {
                        console.log(this.value)
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    valCount: {
        padding: 10,
        fontSize: 28,
        color: Colors.primaryColor
    }
});


export default SliderComponent;

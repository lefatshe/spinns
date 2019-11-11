import React from "react";
import Slider from "react-native-slider";
import {StyleSheet, View, Text} from "react-native";
import Colors from '../../theme/constants/Colors'

class SliderComponent extends React.Component {
    state = {
        value: 0
    };

    sliderValueInput = (i) => {
        let itemTotal = [];

        console.log('you saved value ', i)
    }


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
                    onValueChange={value => this.setState({value})}
                    onSlidingComplete={() => {
                        console.log(this.value)
                    }}
                    onSlidingComplete={value => this.sliderValueInput(value)}
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
        fontSize: 22,
        color: Colors.primaryColor
    }
});


export default SliderComponent;

import React from "react";
import Slider from "react-native-slider";
import {StyleSheet, View, Text} from "react-native";
import Colors from '../../theme/constants/Colors'
import Menu from "../../models/menu";
import Cart from "../../data/user-data";
import * as cartActions from '../../store/actions/cart'
import Product from "../../models/product";

class SliderComponent extends React.Component {

    state = {
        value: 0,
        itemTotal: []
    };

    sliderValueInput = (quantity) => {
        let itemSelected = new Cart(quantity, this.props.itemName);
        this.state.itemTotal.push(itemSelected);
        console.log(this.state.itemTotal)
    }

    render() {
        console.log(this.props.dispatch);
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
                    onSlidingComplete={() => this.props.dispatch(cartActions.addToCart(new Product(this.props.itemId, this.props.itemName, 29.99)))}
                    // onSlidingComplete={value => this.sliderValueInput(value)}
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

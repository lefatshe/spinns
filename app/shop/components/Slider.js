import React from "react";
import Slider from "react-native-slider";
import {StyleSheet, View, Text} from "react-native";
import Colors from '../../theme/constants/Colors'
import Menu from "../../models/menu";
import Cart from "../../data/user-data";
import * as cartActions from '../../store/actions/cart'
import Product from "../../models/product";
import TitleText from "../../widgets/TitleText";
import {CATEGORIES} from "../../data/app-data";
import CartItem from "../../models/cartItem";

class SliderComponent extends React.Component {

    state = {
        itemName: this.props.itemName,
        itemId: this.props.itemId,
        categoryID: this.props.categoryID,
        value: 0,
        itemTotal: []
    };

    sliderValueInput = (id, name, price, sliderValue, categoryID) => {

        let category = CATEGORIES.find(category => category.id === categoryID);
        let categoryTitle = category.title;
        let totalSum = price * sliderValue;
        // console.log(categoryTitle)
        // --dry run
        // console.log(new Product(id, name, price, sliderValue, totalSum, categoryTitle))
        this.props.dispatch(cartActions.addToCart(new CartItem(id, name, price, sliderValue, totalSum, categoryTitle)))
    }

    render() {
        // console.log(this.props.dispatch);
        return (
            <View style={styles.container}>
                <View style={styles.viewContainer}>
                    <View style={styles.item}>
                        <Text style={styles.title} numberOfLines={1}> {this.state.itemName} </Text>
                        <Text style={styles.days}> ( R10 per piece )</Text>
                    </View>
                    <View style={styles.item}><Text style={styles.valCount}> {this.state.value} </Text></View>
                </View>

                {/*<Text style={styles.valCount}>*/}
                {/*    <Text style={styles.valCount}>{this.state.itemName}</Text> {this.state.value}*/}
                {/*</Text>*/}
                <Slider
                    value={this.state.value}
                    style={{width: '100%', height: 40}}
                    maximumValue={10}
                    minimumValue={0}
                    maximumTrackTintColor="#EAEDEC"
                    minimumTrackTintColor="#4E8AF1"
                    animateTransitions={true}
                    animationType={"spring"}
                    thumbTouchSize={{width: 100, height: 100}}
                    thumbTintColor="#4E8AF1"
                    step={1}
                    onValueChange={value => this.setState({value})}
                    onSlidingComplete={(sliderValue) => this.sliderValueInput(this.props.itemId, this.props.itemName, 10, sliderValue, this.props.categoryID)}
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
    viewContainer: {
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        width: '50%' // is 50% of container width
    },
    valCount: {
        textAlign: 'right',
        fontSize: 22,
        color: Colors.sameBlue,
        fontFamily: 'open-sans-bold'
    },
    title: {
        color: Colors.deepPrimaryColor,
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    },
    days: {
        color: Colors.deepGray,
    },
});


export default SliderComponent;

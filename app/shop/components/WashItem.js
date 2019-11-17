import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SliderComponent from "../components/Slider";
import Cart from "../../data/user-data";
import {useSelector, useDispatch} from 'react-redux'
import Colors from "../../theme/constants/Colors";
import {WASHES, CATEGORIES} from "../../data/app-data";

const WashItem = props => {
    const dispatch = useDispatch();

    const categoryID = props.categoryID;

    // CATEGORIES.findIndex(category => category.id === categoryID);



   // console.log(categoryTitle)
    return (
        <View>
            <View style={styles.slideContainer}>
                <SliderComponent categoryID={props.categoryID} itemId={props.id} itemName={props.title} dispatch={dispatch} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    slideContainer: {
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderColor: Colors.settleGray
    }
});

export default WashItem;

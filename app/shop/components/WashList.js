import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SliderComponent from "../components/Slider";
import Cart from "../../data/user-data";
import {useSelector, useDispatch} from 'react-redux'

const WashList = props => {
    const dispatch = useDispatch();
    return (
        <View>
            <Text style={styles.title} numberOfLines={1}>
                {props.title}
            </Text>
            <View>
                <SliderComponent itemName={props.title}  itemId={props.id} dispatch={dispatch} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default WashList;

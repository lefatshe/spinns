import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from "../../theme/constants/Colors";
import SliderComponent from "../components/Slider";
import Container from "../../widgets/Container";

const WashList = props => {

    return (
        <View>
            <Text style={styles.title} numberOfLines={1}>
                {props.title}
            </Text>
            <View>
                <SliderComponent/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default WashList;

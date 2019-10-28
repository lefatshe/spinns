import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import CategoryTypes from "./pages/tabs/CategoryTypes";
import MetroTabs from "./pages/tabs/MetroTab";


const WashType = props => {
    console.log(props.type)
    return (
        <MetroTabs
            screens={[
                { key: '1', title: 'Type 1', screen: <CategoryTypes /> }
            ]}
        />
        // <Text numberOfLines={1}>{props.title} - {props.type}</Text>
    );
};

const styles = StyleSheet.create({
});

export default WashType;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../component/constants/colors'
import TitleText from "./TitleText";

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText style={styles.headerTitle}>{props.title}</TitleText>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 20,
        backgroundColor: Colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: Colors.deepPrimaryColor
    }
});
export default Header;

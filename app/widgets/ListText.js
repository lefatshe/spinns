import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from "../theme/constants/Colors"

const ListText = props => {
    return <Text style={styles.text}>
        {props.children}
    </Text>;
};

const styles = StyleSheet.create({
    text: {
        borderWidth: 3,
        marginBottom: 5,
        padding: 20,
        fontFamily: 'open-sans-bold',
        fontSize: 14,
        borderColor: Colors.deepGray
    }
});

export default ListText;

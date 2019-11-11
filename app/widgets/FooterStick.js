import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = props => {
    return (
        <View>
            <Text style={styles.footer}>{props.children}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        marginTop: 20,
        marginBottom: 60
    }
});

export default Footer;

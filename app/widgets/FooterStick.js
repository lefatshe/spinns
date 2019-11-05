import React from 'react';
import { View, StyleSheet } from 'react-native';

const Footer = props => {
    return (
        <View>
            <View style={styles.footer}>{props.children}</View>
        </View>

    );
};

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20
    }

});

export default Footer;

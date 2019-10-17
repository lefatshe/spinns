import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WashDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Wash Detail Screen!</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.navigate({
                    routeName: 'Categories'
                });
            }} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default WashDetailScreen;

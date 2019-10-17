import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { CATEGORIES } from '../../assets/data/app-data';

const CategoryWashScreen = props => {
    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen}>
            <Text>The Category Wash Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'WashDetail'
                    });
                }}
            />
            <Button
                title="Go Back"
                onPress={() => {
                    props.navigation.pop();
                }}
            />
        </View>
    );
};

CategoryWashScreen.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryWashScreen;

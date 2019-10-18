import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {CATEGORIES, WASHES} from '../../assets/data/app-data';
import WashItem from "./WashItemList";

const CategoryWashScreen = props => {
    const renderWashItem = itemData => {
        return (
            <WashItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                price={itemData.item.price}
                onSelectWash={() => {
                    props.navigation.navigate({
                        routeName: 'WashDetail',
                        params: {
                            washId: itemData.item.id
                        }
                    });
                }}
            />
        );
    };

    const catId = props.navigation.getParam('categoryId');

    const displayedWashes = WASHES.filter(
        wash => wash.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedWashes}
                keyExtractor={(item, index) => item.id}
                renderItem={renderWashItem}
                style={{width: '100%'}}
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
        alignItems: 'center',
        padding: 15
    }
});

export default CategoryWashScreen;

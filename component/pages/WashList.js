import React from 'react';
import {
    FlatList,
    StyleSheet,
    View,
} from 'react-native';
import WashItem from "./WashItemList";


const WashListing = props => {
    const renderWashItem = itemData => {
        return (
            <WashItem
                title={itemData.item.title}
                image={itemData.item.image}
                price={itemData.item.type}
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

    return <View style={styles.list}>
        <FlatList
            data={props.listData}
            keyExtractor={(item, index) => item.id}
            renderItem={renderWashItem}
            style={{width: '100%'}}
        />
    </View>;
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default WashListing;

import React from 'react';
import {
    FlatList,
    View,
    StyleSheet
} from 'react-native';
import {WASHES} from "../../../assets/data/app-data";
import WashItem from "../WashItemList";

const FullBody = props => {

    const renderWashItem = itemData => {
        return (
            <WashItem
                title={itemData.item.title}
                image={itemData.item.image}
            />
        );
    };
    return <View style={{width: '100%'}}>
        <FlatList
            data={props.listData}
            keyExtractor={(item, index) => item.id}
            renderItem={renderWashItem}
        />
    </View>;
};

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
});

export default FullBody;





import React from 'react';
import {
    FlatList,
    StyleSheet,
    View, Text, Picker,
} from 'react-native';
import WashItem from "./WashItemList";
import Card from "../widgets/Card";


const WashListing = props => {

    const renderWashItem = itemData => {
        return (
            <WashItem
                title={itemData.item.title}
                image={itemData.item.image}
                price={itemData.item.type}
                value={0}

                // onSelectWash={() => {
                //     props.navigation.navigate({
                //         routeName: 'WashDetail',
                //         params: {
                //             washId: itemData.item.id
                //         }
                //     });
                // }}
            />
        );
    };


    return <View style={styles.list}>
        <View style={styles.select}>
            <Picker style={{height: 120, width: 200}}>
                <Picker.Item label="All" value="All" />
                <Picker.Item label="Headgear" value="Headgear" />
                <Picker.Item label="Tops" value="Tops" />
                <Picker.Item label="Bottoms" value="Bottoms" />
                <Picker.Item label="Full Body Wear" value="Full Body Wear" />
                <Picker.Item label="Outerwear" value="Outerwear" />
                <Picker.Item label="Men’s Undergarments" value="Men’s Undergarments" />
                <Picker.Item label="Women’s Lingerie" value="Women’s Lingerie" />
                <Picker.Item label="Foot wear" value="Foot wear" />
            </Picker>
        </View>
        <View style={{width: '100%'}}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderWashItem}
            />
        </View>

    </View>;
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    },
    select: {
        // flex: 1,
        // overflow: 'hidden'
    }
});

export default WashListing;

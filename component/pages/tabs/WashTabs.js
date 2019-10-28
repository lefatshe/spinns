import React from 'react';
import {
    FlatList,
    StyleSheet,
    View, Text, Picker,
} from 'react-native';
import WashItem from "../WashItemList";
import WashType from "../../WashType";


const WashTabs = props => {

    const renderWashType = itemData => {
        return (<WashType
            title={itemData.item.title}
            type={itemData.item.unit}
        />);
    };

    return <View style={styles.list}>
        {/*<Text style={styles.select}>*/}
        {/*    {props.listData[0].title}*/}
        {/*</Text>*/}

        <View style={{width: '100%'}}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderWashType}
            />
        </View>
    </View>;
};

const styles = StyleSheet.create({});

export default WashTabs;

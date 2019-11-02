import React from 'react';
import {
    FlatList,
    StyleSheet,
    View, Text,
} from 'react-native';


const TabsScroll = props => {

    return <View style={styles.list}>
        <View style={{width: '100%'}}>
            <FlatList data={props.keys} keyExtractor={(item, index) => item} renderItem={ ({ item }) => <Text> {item} </Text> }/>
        </View>
    </View>;
};

const styles = StyleSheet.create({});

export default TabsScroll;

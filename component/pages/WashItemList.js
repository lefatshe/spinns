import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

const WashItem = props => {
    return (
        <View style={styles.washItem}>
            <TouchableOpacity onPress={props.onSelectWash}>
                <View>
                    <View style={{...styles.washRow, ...styles.washHeader}}>
                        <ImageBackground source={{uri: props.imageUrl}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {props.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.washRow, ...styles.washDetail}}>
                        <Text>R {props.price}</Text>
                        {/*<Text>{props.complexity.toUpperCase()}</Text>*/}
                        {/*<Text>{props.affordability.toUpperCase()}</Text>*/}
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    washItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    washRow: {
        flexDirection: 'row'
    },
    washHeader: {
        height: '85%'
    },
    washDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});

export default WashItem;

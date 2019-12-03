import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform
} from 'react-native';

import Colors from '../../theme/constants/Colors';
import Card from "../../widgets/Card";

const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onViewDetail} useForeground>
                    <View style={styles.article}>
                        <Card>
                            <View style={styles.container}>
                                <View style={styles.item}><Text style={styles.title}> {props.category} </Text></View>
                                <View style={styles.item}>
                                    <Text style={styles.valCount}>
                                       R {props.price.toFixed(2)}
                                    </Text>
                                </View>
                            </View>
                            <View><Text style={styles.days}> {props.title} </Text></View>
                            <View style={styles.splitContainer}>
                                <View style={styles.item}>
                                    <Button
                                        color={Colors.primary}
                                        title="Edit"
                                        onPress={props.editProduct}
                                    />
                                </View>
                                <View style={styles.item}>
                                    <Button
                                        color={Colors.primary}
                                        title="Delete"
                                        onPress={props.deleteProduct}
                                    />
                                </View>
                            </View>
                        </Card>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    days: {
        color: Colors.deepGray,
    },
    item: {
        width: '50%' // is 50% of container width
    },
    article: {
        margin: 10,
    },
    title: {
        color: Colors.deepPrimaryColor,
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    },
    stretch: {
        width: '100%',
        height: 200,
        resizeMode: 'center',
        backgroundColor: Colors.cleanYellow,
        padding: 20
    },
    valCount: {
        textAlign: 'right',
        fontSize: 18,
        color: Colors.sameBlue,
        fontFamily: 'open-sans-bold'
    },
    container: {
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    splitContainer: {
        paddingTop: 10,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
});

export default ProductItem;

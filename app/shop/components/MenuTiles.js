import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Colors from "../../theme/constants/Colors";
import ListText from "../../widgets/ListText";
import TitleText from "../../widgets/TitleText";
import Card from "../../widgets/Card";
import {useSelector} from "react-redux";


const MenuTiles = props => {

    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View style={styles.article}>
                <View style={styles.container}>
                    <View style={styles.item}>
                        <Text style={styles.title}> {props.title} </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    article: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderColor: Colors.settleGray
    }
});

export default MenuTiles;

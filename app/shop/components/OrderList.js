import React from 'react';
import {
    SafeAreaView, View, FlatList, StyleSheet, Text, Dimensions, TouchableOpacity
} from 'react-native';
import Container from "../../widgets/Container";
import TitleText from "../../widgets/TitleText";
import Colors from "../../theme/constants/Colors";

const OrderList = props => {

    // Dimensions.get('window').width,

    const WINDOW_WIDTH = Dimensions.get('window').width;
    const HEADER_WIDTH = WINDOW_WIDTH / 1.5;

    state = {
        colors:['green', 'blue', 'yellow', 'red'],
        buttonColor: 'blue'
    };

    return (
        <Container>
            <View>
                <Text> {props.label} </Text>
            </View>
            <SafeAreaView style={styles.safeArea}>
                <FlatList
                    horizontal={true}
                    data={props.keys}
                    renderItem={({item}) => <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            console.log(item)
                        }}>
                        <TitleText style={{backgroundColor: this.state.buttonColor, padding: 15}}> {item} </TitleText>
                    </TouchableOpacity>}
                    keyExtractor={(item, index) => item}
                />
            </SafeAreaView>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    item: {
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: Colors.deepGray,
        padding: 20,
        marginTop: 10,
        marginRight: 10,
        backgroundColor: Colors.settleGray,
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    safeArea: {
        // width: Dimensions.get('window').width,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10
    }
});

export default OrderList;





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


const GridTiles = props => {
    const category = props.title + 'Total'.toString();
    // console.log(category)


    function Category(props) {
        // console.log("props ", props.category)

        return <Text> {props.category} </Text>
        // switch (props.category) {
        //     case "Wash":
        //         const washTotal = useSelector(state => state.cart.washTotal);
        //         console.log("Wash = ", washTotal)
        //         return <Text> {washTotal} </Text>
        //     case "Iron":
        //         const ironTotal = useSelector(state => state.cart.ironTotal);
        //         console.log("Iron = ", ironTotal)
        //         return <Text> {ironTotal} </Text>
        //     default:
        //         console.log("default ")
        //         return <Text> 0 </Text>
        // }
    }

    // const washTotal = useSelector(state => state.cart.washTotal);
    // console.log(category)
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <View style={styles.article}>
                <Card>
                    <Image style={styles.stretch} source={{uri: props.image}}/>
                    <View style={styles.container}>
                        <View style={styles.item}><Text style={styles.title}> {props.title} </Text></View>
                        <View style={styles.item}>
                            <Text style={styles.valCount}>
                                {props.cartTotal}
                                {/*<Category category={props.title}/>*/}
                            </Text>
                        </View>
                    </View>
                    <View><Text style={styles.days}> {props.eta.toUpperCase()} </Text></View>
                    {/*<View style={styles.countNum}>*/}
                    {/*    <Text style={styles.valCount}> {props.total} </Text>*/}
                    {/*</View>*/}
                    {/*<View>*/}
                    {/*    <Text style={styles.title}> {props.title} </Text>*/}
                    {/*    <Text style={styles.sub}> {props.eta.toUpperCase()} </Text>*/}
                    {/*</View>*/}
                    {/*<View style={styles.info}><Text> {props.total} </Text></View>*/}
                </Card>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    // info: {
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     alignItems: 'flex-start'
    // },
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
});

export default GridTiles;

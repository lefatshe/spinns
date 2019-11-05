import React from "react";
import {FlatList, Text, TouchableOpacity} from 'react-native';

import Container from "../../widgets/Container";

export default class Store extends React.Component {
    constructor(props) {
        super(props)
        this.orderItem = {
            id: props.id,
            title: props.title,
            keys: props.keys
        };
    }

    selectItem = data => {
        console.log(data)
    };

    renderItem = data =>
        <TouchableOpacity onPress={() => this.selectItem(data)}>
            <Text>  {this.orderItem.id}  </Text>
        </TouchableOpacity>


    render() {
        console.log(this.orderItem)
        return (
            <Container>
                {/*<Text> {this.orderItem.title} </Text>*/}
                <FlatList
                    data={this.orderItem.keys}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item}
                    extraData={this.orderItem}
                />
            </Container>
        );
    }
}

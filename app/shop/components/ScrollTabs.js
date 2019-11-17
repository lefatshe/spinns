import React, {Component} from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Colors from "../../theme/constants/Colors";
import TitleText from "../../widgets/TitleText";

export default class ScrollTabs extends Component {
    WINDOW_WIDTH = Dimensions.get('window').width;
    HEADER_WIDTH = this.WINDOW_WIDTH / 1.5;

    state = {
        currentPage: '1'
    };

    render() {
        // console.log(this.props.screens);
        return (
            <View style={{paddingTop: 50, paddingBottom: 50}}>
                <ScrollView>
                    <FlatList
                        ref={screenList => (this.screenList = screenList)}
                        horizontal
                        snapToAlignment={'center'}
                        decelerationRate={10}
                        snapToInterval={this.WINDOW_WIDTH}
                        data={this.props.screens}
                        onScroll={this.handleScroll}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => (
                            <View style={styles.container}>
                                {item.screen}
                            </View>
                        )}
                        onViewableItemsChanged={this.onViewableItemsChanged}/>
                </ScrollView>
                <FlatList
                    extraData={this.state}
                    ref={headerList => (this.headerList = headerList)}
                    style={{position: 'absolute', top: 0, right: 0}}
                    horizontal
                    snapToAlignment={'center'}
                    decelerationRate={10}
                    snapToInterval={this.WINDOW_WIDTH}
                    data={this.props.screens}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            // activeOpacity={1}
                            onPress={() => this.headerPress(item)}>
                            <TitleText numberOfLines={1} style={{
                                backgroundColor: Colors.sameBlue,
                                color: 'white',
                                padding: 20,
                                width: this.HEADER_WIDTH,
                                opacity: this.state.currentPage === item.key ? 1 : 0.4
                            }}>{item.title}</TitleText>
                        </TouchableOpacity>
                    )}
                />
            </View>
        );
    }

    handleScroll = ({
                        nativeEvent: {
                            contentOffset: {x}
                        }
                    }) => {
        try {
            this.headerList.scrollToOffset({
                offset: (x * this.HEADER_WIDTH) / this.WINDOW_WIDTH,
                animated: false
            });
        } catch (e) {
            // console.log(e);
        }
    };

    onViewableItemsChanged = info => {
        if (info.viewableItems.length === 1) {
            this.setState({currentPage: info.viewableItems[0].key});
            // console.log('scrolling to ', info.viewableItems[0].index);
        }
    };

    headerPress = item => {
        this.setState({currentPage: item.key});
        this.screenList.scrollToItem({item: {key: item}});
    };
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    }
});

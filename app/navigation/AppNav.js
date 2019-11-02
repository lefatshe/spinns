import { createStackNavigator, createAppContainer } from 'react-navigation';

import OrdersScreen from "../shop/screens/OrderScreen";


const OrderNavigator = createStackNavigator({
    OrdersScreen: OrdersScreen
});

export default createAppContainer(OrderNavigator);

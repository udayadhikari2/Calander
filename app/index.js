import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import  Home from "../pages/Home"
const Stack = createStackNavigator();

const Layout = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="RRLS" component={Home} />
        </Stack.Navigator>
    )
}
export default Layout;
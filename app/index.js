import React from 'react'
import { Image, Button, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../pages/Home"
// import Icon from '@mui/material';
import {MenuIcon,Delete} from '@mui/icons-material';

const Stack = createStackNavigator();

const Layout = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="RRLS"
                component={Home}
                options={{
                    title: false,
                    headerRight: () =>
                        <View style={styles.button_position} >
                            <Button
                                style={styles.button_style}
                                onPress={() => alert('This is Alert Secotion')}
                                title=''
                                color="red"
                                // icon={<MenuIcon name="home" fontSize='large' color='action' />}
                            />
                        </View>
                }}>

            </Stack.Screen >
        </Stack.Navigator >
    )
}

const styles = StyleSheet.create({
    button_position: {
        marginRight: 10,
    },
    button_style: {
        border: 2,
        borderRadius: 20,
    }
});
export default Layout;
/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/index';
import DetailBook from '../screens/DetailBook';
import Login from '../screens/Login';
import Register from '../screens/Register';
import RegisterSuccess from '../screens/RegisterSuccess';
import media from '../screens/media';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator initialRouteName={'Media'}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailBook"
        component={DetailBook}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterSukses"
        component={RegisterSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Media"
        component={media}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

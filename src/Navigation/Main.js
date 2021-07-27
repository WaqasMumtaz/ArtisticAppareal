/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
 import Login from '../screens/Auth/Login';
 import Signup from '../screens/Auth/Signup';
import Home from '../screens/Home';
import AddForm from '../screens/Form';

const Stack = createStackNavigator();
const Main=()=>{
    return (
          <Stack.Navigator>
             <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Signup" component={Signup}/>
            <Stack.Screen name="Home" component={Home}
            options={{headerShown: false}}
            />
             <Stack.Screen name="Form" component={AddForm}
            options={{headerShown: false}}
            />
          </Stack.Navigator>
      );
}

export default Main;

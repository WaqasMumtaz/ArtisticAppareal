/* eslint-disable prettier/prettier */
import React from 'react';
import Main from './src/Navigation';
import { View , Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


const App = ()=> {
 return( 
    <NavigationContainer>
    <Main />
  </NavigationContainer>
 )
}

export default App;
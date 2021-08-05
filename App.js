/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import Main from './src/Navigation';
import { View , Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';


const App = ()=> {

  useEffect(()=>{
    SplashScreen.hide();
  },[])

 return( 
    <NavigationContainer>
    <Main />
  </NavigationContainer>
 )
}

export default App;
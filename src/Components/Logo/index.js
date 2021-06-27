/* eslint-disable prettier/prettier */
import React from 'react';
import logo from '../../Assets/logo.png';
import {View , Text , Image} from 'react-native';

const Logo = ()=>{
    return(
    <View style={{alignItems:'center'}}>
        <Image
             source={logo}
             style={{
               width: '50%',
               height: 100,
               resizeMode: 'contain',
               margin: 30,
             }}
           />

    </View>
    )
}
export default Logo;
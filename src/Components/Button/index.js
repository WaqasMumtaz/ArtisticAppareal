/* eslint-disable prettier/prettier */
import React from 'react';
import {View , Text , Image , TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import globelColors from '../../Globel';

const MyButton = ({onSubmit , btnStyle , titleStyle , title , icon , iconName , iconColor , iconSize , btnContainer})=>{
    return(
    <View style={btnContainer}>
        <TouchableOpacity style={btnStyle} onPress={()=>onSubmit()}>
             {icon && <Ionicons name={iconName} size={iconSize} color={iconColor} />}
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    </View>
    )
}
export default MyButton;

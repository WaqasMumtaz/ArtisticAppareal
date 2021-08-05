/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React , {useEffect , useState} from 'react';
import Logo from '../../Components/Logo';
import {View , Text , Image , StyleSheet} from 'react-native';
import MyButton from '../../Components/Button';
import globelColors from '../../Globel';
import { useNavigation } from '@react-navigation/native';

const Home =()=>{
    const navigation = useNavigation();

     const addForm = ()=>{
        navigation.navigate('Form');
       //  console.log('Add form')
     }

     const viewDetail = ()=>{
        navigation.navigate('Detail');
     }
    return(
        <View style={styles.main}>
            <View style={styles.logo}>
            <Logo/>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-evenly', width:'100%',}}>
            <MyButton
            onSubmit = {viewDetail}
            btnStyle = {styles.btnStyle}
            titleStyle = {styles.titleStyle}
             title = 'View Details'
             icon = {true}
            iconName = 'clone'
            iconColor = 'black'
              iconSize = {20}
              btnContainer={styles.btnContainer}
            />
            <MyButton
            onSubmit = {addForm}
            btnStyle = {styles.btnStyle}
            titleStyle = {styles.titleStyle}
             title = 'Add Form'
             icon = {true}
            iconName = 'plus'
            iconColor = 'black'
              iconSize = {28}
              btnContainer={styles.btnContainer}
            />
            
            </View>
           
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    main:{
       flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    btnStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    btnContainer:{
        backgroundColor:globelColors.background,
        padding:3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        borderRadius:8
    },
    logo:{
       width:'70%',
       width:'40%',
    },
    titleStyle:{
        margin:8,
        fontSize:globelColors.fontSize,
        color:globelColors.textColor,
        fontWeight:'bold'
    }
});
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React , {useEffect , useState} from 'react';
import Logo from '../../Components/Logo';
import {View , Text , Image , StyleSheet} from 'react-native';
import MyButton from '../../Components/Button';


const Home =()=>{

     const addForm = ()=>{
         console.log('Add form')
     }
    return(
        <View>
            <Logo/>
            <MyButton
            onSubmit = {addForm}
            btnStyle = {styles.btnStyle}
            titleStyle = {styles.titleStyle}
             title = {'Add Form'}
             icon = {true}
            iconName = 'plus'
            iconColor = 'black'
              iconSize = {28}
              btnContainer={styles.btnContainer}
            />
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    titleStyle:{

    },
    btnStyle:{
        flexDirection:'row',
    },
    btnContainer:{
        backgroundColor:'red',
        
        
    }
});
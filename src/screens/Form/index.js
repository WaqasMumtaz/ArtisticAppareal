import React from 'react';
import {View , TextInput , StyleSheet , Text , ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const AddForm = ()=>{

return(
    <View style={styles.mainContainer}>
        <ScrollView>
        <Input
  placeholder='Supplier Name '
/>
<Input
  placeholder='Factory Name'
/>
<Input
  placeholder='Location'
/>
<Input
  placeholder='Style'
/>
<Input
  placeholder='Item Description'
/>
<Input
  placeholder='PR / PM Name'
/>
<Input
  placeholder='Buying B/D'
/>
<Input
  placeholder='Country of Origin'
/>
        </ScrollView>
    </View>
)
}

export default AddForm;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
       
    }
})
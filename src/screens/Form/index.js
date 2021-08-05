import React, {useState , useEffect, useRef} from 'react';
import {View ,Image,Alert, TextInput , StyleSheet , Text , ScrollView , FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import ImageModal from 'react-native-image-modal';
import MyButton from '../../Components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddForm = ()=>{
  let actionSheet = useRef();
  let [selectedIMGS, setSelectedIMGS] = useState([]);
  let [supplier , setSupplier]= useState('');
  let [factoryName , setFactoryName]= useState('');
  let [location , setLocation]= useState('');
  let [style1 , setStyle1]= useState('');
  let [description , setDescription]= useState('');
  let [pmName , setPMname]= useState('');
  let [buying , setBuying]= useState('');
  let [country , setCountry]= useState('');
  const [count, setCount] = useState(0);
 
  let optionArray = [
    'Select Multiple Images',
    'Camera',
    'Cancel',
  ];

  const removePhoto=(key , close)=>{
    let imgs = [...selectedIMGS];
    let index ;
    for (const [i,iterator] of selectedIMGS.entries()) {
          if(iterator.key == key){
            index = i
          }
    }
     imgs.splice(index, 1);
      setSelectedIMGS(imgs);
      close();
    console.log('index >>>>', index);
}

const submit_form = ()=>{
  console.log('Submit form');
  setCount(count + 1)
  if(!supplier && !factoryName && !location && !style1 && !description && !pmName && !buying && !country){
    alert('Required form fields');
  }
  else {
    let formTotal_Data = [...selectedIMGS];
    let form_obj = {
      // key: count,
      // selectedIMGS:selectedIMGS,
      supplier:supplier,
      factoryName:factoryName,
      location:location,
      style1:style1,
      description:description,
      pmName:pmName,
      buying:buying,
      country:country,
    }
    formTotal_Data.push(form_obj);
    AsyncStorage.setItem('selectedIMGS',JSON.stringify(selectedIMGS));
    AsyncStorage.setItem('formDetail',JSON.stringify(form_obj));
    alert('Form Submit Successfully')
  }
}

  const Item = ({ item }) => (
    //  <Image
    //   source={{uri:item.path}}
    //   style={{width:100 , height:100}}
    //   resizeMode="contain"
    //  />
    <View style={{marginHorizontal:10, marginBottom:20}}>
      <ImageModal
                  isTranslucent={true}
                    resizeMode={'contain'}
                    imageBackgroundColor="#000000"
                    source={{uri: item.path}}
                    style={{
                      height:100,
                      width:100,
                    }}
                  renderHeader={(onClose)=>(
                  <View style={{flexDirection:'row', justifyContent:'space-between', margin:15}}>
                      <TouchableOpacity
                       onPress={onClose}
                       >
                      <Icon name="times" size={22} color="#fff" />
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={()=>removePhoto(item.key , onClose)}
                      >
                      <Icon name="trash-o" size={22} color="#fff" />
                      </TouchableOpacity>
                  </View>)}
      />
    </View>
  );

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  const openSheet=()=>{
    actionSheet.current.show();
  }
  

  const selectMultipleImgs = async (index , myCallBack) => {
    try {
      if (index == 0) {
        let selectedImgs = [...selectedIMGS];
        let imagesArr = await ImagePicker.openPicker({
              multiple: true,
            waitAnimationEnd: true,
            includeExif: true,
            compressImageQuality: 0.8,
            maxFiles: 10,
        });
        //console.log('imagesArr **********', imagesArr);
        //let imgsArr=[...];
        for (const [i,items] of imagesArr.entries()) {
          console.log('imgs **********', items);
          let imgsObj = {
            key:i,
            path:items.path
          }
          selectedImgs.push(imgsObj)
          // if(selectedImgs.length > 0){
          //   for (const [j,items] of selectedImgs.entries()) {
          //     if(items.key == i){
          //       let imgsObj = {
          //         key:j+1,
          //         path:items.path
          //       }
          //       selectedImgs.push(imgsObj)
          //     }
          //   }
          // }
          // else {
          //   selectedImgs.push(imgsObj)
          // }
          console.log('imgs obj ************',imgsObj);
          
        }
        console.log('Last pushed data arr >>>', selectedImgs);
        setSelectedIMGS(selectedImgs);
     }
    }
    catch(error){
      console.log('Error >>', error);
    }
   
  };

return(
    <View style={styles.mainContainer}>
        <ScrollView>
        <Input
  placeholder='Supplier Name '
  onChangeText={value => setSupplier(value)}
/>
<Input
  placeholder='Factory Name'
  onChangeText={value => setFactoryName(value)}
/>
<Input
  placeholder='Location'
  onChangeText={value => setLocation(value)}

/>
<Input
  placeholder='Style'
  onChangeText={value => setStyle1(value)}

/>
<Input
  placeholder='Item Description'
  onChangeText={value => setDescription(value)}

/>
<Input
  placeholder='PR / PM Name'
  onChangeText={value => setPMname(value)}

/>
<Input
  placeholder='Buying B/D'
  onChangeText={value => setBuying(value)}

/>
<Input
  placeholder='Country of Origin'
  onChangeText={value => setCountry(value)}

/>
<View style={{marginVertical:20 ,justifyContent:'center', alignItems:'center'}}>
<TouchableOpacity onPress={()=> openSheet()}>
  <Text style={styles.text}>Select Image</Text>
</TouchableOpacity>
</View>
<ActionSheet
        ref={actionSheet}
        title={'Which one do you like ?'}
        options={optionArray}
        cancelButtonIndex={2}
        destructiveButtonIndex={1}
        onPress={(index) => selectMultipleImgs(index)}
      />

{selectedIMGS.length > 0 &&
 <FlatList
 data={selectedIMGS}
 horizontal={true}
renderItem={renderItem}
keyExtractor={item => item.key}
 />
}
<MyButton
onSubmit={submit_form}
btnStyle ={styles.btnStyle}
titleStyle ={styles.titleStyle}
title = 'Submit'
btnContainer={styles.btnContainer}
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
       
    },
    text:{
      color:'gray',
      fontSize:16,
      fontWeight:'bold'
    },
    btnStyle:{
      backgroundColor: '#808080',
      borderWidth: 0,
      color: '#FFF',
      borderColor: '#808080',
      height: 40,
      alignItems: 'center',
      justifyContent:'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
      marginBottom: 20,
    },
    titleStyle:{
      fontSize:20,
      color:'white',
      fontWeight:'bold',
    }
})
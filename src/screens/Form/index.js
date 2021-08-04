import React, {useState , useEffect, useRef} from 'react';
import {View ,Image,Alert, TextInput , StyleSheet , Text , ScrollView , FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import ImagePicker from 'react-native-image-crop-picker';
import ImageModal from 'react-native-image-modal';

const AddForm = ()=>{
  let actionSheet = useRef();
  let [selectedIMGS, setSelectedIMGS] = useState([]);
 
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
    // if (index !== -1) {
    
    // }
    // console.log('Remove Photo')
    // Alert.alert('Delete Photo', 'Are you sure to remove ?', [
    //     {
    //       text: 'Ok',
    //       onPress: () => setImage(''),
    //     },
    //     {text: 'Cancel', onPress: () => console.log('Cancel')},
    //   ]);
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
    }
})
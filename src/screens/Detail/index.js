import React, {useState , useEffect, useRef} from 'react';
import {
    Alert,
    TextInput,
    View,
    Text,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    ImageBackground,
    Platform,
    Dimensions,
    Animated,
    StyleSheet,
    FlatList
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FAB } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const Detail_Page=()=>{
    const [formNull , setFormNull] = useState(false);
    const [detailData , setDetailData] = useState({});
    const [selectedIMGS , setSelectedIMGS] = useState([]);

    const getFormDetailData = () => {
        AsyncStorage.getItem("formDetail").then(value => {
            if (value !== null) {
                  let formDetailData = JSON.parse(value);
                  console.log('formDetailData >>', formDetailData);
                  setDetailData(formDetailData);
            }
            else {
                // console.log('Asynstorage Data >>', value);
                setFormNull(true)
            }
        })
     if(formNull != true){
        AsyncStorage.getItem("selectedIMGS").then(value => {
            if (value !== null) {
                  let selectedImgs = JSON.parse(value);
                  console.log('selectedIMGS >>', selectedImgs);
                  setSelectedIMGS(selectedImgs);
            }
        })
     }
    }

useEffect(()=>{
    getFormDetailData()
},[])

const Item = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Image
               source={{uri:item.path}}
               style={{height:140 , width:140}}
               resizeMode="cover"
            />
            <View style={{flexDirection:'row'}}>
             <Text>Supplier : </Text>
             <Text>{detailData.supplier}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
             <Text>Style : </Text>
             <Text>{detailData.style1}</Text>
            </View>
            <View style={{flexDirection:'row'}}>
             <Text>Location : </Text>
             <Text>{detailData.location}</Text>
            </View>
        </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item item={item} />
  );

 return(
     <View style={{justifyContent:'space-between', flex:1}}>
       {formNull == true ? 
       <View style={styles.notFound}>
           <Text style={styles.noFoundTitle}>No Data Found....</Text>
       </View>
       :
       <FlatList
       style={{alignSelf:'center'}}
       data={selectedIMGS}
       numColumns={2}
       renderItem={renderItem}
       keyExtractor={item => item.key}
       />
     }
     {formNull != true && (
     <View style={{margin:28, flexDirection:"row", justifyContent:"space-between"}}>
         {/* <FAB title="WORD" placement="left" color='#808080'/>
         <FAB title="PDF" placement="right" color='#808080'/> */}
         <TouchableOpacity style={styles.btn_container}>
             <Icon name="file-word-o" size={18} color="white"/>
             <Text style={[styles.btnTxt , {marginLeft:5}]}>WORD</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.btn_container}>
             <Icon name="file-pdf-o" size={18} color="white"/>
              <Text style={[styles.btnTxt , {marginLeft:5}]}>PDF</Text>
         </TouchableOpacity>
     </View>
     )}
     </View>
 )
}

export default Detail_Page;

const styles = StyleSheet.create({
  notFound:{
    justifyContent:'center', 
    alignItems:'center',
    marginTop:'90%'
  },
  noFoundTitle:{
      fontWeight:'bold',
      fontSize:17
  },
  itemContainer:{
      justifyContent:'center',
      borderWidth:2,
      borderColor:'black',
      margin:10,
      borderRadius:7,
      padding:5
  },
  btn_container:{
     flexDirection:'row',
     width: 85,  
     height: 45,   
    borderRadius: 30,            
    backgroundColor: '#808080',  
    alignItems:'center',
    justifyContent:'center',
    padding:5,
    shadowColor: '#696969',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 7,
    elevation: 5,
    
  },
  btnTxt:{
      fontWeight:'bold',
      color:'white'
  }
})
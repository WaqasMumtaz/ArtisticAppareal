/* eslint-disable prettier/prettier */
import { Alert, StyleSheet,Dimensions,Platform} from 'react-native';
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: '#307ecc',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#808080',
    borderWidth: 0,
    color: '#FFF',
    borderColor: '#808080',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight:'bold'
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#808080',
  },
  registerTextStyle: {
    color: '#808080',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  registerText:{
    color: '#307ecc',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft:5
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  registerTextContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  errorInput:{
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'red',
  },
  instructionContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  instructionStyle:{
    fontSize:11,
    color:'#FF6200',
  },
  
  });

  export default styles;
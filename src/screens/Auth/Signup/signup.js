/* eslint-disable prettier/prettier */

//Import React and Hook we needed
import React, { useState, useEffect, useRef } from 'react';
import styles from './CSS/style';
// import { RadioButton } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import logo from '../../../Assets/logo.png';
import Logo from '../../../Components/Logo';
// import HttpUtilsFile from '../../Services/HttpUtils';
import Icon from 'react-native-vector-icons/FontAwesome';



//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Loader from '../../../Components/Loader';

const Signup = props => {

  const { goBack , navigate } = props.navigation;


  let [userName, setUserName] = useState('');
  let [userEmail, setUserEmail] = useState('');
  let [emailValid, setEmailValid] = useState(true);
  let [emailError, setEmailError] = useState(false);
  let [userPassword, setUserPassword] = useState('');
  let [passwrdValid, setPasswrdValid] = useState(false);
  let [userAddress, setUserAddress] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');
  const [mobileNo, setMobileNo] = useState(0);
  const [validMobile, setValidMobile] = useState(false);
  const [countryCode, setCountryCode] = useState(0);
  const [startNumber, setStartNumber] = useState(false);
  let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
  const [userSelectType, setUserSelectType] = useState('buyer');
  const phone = useRef(null);

  const handleSubmitButton = async () => {
  //  setErrortext('');
  //  navigate('Home');
   // return;
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!setUserPassword) {
      alert('Please fill password');
      return;
    }
    if (!mobileNo) {
      alert('Please fill mobile number');
      return;
    }
    if (validMobile !== true) {
      alert('Please enter correct mobile number');
      return;
    }
    if (emailValid !== true) {
      alert('Please enter correct email');
      return;
    }
    if (passwrdValid !== false) {
      alert('Please enter required password length');
      return;
    }
    setIsRegistraionSuccess(true);
    //alert('Successfully Register')
    // try {

    //   //Show Loader
    // //  setLoading(true);
    //   const dataToSend = {
    //     status: 'pending',
    //     role: userSelectType,
    //     name: userName,
    //     email: userEmail,
    //     password: userPassword,
    //     mobile: mobileNo,
    //   };
    //   // const userData = await HttpUtilsFile.post('signup', dataToSend);
    //   // console.log('Api user data response >>', userData);
    //   // if (userData.code === 200) {
    //   //   setLoading(false);
    //   //   setIsRegistraionSuccess(true);

    //   // }
    //   // else if (userData.error === 'Email in use') {
    //   //   setLoading(false);
    //   //   setEmailError(true);
    //   // }
    // }
    // catch (error) {
    //   console.log('Error Catch Method');
    // }


  };
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}>
        {/* <Image
          source={logo}
          style={{ height: 150, resizeMode: 'contain', alignSelf: 'center' }}
        /> */}
        <View style={styles.checkContainer}>
        <Icon name="check" size={100} color="#32CD32" />
        <Text style={styles.successTextStyle}>Registration Successful.</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const validate = (text) => {
    //console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      //console.log("Email is Not Correct");
      setUserEmail(text);
      setEmailValid(false);
      return false;
    }
    else {
      setUserEmail(text);
      setEmailValid(true);
      //console.log("Email is Correct");
    }
  };

  const passwordValidate = (text) => {
    setUserPassword(text);
    if (userPassword.length < 3) {
      setPasswrdValid(true);
      return true;
    }
    else {
      setPasswrdValid(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Loader loading={loading} />
      <ScrollView keyboardShouldPersistTaps="handled">
        <Logo/>
        <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between' }}>
          {/* <Text style={{ marginTop: 7, fontSize: 16, fontWeight: 'bold' }}>Register as a </Text>
          <View style={{ flexDirection: 'row' }}>
            <RadioButton
              value={userSelectType}
              status={userSelectType === 'buyer' ? 'checked' : 'unchecked'}
              onPress={() => setUserSelectType('buyer')}
              color="#7DE24E"
            />
            <Text style={[userSelectType !== 'buyer' ? styles.unCheck : styles.check]}>Buyer</Text>
            <RadioButton
              value={userSelectType}
              status={userSelectType === 'seller' ? 'checked' : 'unchecked'}
              onPress={() => setUserSelectType('seller')}
              color="#7DE24E"
            />
            <Text style={[userSelectType !== 'seller' ? styles.unCheck : styles.check]}>Seller</Text>
          </View> */}
          {/* <View style={{ flexDirection: 'row', marginRight: 5 }}>

          </View> */}
        </View>

        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={UserName => setUserName(UserName)}
              // underlineColorAndroid="#FFFFFF"
              placeholder="Enter Name"
              placeholderTextColor="#808080"
              autoCapitalize="sentences"
              returnKeyType="next"
              // onSubmitEditing={() =>
              //   this._emailinput && this._emailinput.focus()
              // }
              value={userName}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={[styles.inputStyle, emailValid !== true ? styles.errorInput : null]}
              onChangeText={value => validate(value)}
              // underlineColorAndroid="#F6F6F7"
              placeholder="Enter Email"
              placeholderTextColor="#808080"
              keyboardType="email-address"
              // ref={ref => {
              //   this._emailinput = ref;
              // }}
              value={userEmail}
              autoCapitalize="none"
              autoCorrect={false}
              // onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
              blurOnSubmit={false}
            />
          </View>
          {
            emailError !== false ?
              <View style={styles.instructionContainer}>
                <Text style={styles.instructionStyle}>This email is already in use</Text>
              </View>
              :
              null
          }
          <View style={styles.SectionStyle}>
            <TextInput
              style={[styles.inputStyle, passwrdValid !== false ? styles.errorInput : null]}
              onChangeText={value => passwordValidate(value)}
              // underlineColorAndroid="#F6F6F7"
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#808080"

              // ref={ref => {
              //   this._ageinput = ref;
              // }}
              value={userPassword}
              // onSubmitEditing={() =>
              //   this._addressinput && this._addressinput.focus()
              // }
              blurOnSubmit={false}
            />

          </View>
          {passwrdValid !== false ?
            <View style={styles.instructionContainer}>
              <Text style={styles.instructionStyle}>Password strength is required maximum 4 </Text>
            </View>
            :
            null
          }
          <View style={styles.SectionStyle}>
            <PhoneInput
              ref={phone}
              allowZeroAfterCountryCode={false}
              textProps={{ placeholder: 'Mobile number', placeholderTextColor: '#808080' }}
              onChangePhoneNumber={() => {
                setMobileNo(phone.current.getValue()),
                  setValidMobile(phone.current.isValidNumber()),
                  setStartNumber(true);
              }
              }
              // onChangePhoneNumber={()=>setValidMobile(phone.current.isValidNumber())}
              onSelectCountry={() => setCountryCode(phone.current.getCountryCode())}
              value={mobileNo}
              style={[styles.inputStyle,
              validMobile !== true && startNumber !== false ? styles.errorInput
                : null]}


            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
          <View style={styles.registerTextContainer}>
              <Text
                style={styles.registerTextStyle}
              >
                If Already Register ?
            </Text>
              <Text
                style={styles.registerText}
                onPress={() => goBack()}>
                Login
            </Text>
            </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
export default Signup;


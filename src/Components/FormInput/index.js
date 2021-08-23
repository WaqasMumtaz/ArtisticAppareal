/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View , TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  value,
  style,
  maxLength,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      // leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
      // leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor="grey"
      name={name}
      value={value}
      placeholder={placeholder}
      style={style}
      keyboardType={keyboardType}
      maxLength={maxLength}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    margin: 15,
  },
  iconStyle: {
    marginRight: 10,
  },
  
});

export default FormInput;

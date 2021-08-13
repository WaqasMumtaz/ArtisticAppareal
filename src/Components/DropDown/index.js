import React, { useState } from 'react';
import { View, StyleSheet, Platform, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function DropDown({
  placeholder,
  list,
  onChange,
  value,
  noTitle,
  searchable,
  multiple,
  disabled,
  multipleText,
  selected,
  multiValue,
  open,
  onPress,
  valueSet,
  zIndex,dropDownMaxHeight
}) {
   
  console.log('multiple of dropdown ******---------------------->>>>>>>>>', list);
  
  return (
    <View
      style={{
        flex: 1,
        // marginTop: 5,
        ...(Platform.OS !== 'android' && {
          zIndex: 5000,
        }),
      }}>
      {!noTitle && <Text style={{ marginLeft: 5 }}>{placeholder}</Text>}
      <DropDownPicker
        items={list}
        placeholder={placeholder}
        containerStyle={{ height:45, margin: 5, marginTop: 1, }}
        dropDownMaxHeight={dropDownMaxHeight ? dropDownMaxHeight: 120}
        value={value}
        defaultValue={value}
        min={0}
        max={5}
        multipleText={multipleText}
        dropDownMaxHeight={150}
        setValue={valueSet}
        onChangeItem={(item) => 
           console.log('********** item >>', item)
          }
       // disabled={disabled}
        // searchable={searchable === true}
        multiple={multiple}
        selected={selected}
        open={open}
        onPress={onPress}
      />
    </View>
  );
}

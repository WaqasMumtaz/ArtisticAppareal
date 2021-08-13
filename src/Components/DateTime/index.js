import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = ({ onChange, name , getDateType,...rest}) => {
  const [pickerMode, setPickerMode] = useState(null);

  const showDatePicker = () => {
    setPickerMode(getDateType);
  };

  const hidePicker = () => {
    setPickerMode(null);
  };

  const handleConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    hidePicker();
    let t = date;
    onChange(t);
  };

  // React.useEffect(() => {
    // setPickerMode(getDateType)
  // }, []);
  console.log(getDateType, "getDateType", rest)
  return (
    <View style={style.root}>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#D3D3D3',
          // margin: 5,
          padding: 5,
          borderRadius: 5,
        }}
        onPress={showDatePicker}>
        <Text style={{ textAlign: 'center', fontSize: 16, color: 'blue'}}>
          {name ? name : 'Select Date'}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={pickerMode !== null}
        mode={getDateType}
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
});

export default DatePicker;

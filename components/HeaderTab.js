/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export default function HeaderTab() {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderText
        text={'Delivery'}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderText
        text={'Pickup'}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderText = props => {
  const {text, activeTab, setActiveTab} = props;
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {backgroundColor: activeTab === text ? '#000' : '#FFF'},
      ]}
      onPress={() => {
        setActiveTab(text);
      }}>
      <Text
        style={[styles.btnText, {color: activeTab === text ? '#FFF' : '#000'}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btnText: {
    fontSize: 15,
    fontWeight: '700',
  },
});

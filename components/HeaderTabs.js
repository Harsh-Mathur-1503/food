import {View, Text, TouchableOpacity, useState} from 'react-native';
import React from 'react';

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = React.useState('Delivery');
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flexDirection: 'row',
        alignSelf: 'center',
      }}>
      <HeaderButton
        text="Delivery"
        btnColour="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColour="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = props => (
  <TouchableOpacity
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      backgroundColor: props.activeTab === props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        color: props.activeTab === props.text ? 'white' : 'black',
        fontSize: 15,
        fontWeight: '900',
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);

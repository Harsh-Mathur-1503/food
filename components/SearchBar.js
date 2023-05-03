import {View, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginTop: 15,
        flexDirection: 'row',
      }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => {
          return (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              styles={{
                marginLeft: 15,
              }}
            />
          );
        }}
        renderRightButton={() => {
          return (
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                marginRight: 8,
                flexDirection: 'row',
                backgroundColor: 'white',
                padding: 9,
                borderRadius: 30,
                alignItems: 'center',
              }}>
              <Text>Search</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

import {View, Text} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {GOOGLE_CONSOLE_API_KEY} from '@env';

export default function SearchBar(props) {
  const {setCity} = props;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        query={{key: GOOGLE_CONSOLE_API_KEY, language: 'en'}}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          setCity(city);
          console.log('city : ', city);
        }}
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
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={20} />
          </View>
        )}
        renderRightButton={() => (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 30,
              marginRight: 9,
            }}>
            <AntDesign name="clockcircle" size={11} style={{marginRight: 5}} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

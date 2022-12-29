import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 30}}>
      <View style={{padding: 10, marginTop: 10, backgroundColor: '#fff'}}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://assets.gqindia.com/photos/62a9d4653e8cdc9b632eb2ad/master/pass/10%20restaurants%20in%20Mumbai%20that%20offer%20the%20best%20sunset%20views.jpg',
        }}
        style={{width: '100%', height: 180}}
      />
      <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}}>
        <AntDesign name="hearto" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Restaurant Name</Text>
        <Text style={{fontSize: 13, color: 'grey'}}>30-40 mins</Text>
      </View>
      <View
        style={{
          height: 30,
          width: 30,
          backgroundColor: '#eee',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>5</Text>
      </View>
    </View>
  );
};

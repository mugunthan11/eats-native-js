import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function RestaurantItem(props) {
  const {restaurantData} = props;

  return (
    <>
      {restaurantData.map((item, index) => (
        <TouchableOpacity activeOpacity={1} key={index}>
          <View style={{padding: 10, marginTop: 10, backgroundColor: '#fff'}}>
            <RestaurantImage restaurantImage={item?.image_url} />
            <RestaurantInfo
              restaurantName={item?.name}
              rating={item?.rating}
              isClosed={item?.is_closed}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = props => {
  const {restaurantImage} = props;
  return (
    <View>
      <Image
        source={{
          uri: restaurantImage,
        }}
        style={{width: '100%', height: 180}}
      />
      <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}}>
        <AntDesign name="hearto" size={25} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantInfo = props => {
  const {restaurantName, rating, isClosed} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{restaurantName}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 13, color: 'grey'}}>30-40 mins</Text>
          <View>
            <Text
              style={{
                fontSize: 13,
                paddingHorizontal: 15,
                color: isClosed ? 'red' : 'green',
              }}>
              {isClosed ? 'Closed' : 'Opened'}
            </Text>
          </View>
        </View>
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
        <Text>{rating}</Text>
      </View>
    </View>
  );
};

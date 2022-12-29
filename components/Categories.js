/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';

export default function Categories() {
  const items = [
    {
      image: require('../assets/images/shopping-bag.png'),
      title: 'Pick up',
    },
    {
      image: require('../assets/images/soft-drink.png'),
      title: 'Soft drinks',
    },
    {
      image: require('../assets/images/bread.png'),
      title: 'Bakery items',
    },
    {
      image: require('../assets/images/fast-food.png'),
      title: 'Fast Food',
    },
    {
      image: require('../assets/images/desserts.png'),
      title: 'Desserts',
    },
    {
      image: require('../assets/images/coffee.png'),
      title: 'Coffee & Tea',
    },
    {
      image: require('../assets/images/deals.png'),
      title: 'Deals',
    },
  ];
  return (
    <View style={{padding: 20, backgroundColor: '#fff', marginTop: 5}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginRight: 25}}>
            <Image
              source={item.image}
              style={{height: 50, width: 50, resizeMode: 'contain'}}
            />
            <Text style={{fontWeight: '900', fontSize: 13}}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

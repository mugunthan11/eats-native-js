import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import HeaderTab from '../components/HeaderTab';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: '#FFF', padding: 15}}>
        <HeaderTab />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem />
      </ScrollView>
    </SafeAreaView>
  );
}

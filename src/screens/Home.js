import {View, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderTab from '../components/home/HeaderTab';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItem from '../components/home/RestaurantItem';
import {getRestaurant} from '../service/api';
import BottomTab from '../components/home/BottomTab';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState('NYC');
  const [activeTab, setActiveTab] = useState('Delivery');

  useEffect(() => {
    let mounted = true;
    getRestaurant(city).then(items => {
      if (mounted) {
        setRestaurantData(
          items.businesses.filter(data =>
            data.transactions.includes(activeTab.toLowerCase()),
          ),
        );
      }
    });
    return () => (mounted = false);
  }, [city, activeTab]);
  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: '#FFF', padding: 15}}>
        <HeaderTab setActiveTab={setActiveTab} activeTab={activeTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
      <BottomTab />
    </SafeAreaView>
  );
}

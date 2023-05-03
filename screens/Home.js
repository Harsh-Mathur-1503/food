import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem, {localRestaurants} from '../components/RestaurantItem';


const axios = require('axios');


export default function Home() {
  const [restaurantData, setrestaurantData] = React.useState(localRestaurants);
  const API_KEY = '7885325ad0mshc35e21f8ad91717p11b15cjsn1e443e14fbda';
  
  const encodedParams = new URLSearchParams();
  encodedParams.set('language', 'en_US');
  encodedParams.set('limit', '30');
  encodedParams.set('location_id', '201012');
  encodedParams.set('currency', 'IND');

  const getRestaurantsFromYelp = () => {
    const URL = `https://worldwide-restaurants.p.rapidapi.com/search`;
    const apiOptions = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '7885325ad0mshc35e21f8ad91717p11b15cjsn1e443e14fbda',
        'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com',
      },
      data: encodedParams,
    };
    return fetch(URL, apiOptions)
      .then(res => res.json())
      .then(json => setrestaurantData(json.businesses));
  };
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: '#EAEAEA',
        flex: 1,
      }}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'white',
          padding: 15,
        }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

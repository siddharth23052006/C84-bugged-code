import React, {Component} from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import BookDonateScreen from '../screens/BookDonateScreen';
import BookRequestScreen from '../screens/BookRequestScreen';
import {Image} from 'react-native';

export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks:{
    screen:BookDonateScreen,
    navigationOptions:{
      tabBarIcon:<Image
        source={require('../assets/request-list.png')}
        style = {{width:20, height:20}}/>,
      tabBarLabel:"Donate Book"
    }
  },
  RequestBooks:{
    screen:BookRequestScreen,
    navigationOptions:{
      tabBarIcon:<Image
        source={require('../assets/request-book.png')}
        style = {{width:20, height:20}}/>,
      tabBarLabel:"Request Book"
    }
  }
});
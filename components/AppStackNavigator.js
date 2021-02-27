import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import BookDonateScreen from '../screens/BookDonateScreen';
import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';

export const AppStackNavigator = createStackNavigator({
  BookDonateList:{
    screen:BookDonateScreen,
    navigationOptions:{headerShown:false}
  },
  ReceiverDetailsScreen:{
    screen:ReceiverDetailsScreen,
    navigationOptions:{headerShown:false}
  }
},
{
  initialRouteName:BookDonateList
});
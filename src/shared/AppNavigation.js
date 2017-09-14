import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation'
import TourListScreen from '../screens/TourList/TourList'
import TourDetail from '../screens/TourDetail/TourDetail'

const AppNavigator = StackNavigator(
  {
    TourList: { screen: TourListScreen },
    TourDetail: { screen: TourDetail }
  },
  {
    // see next line
    headerMode: 'none',
  });

export default AppNavigator
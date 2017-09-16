import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation'
import TourListScreen from '../screens/TourList/TourList'
import TourDetail from '../screens/TourDetail/TourDetail'
import TourWebList from '../screens/TourWebList/TourWebList'

const AppNavigator = StackNavigator(
  {
    TourWebList: { screen: TourWebList },
    TourList: { screen: TourListScreen },
    TourDetail: { screen: TourDetail }
  },
  {
    // see next line
    headerMode: 'none',
  });

export default AppNavigator
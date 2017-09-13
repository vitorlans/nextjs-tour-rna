import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation'
import TourListScreen from '../screens/TourList/TourList'

const AppNavigator = StackNavigator(
  {
    Home: { 
            screen: TourListScreen, 
          }
    },
    {
        // see next line
        headerMode: 'none',
    });

export default AppNavigator
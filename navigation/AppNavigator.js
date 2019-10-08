import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import screenIds from './screenIds';
import PlayScreen from '../screens/PlayScreen/PlayScreen';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';

export default createAppContainer(
  createStackNavigator(
    {
      [screenIds.PLAY]: PlayScreen,
      [screenIds.HISTORY]: HistoryScreen
    },
    {
      defaultNavigationOptions:{
        header: null
      }
    }
  )
);

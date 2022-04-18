/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import {
  TransitionPresets,
  createStackNavigator,
} from 'react-navigation-stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

import Header from './components/Header';

import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },

    {
      defaultNavigationOptions: (navigation) => ({
        header: () => <Header {...navigation} />,
        cardStyle: {
          backgroundColor: colors.dark,
        },
        gestureEnabled: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }),
    }
  )
);

export default Routes;

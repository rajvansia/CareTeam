import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import HealthCard from '../screens/HealthCard';
import CareList from '../CareList'
import CareTeam from '../screens/CareTeam'
import CarePlan from '../screens/CarePlan'
import Login from '../screens/Login'
export const MeStack = StackNavigator({

  Me: {
    screen: Me,
    navigationOptions: {
    },




  },
});
export const CareListStack = StackNavigator({
  CareList: {
    screen: CareList,
    navigationOptions: {
      title: 'Care Dashboard',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `Details`,
    }),
  },
});


export const Tabs = TabNavigator({
  HealthCard: {
    screen: CareListStack,
    navigationOptions: {
      tabBarLabel: 'Health Card',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  CarePlan: {
    screen: CareTeam,
    navigationOptions: {
      tabBarLabel: 'Care Team',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Profile: {
    screen: MeStack,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },

});





export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: Settings,
  },

  CareTeam: {
    screen: Feed,
    navigationOptions: ({ navigation }) => ({
      title: `User`,
    }),
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

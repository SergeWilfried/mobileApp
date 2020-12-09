import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Wallet from 'screens/Wallet';

import WalletIcon from 'assets/icons/tabBar/wallet.svg';
import SavingsIcon from 'assets/icons/tabBar/savings.svg';
import SendIcon from 'assets/icons/tabBar/send.svg';
import AirtimeIcon from 'assets/icons/tabBar/airtime.svg';
import MoreIcon from 'assets/icons/tabBar/more.svg';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <Tab.Navigator initialRouteName="Wallet">
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: WalletIcon,
        }}
      />
      <Tab.Screen
        name="Savings"
        component={Wallet}
        options={{
          tabBarLabel: 'Savings',
          tabBarIcon: SavingsIcon,
        }}
      />
      <Tab.Screen
        name="Send"
        component={Wallet}
        options={{
          tabBarLabel: 'Send',
          tabBarIcon: SendIcon,
        }}
      />
      <Tab.Screen
        name="Airtime"
        component={Wallet}
        options={{
          tabBarLabel: 'Airtime',
          tabBarIcon: AirtimeIcon,
        }}
      />
      <Tab.Screen
        name="More"
        component={Wallet}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: MoreIcon,
        }}
      />
    </Tab.Navigator>
  );
}

function AppScreens() {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>
  );
}

export default AppScreens;

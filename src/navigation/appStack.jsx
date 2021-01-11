import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';

import Wallet from 'screens/Wallet';
import DepositMoney from 'screens/DepositMoney';
import ConfirmMobileDeposit from 'screens/ConfirmMobileDeposit';
import ConfirmCardDeposit from 'screens/ConfirmCardDeposit';
import MainHeader from 'components/MainHeader';

import WalletIcon from 'assets/icons/tabBar/wallet.svg';
import SavingsIcon from 'assets/icons/tabBar/savings.svg';
import SendIcon from 'assets/icons/tabBar/send.svg';
import AirtimeIcon from 'assets/icons/tabBar/airtime.svg';
import MoreIcon from 'assets/icons/tabBar/more.svg';

import styles from './navigation.styles';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DepositStack = createStackNavigator();

function DepositScreens() {
  return (
    <DepositStack.Navigator
      screenOptions={{
        header: MainHeader,
      }}
    >
      <DepositStack.Screen
        name="DepositMoney"
        component={DepositMoney}
        options={{
          title: 'Top up my Wallet',
          subTitle: 'Choose a deposit method',
        }}
      />
    </DepositStack.Navigator>
  );
}

function Dashboard() {
  return (
    <Tab.Navigator initialRouteName="Wallet">
      <Tab.Screen
        name="Wallet"
        component={DepositScreens}
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
    <>
      <SafeAreaView style={styles.statusBar} />
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Dashboard" component={Dashboard} />
        <AppStack.Screen
          name="ConfirmMobileDeposit"
          component={ConfirmMobileDeposit}
        />
        <AppStack.Screen
          name="ConfirmCardDeposit"
          component={ConfirmCardDeposit}
        />
      </AppStack.Navigator>
    </>
  );
}

export default AppScreens;

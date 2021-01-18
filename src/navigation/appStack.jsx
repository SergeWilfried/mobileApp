import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';

import * as constants from 'helpers/constants';

import Homepage from 'screens/Homepage';
import Wallet from 'screens/Wallet';
import DepositMoney from 'screens/DepositMoney';
import ConfirmMobileDeposit from 'screens/ConfirmMobileDeposit';
import ConfirmCardDeposit from 'screens/ConfirmCardDeposit';
import SelectCards from 'screens/SelectCards';

import Congratulations from 'components/Congratulations';
import MainHeader from 'components/MainHeader';
import TabBarIcon from 'components/TabBarIcon';
import TabBarLabel from 'components/TabBarLabel';

import WalletIcon from 'assets/icons/tabBar/wallet.svg';
import SavingsIcon from 'assets/icons/tabBar/savings.svg';
import SendIcon from 'assets/icons/tabBar/send.svg';
import AirtimeIcon from 'assets/icons/tabBar/airtime.svg';
import MoreIcon from 'assets/icons/tabBar/more.svg';

import colors from 'themes/colors';

import styles from './navigation.styles';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DepositStack = createStackNavigator();

function DepositScreens() {
  return (
    <DepositStack.Navigator
      screenOptions={{
        header: (props) => <MainHeader {...props} />,
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
      <DepositStack.Screen
        name="SelectCards"
        component={SelectCards}
        options={{
          title: 'Debit Card Top up',
          subTitle: 'Choose a debit card',
        }}
      />
    </DepositStack.Navigator>
  );
}

function Dashboard() {
  return (
    <Tab.Navigator
      initialRouteName={constants.NAVBAR_ICONS.WALLET}
      tabBarOptions={{
        tabStyle: styles.tabNavigation,
        style: styles.bottomNavigation,
      }}
    >
      <Tab.Screen
        name={constants.NAVBAR_ICONS.WALLET}
        component={DepositScreens}
        options={{
          tabBarLabel: (label) => (
            <TabBarLabel
              focused={label.focused}
              text={constants.NAVBAR_ICONS.WALLET}
            />
          ),
          tabBarIcon: (icon) => (
            <TabBarIcon focused={icon.focused} icon={WalletIcon} />
          ),
        }}
      />
      <Tab.Screen
        name={constants.NAVBAR_ICONS.SAVINGS}
        component={Wallet}
        options={{
          tabBarLabel: (label) => (
            <TabBarLabel
              focused={label.focused}
              text={constants.NAVBAR_ICONS.SAVINGS}
            />
          ),
          tabBarIcon: (icon) => (
            <TabBarIcon focused={icon.focused} icon={SavingsIcon} />
          ),
        }}
      />
      <Tab.Screen
        name={constants.NAVBAR_ICONS.SEND}
        component={Wallet}
        options={{
          tabBarLabel: (label) => (
            <TabBarLabel
              focused={label.focused}
              text={constants.NAVBAR_ICONS.SEND}
            />
          ),
          tabBarIcon: (icon) => (
            <TabBarIcon focused={icon.focused} icon={SendIcon} />
          ),
        }}
      />
      <Tab.Screen
        name={constants.NAVBAR_ICONS.AIRTIME}
        component={Wallet}
        options={{
          tabBarLabel: (label) => (
            <TabBarLabel
              focused={label.focused}
              text={constants.NAVBAR_ICONS.AIRTIME}
            />
          ),
          tabBarIcon: (icon) => (
            <TabBarIcon focused={icon.focused} icon={AirtimeIcon} />
          ),
        }}
      />
      <Tab.Screen
        name={constants.NAVBAR_ICONS.MORE}
        component={Wallet}
        options={{
          tabBarLabel: (label) => (
            <TabBarLabel
              focused={label.focused}
              text={constants.NAVBAR_ICONS.MORE}
            />
          ),
          tabBarIcon: (icon) => (
            <TabBarIcon focused={icon.focused} icon={MoreIcon} />
          ),
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
        <AppStack.Screen name="Congratulations" component={Congratulations} />
      </AppStack.Navigator>
    </>
  );
}

export default AppScreens;

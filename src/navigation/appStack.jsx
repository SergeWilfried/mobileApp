import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native';

import * as constants from 'helpers/constants';

import Homepage from 'screens/Homepage';
import Wallet from 'screens/Wallet';
import DepositMoneyMethods from 'screens/DepositMoneyMethods';
import ConfirmMobileDeposit from 'screens/ConfirmMobileDeposit';
import ConfirmCardDeposit from 'screens/ConfirmCardDeposit';
import ConfirmSendMoney from 'screens/ConfirmSendMoney';
import SelectCards from 'screens/SelectCards';
import ChooseProvider from 'screens/ChooseProvider';
import SendMoneyMethod from 'screens/SendMoneyMethod';
import SavedPhoneNumbers from 'screens/SavedPhoneNumbers';
import ChooseContact from 'screens/ChooseContact';

import Congratulations from 'components/Congratulations';
import MainHeader from 'components/MainHeader';
import TabBarIcon from 'components/TabBarIcon';
import TabBarLabel from 'components/TabBarLabel';

import WalletIcon from 'assets/icons/tabBar/wallet.svg';
import SavingsIcon from 'assets/icons/tabBar/savings.svg';
import SendIcon from 'assets/icons/tabBar/send.svg';
import AirtimeIcon from 'assets/icons/tabBar/airtime.svg';
import MoreIcon from 'assets/icons/tabBar/more.svg';

import styles from './navigation.styles';

const AppStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const DepositStack = createStackNavigator();

function DepositMoneyScreens() {
  return (
    <DepositStack.Navigator
      screenOptions={{
        header: (props) => <MainHeader {...props} />,
      }}
    >
      <DepositStack.Screen
        name="Homepage"
        component={Homepage}
        options={{ header: () => null }}
      />
      <DepositStack.Screen
        name="DepositMoneyMethods"
        component={DepositMoneyMethods}
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
      <DepositStack.Screen
        name="SavedPhoneNumbers"
        component={SavedPhoneNumbers}
        options={{
          title: 'Mobile Money Top up',
          subTitle: 'Choose your mobile number',
        }}
      />
    </DepositStack.Navigator>
  );
}

function SendMoneyScreens() {
  return (
    <DepositStack.Navigator
      screenOptions={{
        header: (props) => <MainHeader {...props} />,
      }}
    >
      <DepositStack.Screen
        name="SendMoneyMethod"
        component={SendMoneyMethod}
        options={{
          title: 'Send Money',
          subTitle: 'How would you like to send money?',
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
        component={DepositMoneyScreens}
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
        component={SendMoneyScreens}
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
        <AppStack.Screen name="ConfirmSendMoney" component={ConfirmSendMoney} />
        <AppStack.Screen name="ChooseProvider" component={ChooseProvider} />
        <AppStack.Screen name="ChooseContact" component={ChooseContact} />
        <AppStack.Screen name="Congratulations" component={Congratulations} />
      </AppStack.Navigator>
    </>
  );
}

export default AppScreens;

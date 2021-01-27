import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  PermissionsAndroid,
  Platform,
  View,
  ScrollView,
} from 'react-native';
import Contacts from 'react-native-contacts';
import PropTypes from 'prop-types';

import { getInitials } from 'helpers/utils.helper';

import Text from 'components/Text';
import MainHeader from 'components/MainHeader';
import DismissKeyboard from 'components/DismissKeyboard';
import Contact from 'components/Contact';

import styles from './ChooseContact.styles';

function ChooseProvider({ navigation }) {
  const [listPhoneContacts, getListPhoneContacts] = useState([]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      }).then(() =>
        Contacts.getAll().then((contacts) => {
          getListPhoneContacts(contacts);
        }),
      );
    } else {
      Contacts.getAll().then((contacts) => {
        getListPhoneContacts(contacts);
      });
    }
  }, [getListPhoneContacts]);

  return (
    <DismissKeyboard>
      <MainHeader
        title="Send Money"
        subTitle="Who would you like to pay?"
        navigation={navigation}
      />
      <SafeAreaView style={styles.screen}>
        <ScrollView>
          <Text style={styles.title}>RECENT</Text>
          {listPhoneContacts.map(({ familyName, givenName }, index) => (
            <Contact
              isLastContact={index === listPhoneContacts.length - 1}
              icon={getInitials(familyName)}
              onCardClick={() => {}}
              key={familyName}
            >
              <View style={styles.cardContent}>
                <Text style={styles.phoneContactName}>{familyName}</Text>
                <Text style={styles.duniaContactName}>{givenName}</Text>
              </View>
            </Contact>
          ))}
          <Text style={[styles.title, styles.titleContainer]}>
            ALL CONTACTS
          </Text>
          {listPhoneContacts.map(({ familyName, givenName }, index) => (
            <Contact
              isLastContact={index === listPhoneContacts.length - 1}
              icon={getInitials(familyName)}
              onCardClick={() => {}}
              key={familyName}
            >
              <View style={styles.cardContent}>
                <Text style={styles.phoneContactName}>{familyName}</Text>
                <Text style={styles.duniaContactName}>{givenName}</Text>
              </View>
            </Contact>
          ))}
        </ScrollView>
      </SafeAreaView>
    </DismissKeyboard>
  );
}

ChooseProvider.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ChooseProvider;

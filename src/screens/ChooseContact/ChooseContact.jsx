import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  PermissionsAndroid,
  Platform,
  ScrollView,
} from 'react-native';
import Contacts from 'react-native-contacts';
import PropTypes from 'prop-types';

import { SEND_FLOW } from 'helpers/constants';

import MainHeader from 'components/MainHeader';
import DismissKeyboard from 'components/DismissKeyboard';
import NoContact from 'components/NoContact';
import ContactServerList from './components/ContactServerList';

import styles from './ChooseContact.styles';

function ChooseContact({ navigation, route }) {
  const { sendFlow } = route.params;
  const [listPhoneContacts, setListPhoneContacts] = useState([]);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      }).then(() =>
        Contacts.getAllWithoutPhotos().then((contacts) => {
          setListPhoneContacts(contacts);
        }),
      );
    } else {
      Contacts.getAllWithoutPhotos().then((contacts) => {
        setListPhoneContacts(contacts);
      });
    }
  }, [setListPhoneContacts]);

  return (
    <DismissKeyboard>
      <MainHeader
        title="Send Money"
        subTitle={listPhoneContacts.length ? 'Who would you like to pay?' : ''}
        navigation={navigation}
      />
      {listPhoneContacts.length ? (
        <SafeAreaView style={styles.screen}>
          <ScrollView>
            <ContactServerList
              title="RECENT"
              listPhoneContacts={listPhoneContacts}
              navigation={navigation}
              sendFlow={sendFlow}
            />
            <ContactServerList
              title="ALL CONTACTS"
              listPhoneContacts={listPhoneContacts}
              navigation={navigation}
              sendFlow={sendFlow}
            />
          </ScrollView>
        </SafeAreaView>
      ) : (
        <NoContact
          title="No contacts"
          subTitle="No one from your contacts use DuniaPay."
        />
      )}
    </DismissKeyboard>
  );
}

ChooseContact.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      sendFlow: PropTypes.oneOf(Object.values(SEND_FLOW)),
    }),
  }).isRequired,
};

export default ChooseContact;

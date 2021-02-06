import React, { useCallback } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { getInitials } from 'helpers/utils.helper';
import { SEND_FLOW } from 'helpers/constants';

import Text from 'components/Text';
import Contact from 'components/Contact';

import styles from './ContactServerList.styles';

function ContactServerList({ title, listPhoneContacts, navigation, sendFlow }) {
  const handleContactClick = useCallback(
    (givenName) => {
      if (sendFlow === SEND_FLOW.DUNIAPAY) {
        navigation.navigate('SendDuniaMoney', {
          phoneContactName: givenName,
          duniapayName: givenName,
        });
      }
      if (sendFlow === SEND_FLOW.MOBILE) {
        navigation.navigate('SendMobileMoney', {
          phoneContactName: givenName,
          duniapayName: givenName,
        });
      }
    },
    [navigation],
  );

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      {listPhoneContacts.map(({ givenName, recordID }, index) => (
        <Contact
          isLastContact={index === listPhoneContacts.length - 1}
          icon={getInitials(givenName)}
          onContactClick={() => {
            handleContactClick(givenName);
          }}
          key={recordID}
        >
          <View style={styles.cardContent}>
            <Text style={styles.phoneContactName}>{givenName}</Text>
            <Text style={styles.duniaContactName}>{givenName}</Text>
          </View>
        </Contact>
      ))}
    </>
  );
}

ContactServerList.propTypes = {
  listPhoneContacts: PropTypes.arrayOf(
    PropTypes.shape({
      givenName: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string,
  sendFlow: PropTypes.oneOf(Object.values(SEND_FLOW)).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

ContactServerList.defaultProps = {
  title: '',
};

export default ContactServerList;

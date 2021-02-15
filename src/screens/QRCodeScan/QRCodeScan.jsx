import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { View } from 'react-native';

import { getInitials } from 'helpers/utils.helper';
import ApiError from 'helpers/api/api.error';
import * as userApi from 'resources/user/user.api';

import Contact from 'components/Contact';
import MainHeader from 'components/MainHeader';
import Text from 'components/Text';

import styles from './QRCodeScan.styles';

function QRCodeScan({ navigation }) {
  const [isScanResult, setScanResult] = useState(false);
  const [error, setError] = useState('');
  const [userDataFromServer, setUserDataFromServer] = useState({});

  const handleContactClick = useCallback(() => {
    navigation.navigate('SendDuniaMoney', {
      phoneContactName: userDataFromServer.username,
      duniapayName: userDataFromServer.phoneNumber,
    });
  }, [navigation, userDataFromServer]);

  const onSuccess = useCallback(
    async (e) => {
      try {
        if (!e.data) {
          setError('Not Found');
        } else {
          const userData = await userApi.getUserData({
            userId: e.data,
          });
          setUserDataFromServer(userData);
          setScanResult(true);
        }
      } catch (err) {
        if (err instanceof ApiError) {
          setError(err.data.user);
          setScanResult(true);
        } else {
          throw err;
        }
      }
    },
    [setUserDataFromServer, setScanResult, setError],
  );

  return (
    <>
      <MainHeader title="Scan QR Code" navigation={navigation} />
      <View style={styles.screen}>
        <QRCodeScanner
          showMarker
          onRead={onSuccess}
          markerStyle={styles.marker}
          cameraStyle={styles.camera}
        />
        {isScanResult ? (
          <View style={styles.contactContainer}>
            <Contact
              icon={getInitials(error || userDataFromServer.username)}
              onContactClick={error ? () => {} : handleContactClick}
              isDivideLine={false}
            >
              <View style={styles.cardContent}>
                <Text style={styles.phoneContactName}>
                  {error || userDataFromServer.username}
                </Text>
                <Text style={styles.duniaContactName}>
                  {error
                    ? 'Merchant is not DuniaPay’s user'
                    : userDataFromServer.phoneNumber}
                </Text>
              </View>
            </Contact>
          </View>
        ) : null}
      </View>
    </>
  );
}

QRCodeScan.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default QRCodeScan;

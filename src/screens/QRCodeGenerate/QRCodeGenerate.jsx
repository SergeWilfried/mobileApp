import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import QRCode from 'react-native-qrcode-svg';

import * as userSelectors from 'resources/user/user.selectors';
import { getSizeQrCode } from 'helpers/utils.helper';

import MainHeader from 'components/MainHeader';

import styles from './QRCodeGenerate.styles';

function QRCodeGenerate() {
  const userData = useSelector(userSelectors.getUserData);

  return (
    <>
      <MainHeader title="Receive Money" subTitle="Scan your QR code" />
      <SafeAreaView style={styles.screen}>
        <QRCode value={userData._id} size={getSizeQrCode()} />
      </SafeAreaView>
    </>
  );
}

QRCodeGenerate.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default QRCodeGenerate;

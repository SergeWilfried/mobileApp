import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View } from 'react-native';

import AuthHeaderLayout from 'components/AuthHeaderLayout';
import Text from 'components/Text';
import Button from 'components/Button';
import AuthHeader from 'components/AuthHeader';

import VerifyIdentityIcon from 'assets/icons/verifyIdentity.svg';

import styles from './KYCPreamble.styles';

function KYCPreamble() {
  const listItems = [
    {
      id: 1,
      icon: VerifyIdentityIcon,
      title: 'Verify your identity in minutes. You just need your ID to do it',
    },
    {
      id: 2,
      icon: VerifyIdentityIcon,
      title: 'Increase the security of your account',
    },
    {
      id: 3,
      icon: VerifyIdentityIcon,
      title: 'Increase the limit of your transactions to above 25,000',
    },
  ];

  return (
    <SafeAreaView style={styles.screen}>
      <AuthHeaderLayout>
        <AuthHeader
          withLogo
          title="Verify your identity"
          subtitle="Get verified to increase your deposit limits in DuniaPay"
        />
      </AuthHeaderLayout>
      <View style={styles.itemContainer}>
        {listItems.map(({ id, title, icon: Icon }) => (
          <View key={id} style={styles.listItemInfo}>
            <Icon />
            <Text style={styles.listItemTitle}>{title}</Text>
          </View>
        ))}
      </View>
      <Button title="Get started" onPress={() => {}} style={styles.button} />
    </SafeAreaView>
  );
}

KYCPreamble.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default KYCPreamble;

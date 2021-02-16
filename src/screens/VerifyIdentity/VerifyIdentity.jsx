import React, { useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import PropTypes from 'prop-types';

import AuthHeader from 'components/AuthHeader';
import AuthHeaderLayout from 'components/AuthHeaderLayout';
import Button from 'components/Button';

import ListItem from './components/ListItem';
import styles from './VerifyIdentity.styles';

function VerifyIdentity({ navigation }) {
  const handlePress = useCallback(() => {
    navigation.navigate('VerifyDetails');
  }, [navigation]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.screen}>
        <AuthHeaderLayout>
          <AuthHeader
            title="Verify your identity"
            subtitle="Get verified to increase your deposit limits in DuniaPay"
            withLogo
          />
        </AuthHeaderLayout>
        <View>
          <ListItem title="Verify your identity in minutes. You just need your ID to do it." />
          <ListItem title="Increase the security of your account." />
          <ListItem title="Increase the limit of your transactions to above 25,000." />
        </View>
        <Button onPress={handlePress} title="Get Started" />
      </View>
    </SafeAreaView>
  );
}

VerifyIdentity.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default VerifyIdentity;

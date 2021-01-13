import React from 'react';
import {
  View, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';

import Text from 'components/Text';

import styles from './HomepageNavbar.styles';

function HomepageNavbar({
  avatarUrl, username,
}) {
  const getInitials = (name) => {
    const initials = name.substring(0, 1).toUpperCase();
    if (username.length > 1) {
      return username.substring(0, 2).toUpperCase();
    }
    return initials;
  };

  return (
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.profileContainer} onPress={() => {}}>
        {avatarUrl ? (
          <Image
            source={{ uri: avatarUrl }}
          />
        ) : (
          <Text>
            {getInitials(username)}
          </Text>
        )}
      </TouchableOpacity>
      <Text style={styles.text}>₣ 3,588</Text>
    </View>
  );
}

HomepageNavbar.propTypes = {
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
};

HomepageNavbar.defaultProps = {
  username: '',
  avatarUrl: '',
};

export default HomepageNavbar;

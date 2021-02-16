import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Switch,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import { PERMISSIONS } from 'react-native-permissions';

import Text from 'components/Text';

import PersonalInfoIcon from 'assets/icons/personalInfo.svg';
import ActiveNotificationsIcon from 'assets/icons/activeNotifications.svg';
import HideBalanceIcon from 'assets/icons/hideBalance.svg';
import TouchIdIcon from 'assets/icons/touchId.svg';
import VerifyIdentityIcon from 'assets/icons/verifyIdentity.svg';
import ResetPasswordIcon from 'assets/icons/resetPassword.svg';
import AboutIcon from 'assets/icons/about.svg';
import HelpIcon from 'assets/icons/help.svg';
import RightArrow from 'assets/icons/rightArrow.svg';
import EditIcon from 'assets/icons/edit.svg';

import * as userSelectors from 'resources/user/user.selectors';
import * as userActions from 'resources/user/user.actions';

import { getInitials } from 'helpers/utils.helper';
import { checkPermissions } from 'helpers/permissions.helper';

import colors from 'themes/colors';

import styles from './Profile.styles';

function Profile({ navigation }) {
  const dispatch = useDispatch();

  const [activeNotifications, setActiveNotifications] = useState(false);
  const [touchId, setTouchId] = useState(false);

  const userData = useSelector(userSelectors.getUserData);
  const isBalanceHidden = useSelector(userSelectors.getIsBalanceHidden);

  const onToggleNotifications = useCallback((value) => {
    setActiveNotifications(value);
  }, []);

  const onToggleHideBalance = useCallback((value) => {
    dispatch(userActions.hideBalance(value));
  }, []);

  const onToggleTouchId = useCallback((value) => {
    setTouchId(value);
  }, []);

  const onEditProfilePicture = useCallback(async () => {
    const permissionsGranted = await checkPermissions(
      PERMISSIONS.IOS.PHOTO_LIBRARY,
    );
    if (permissionsGranted) {
      const options = {
        mediaType: 'photo',
      };
      launchImageLibrary(options, async (response) => {
        if (!response.didCancel) {
          const file = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          dispatch(userActions.setAvatarUrl(file.uri));
        }
      });
    }
  }, []);

  const listItems = useMemo(
    () => [
      {
        id: 1,
        icon: PersonalInfoIcon,
        title: 'Personal Information',
        onPress: () => navigation.navigate('PersonalInformation'),
        rightElement: <RightArrow fill={colors.profileArrowIcon} />,
      },
      {
        id: 2,
        icon: ActiveNotificationsIcon,
        title: 'Active Notifications',
        rightElement: (
          <Switch
            value={activeNotifications}
            onValueChange={onToggleNotifications}
          />
        ),
      },
      {
        id: 3,
        icon: HideBalanceIcon,
        title: 'Hide my Balance',
        rightElement: (
          <Switch value={isBalanceHidden} onValueChange={onToggleHideBalance} />
        ),
      },
      {
        id: 4,
        icon: TouchIdIcon,
        title: 'Login with Touch ID',
        rightElement: (
          <Switch value={touchId} onValueChange={onToggleTouchId} />
        ),
      },
      {
        id: 5,
        icon: VerifyIdentityIcon,
        title: 'Verify my Identity',
        onPress: () => navigation.navigate('VerifyIdentity'),
        rightElement: <RightArrow fill={colors.profileArrowIcon} />,
      },
      {
        id: 6,
        icon: ResetPasswordIcon,
        title: 'Reset Password',
        rightElement: <RightArrow fill={colors.profileArrowIcon} />,
      },
      {
        id: 7,
        icon: AboutIcon,
        title: 'About DuniaPay',
        onPress: () => Linking.openURL('https://medium.com/@duniapay'),
        rightElement: <RightArrow fill={colors.profileArrowIcon} />,
      },
      {
        id: 8,
        icon: HelpIcon,
        title: 'Help Centre',
        rightElement: <RightArrow fill={colors.profileArrowIcon} />,
      },
    ],
    [activeNotifications, isBalanceHidden, touchId],
  );

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          {userData.avatarUrl ? (
            <Image source={{ uri: userData.avatarUrl }} style={styles.avatar} />
          ) : (
            <Text style={styles.initials}>
              {getInitials(userData.username)}
            </Text>
          )}
          <View style={styles.editProfileContainer}>
            <TouchableOpacity
              style={styles.editProfile}
              activeOpacity={0.7}
              onPress={onEditProfilePicture}
            >
              <EditIcon />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.fullName}>{userData.username}</Text>
        <Text style={styles.username}>@username</Text>
      </View>
      {listItems.map(
        ({ id, title, icon: Icon, rightElement, onPress = () => {} }) => (
          <TouchableOpacity
            key={id}
            style={styles.listItem}
            onPress={onPress}
            activeOpacity={1}
          >
            <View style={styles.listItemInfo}>
              <Icon />
              <Text style={styles.listItemTitle}>{title}</Text>
            </View>
            {rightElement}
          </TouchableOpacity>
        ),
      )}
    </ScrollView>
  );
}

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

export default Profile;

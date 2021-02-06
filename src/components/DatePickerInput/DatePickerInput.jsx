import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import Calendar from 'assets/icons/calendar.svg';

import Text from 'components/Text';

import styles from './DatePickerInput.styles';

const timeOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
};
const locale = 'en-US';
function DatePickerInput({ onChange, placeholder, minDate, maxDate, value }) {
  const [showModal, setShowModal] = useState(false);

  const onOpenModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);

  const onSelectDate = useCallback(
    (date, selectedDate) => {
      if (Platform.OS === 'android' && date.type === 'dismissed') {
        setShowModal(false);
        return;
      }

      onChange(selectedDate);

      setShowModal(false);
    },
    [setShowModal, onChange],
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.datePicker}
        onPress={onOpenModal}
        activeOpacity={0.6}
      >
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
          {value ? value.toLocaleDateString(locale, timeOptions) : placeholder}
        </Text>
        <Calendar />
      </TouchableOpacity>
      {Platform.OS === 'ios' ? (
        <DateTimePicker
          locale="en-US"
          style={styles.datePickerIOS}
          value={value}
          onChange={onSelectDate}
          minimumDate={minDate}
          maximumDate={maxDate}
        />
      ) : (
        showModal && (
          <DateTimePicker
            value={value}
            onChange={onSelectDate}
            minimumDate={minDate}
            maximumDate={maxDate}
          />
        )
      )}
    </View>
  );
}

DatePickerInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.instanceOf(Date).isRequired,
  minDate: PropTypes.instanceOf(Date).isRequired,
  maxDate: PropTypes.instanceOf(Date).isRequired,
};

DatePickerInput.defaultProps = {
  placeholder: '',
  onChange: () => {},
};

export default DatePickerInput;

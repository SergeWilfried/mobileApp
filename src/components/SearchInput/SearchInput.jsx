import React, { useState } from 'react';
import { TextInput, View, FlatList, Text, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import Search from 'assets/icons/search.svg';

import colors from 'themes/colors';

import styles from './SearchInput.styles';

function SearchInput({ placeholder }) {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([
    { title: 'efcerf' },
    { title: 'dd' },
    { title: 'efceddrf' },
    { title: 'd' },
    { title: 'efcddderf' },
    { title: 'kkk' },
  ]);
  const [masterDataSource, setMasterDataSource] = useState([
    { title: 'efcerf' },
    { title: 'dd' },
    { title: 'efceddrf' },
    { title: 'd' },
    { title: 'efcddderf' },
    { title: 'kkk' },
  ]);

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const getItem = (item) => {
    alert(`Title : ${item.item.title}`);
  };

  const ItemView = (item) => {
    return (
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return <View style={styles.divideLine} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputWrapper}>
        <Search />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.inputPlaceholder}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
        />
      </View>
      <FlatList
        data={filteredDataSource}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={ItemSeparatorView}
        renderItem={ItemView}
      />
    </SafeAreaView>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};

SearchInput.defaultProps = {
  placeholder: '',
};

export default SearchInput;

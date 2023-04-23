import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BottomTab = () => {
  return (
    <View style={styles.bottomTabContainer}>
      <Icon text="home" icon="home" />
      <Icon text="Search" icon="search" />
      <Icon text="Groceries" icon="shopping-bag" />
      <Icon text="Orders" icon="file-text" />
      <Icon text="Account" icon="user" />
    </View>
  );
};

const Icon = props => {
  console.log('Text : ', props.text);
  return (
    <TouchableOpacity>
      <FontAwesome
        name={props.icon}
        size={30}
        style={{marginBottom: 3, alignSelf: 'center'}}
      />
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});

export default BottomTab;

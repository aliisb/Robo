import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

export default Details = () => {
  const users = [
    'Your Deliveries',
    'Profile',
    'Payment Cards',
    'Favourite Places',
    'Favourite Drivers',
    'Gift cards',
    'Help and Support',
    'Promotions and offers',
    'Settings',
    'Logout',
  ];

  const renderList = ({item, index}) => {
    return <Text style={styles.item}>{item}</Text>;
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.item2}>Jon Doe</Text>
        <Text style={styles.item2}>+95335464</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          keyExtractor={(i, ind) => ind}
          data={users}
          renderItem={renderList}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.item2}>Some Text</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    // flex:1,
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
    height: '100%',
    width: '60%',
  },
  header: {
    flex: 1,
  },
  list: {
    flex: 5,
  },
  bottom: {
    flex: 1,
  },

  item: {
    fontSize: 22,
    padding: 10,
    textAlign: 'left',

    color: '#fff',
    borderWidth: 2,
    marginBottom: 0,
  },
  item2: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

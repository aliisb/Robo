import React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';

export default ComponentList = () => {
  const users = [
    {
      id: 1,
      name: 'Ali',
    },
    {
      id: 2,
      name: 'Sufi',
    },
    {
      id: 12,
      name: 'Zuki',
    },
    {
      id: 15,
      name: 'Dani',
    },
    {
      id: 19,
      name: 'Usama',
    },
    {
      id: 13,
      name: 'Nasir',
    },
    {
      id: 14,
      name: 'Huzaifa',
    },
    {
      id: 16,
      name: 'Tayyab',
    },
    {
      id: 17,
      name: 'Faisal',
    },
    {
      id: 18,
      name: 'Waqas',
    },
    {
      id: 20,
      name: 'Mohsin',
    },
    {
      id: 21,
      name: 'Khawar',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>Component in loop with Flatlist</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <UserData item={item} />}
      />
    </View>
  );
};

const UserData = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}> {item.name} </Text>
      <Text style={styles.item}> {item.id}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'red',
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    margin: 2,
  },
});

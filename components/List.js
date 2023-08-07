import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

export default List = () => {
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
      name: 'Alias',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>List with Flat list Component</Text>
      <FlatList
        data={users}
        renderItem={({item}) => <Text style={style.item}>{item.name}</Text>}
      />
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    fontSize: 28,
    padding: 10,
    textAlign: 'left',
    backgroundColor: 'blue',
    color: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
  },
});

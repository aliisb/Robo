import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

const MapList = () => {
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
      <Text style={{fontSize: 30}}>List with Map Function</Text>
      <ScrollView>
        {users.map(item => (
          <Text style={style.item}>{item.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    fontSize: 28,
    padding: 5,
    textAlign: 'left',
    backgroundColor: 'blue',
    color: '#fff',
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});
export default MapList;
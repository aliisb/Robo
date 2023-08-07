import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

export default Grid = () => {
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
      name: 'Danny',
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
    {
      id: 21,
      name: 'Khawar',
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
      name: 'Dilawar',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 30}}>Grid with dynamic data</Text>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: 130,
        }}>
        {users.map(item => (
          <View style={{width: '30%', marginTop: 20}}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 28,
    padding: 5,
    backgroundColor: 'blue',
    color: '#fff',
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
    width: 120,
    height: 120,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

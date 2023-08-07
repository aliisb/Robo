import React from 'react';
import {useState} from 'react';
import {Button, Text, View, TextInput, StyleSheet} from 'react-native';

export default Robo = () => {
  const [title, setTitle] = useState('Welcome to React Native');
  const [name, setName] = useState('');

  const newTitle = () => {
    setTitle('Are you Ready');
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          backgroundColor: 'lightblue',
          margin: 10,
          textAlign: 'center',
          borderRadius: 20,
        }}>
        {title}
      </Text>
      <Button title="Press Here" onPress={newTitle} />
      {/* <Text style={styles.textBox}>Selected Robot: {name} </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter name Here"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Button title="Clear Input" onPress={() => setName('')} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 20,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'grey',
    margin: 10,
  },
  textBox: {
    fontSize: 22,
    fontFamily: 'Sans',
    backgroundColor: 'grey',
    margin: 20,
  },
});

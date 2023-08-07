import React, {useState} from 'react';

import {Button, View, TextInput, StyleSheet, Text} from 'react-native';

export default Forms = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [display, setDisplay] = useState(false);
  const dataReset = () => {
    setDisplay(false);
    setUsername('');
    setPassword('');
    setEmail('');
  };
  return (
    <View>
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter username Here"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter password Here"
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter E-mail Here"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Button title="Show Details" onPress={() => setDisplay(true)} />
      </View>
      <Button title="Clear Details" onPress={dataReset} />
      <View>
        {display ? (
          <View>
            <Text style={{fontSize:20}}>Username is = {username}</Text>
            <Text style={{fontSize:20}}>Password is = {password}</Text>
            <Text style={{fontSize:20}}>Email is = {email}</Text>
          </View>
        ) : null}
      </View>
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
});

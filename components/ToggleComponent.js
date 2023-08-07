import { useState } from 'react';
import React from './React';
import {Button, Text, View} from 'react-native';

const Toggle = () => {
    const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 24}}>Show/Hide Component</Text>
      <Button title='Toggle Component' onPress={()=>setShow(!show)}/>
      {
        show ? <User /> : null
      }
      
    </View>
  );
};

const User = () => {
    return (
        <View>
            <Text style={{fontSize: 25, color:'red'}}>Hello!!</Text>
        </View>
    )
}
export default Toggle;
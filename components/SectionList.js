import React from './React';
import {Text, View, SectionList} from 'react-native';

const Section = () => {
  const users = [
    {
      id: 1,
      name: 'Ali',
      data: ['Python', 'C++', 'JS'],
    },
    {
      id: 2,
      name: 'Sufi',
      data: ['Figma', 'XD', 'Coral'],
    },
    {
      id: 12,
      name: 'Zuki',
      data: ['Java Script', 'C++', 'React-Native'],
    },
    {
      id: 15,
      name: 'Dani',
      data: ['Java', 'Kotlin', 'PHP', 'Ai'],
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 24}}> Section List in React Native</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => (
          <Text style={{fontSize: 24, marginLeft: 20}}>{item}</Text>
        )}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{fontSize: 24, color: 'red'}}>{name}</Text>
        )}
      />
    </View>
  );
};

export default Section;
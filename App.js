import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PeopleList from './src/modules/people/view/PeopleList';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

const Greeting = props => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <PeopleList/>
  );
};

export default LotsOfGreetings;
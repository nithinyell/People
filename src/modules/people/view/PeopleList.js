// People List View

import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {PeopleViewModel} from '../view-model/people-viewmodel';
import {Avatar, Card} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  person: {
    flex: 1,
    padding: 5,
    fontSize: 14,
    height: 27,
    lineHeight: 20
  },
  email: {
    flex: 1,
    padding: 5,
    fontSize: 12,
    height: 27,
    lineHeight: 20
  },
});

const PeopleList = ({navigation}) => {
  const {people} = PeopleViewModel(navigation);

  const PersonItem = ({person}) => {
    return (
      <TouchableOpacity onPress={() => {navigateToDetails(person)}}>
        <View style={{padding: 5, flex: 1}}>
          <Card
            style={{
              marginTop: 0,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Card.Content style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar.Text
                size={45}
                label={person.name[0].toUpperCase()}
                style={{marginRight: 8, backgroundColor: getRandomColor()}}
              />
              <View style={{flexDirection: 'column', padding: 5}}>
                <Text style={styles.person}>{person.name}</Text>
                <Text style={styles.email}>{person.email}</Text>
              </View>
            </Card.Content>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  const navigateToDetails = person => {
    navigation.navigate('Person Details', {person});
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <View style={[styles.center]}>
      <FlatList
        data={people}
        renderItem={({item}) => <PersonItem person={item} />}
        keyExtractor={item => item.email}
      />
    </View>
  );
};

export default PeopleList;
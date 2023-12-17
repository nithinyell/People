// People List View

import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PeopleViewModel } from "../view-model/people-viewmodel";
import { Avatar, Card } from "react-native-paper";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    person: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
  });

const PeopleList = ({ navigation }) => {
    const { people } = PeopleViewModel(navigation);
    
    const PersonItem = ({person}) => {
      return (
        <TouchableOpacity onPress={() => navigateToDetails(person)}>
          <View style={{padding: 5}}>
            <Card
              style={{
                marginTop: 0,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Card.Content
                style={{flexDirection: 'row', alignItems: 'center'}}>
                <Avatar.Text
                  size={25}
                  label={person.name[0].toUpperCase()}
                  style={{marginRight: 8, backgroundColor: getRandomColor()}}
                />
                <Text style={styles.person}>{person.name}</Text>
              </Card.Content>
            </Card>
          </View>
        </TouchableOpacity>
      );
    };

    const navigateToDetails = (person) => {
        navigation.navigate("Person Details", { person })
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
                data={ people }
                renderItem={({item}) => <PersonItem person={ item }/>}
                keyExtractor={item => item.email}
            />
        </View>
    );
};

export default PeopleList;
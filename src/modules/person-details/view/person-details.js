// Person Details

import {View, Text} from 'react-native';
import {PersonDetailsViewModel} from '../view-model/person-details-viewmodel';
import {useState} from 'react';
import {Avatar, Card, Paragraph} from 'react-native-paper';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { FlatList, TextInput } from 'react-native-gesture-handler';

const PersonDetails = ({route, navigation}) => {
  const {person} = route.params;
  const {personProfile, handleEdit, resetForm} = PersonDetailsViewModel(person);
  const [isEditing, setIsEditing] = useState(false);

  // Configure the header right button based on editing mode
  navigation.setOptions({
    headerRight: () => (
      <HeaderButtons>
        {isEditing ? (
          <Item title="Save" iconName="save" onPress={saveChanges} />
        ) : (
          <Item title="Edit" iconName="pencil" onPress={toggleEditingMode} />
        )}
      </HeaderButtons>
    ),
  });

  const saveChanges = () => {
    // Perform API call or other save logic
    console.log('Saving changes:', personProfile);
    // After successful update, you might want to reset the form
    resetForm();
    setIsEditing(false);
  };

  const toggleEditingMode = () => {
    setIsEditing(prev => !prev);
  };

  return (
    <View style={{ alignItems: 'center', padding: 16 }}>
      <Avatar.Text
        size={100}
        label={personProfile.name ? personProfile.name[0].toUpperCase() : ''}
      />

      {isEditing ? (
        <TextInput
          style={{ marginTop: 16, marginBottom: 16, padding: 8, borderWidth: 1, borderRadius: 4 }}
          value={personProfile.name}
          onChangeText={(text) => handleEdit('name', text)}
        />
      ) : (
        <Text style={{ marginTop: 16, fontSize: 18, fontWeight: 'bold' }}>
          {personProfile.name}
        </Text>
      )}

      <Card style={{ width: '100%', marginTop: 16 }}>
        <Card.Content>
          <Paragraph>{personProfile.emailType}: {personProfile.email}</Paragraph>
        </Card.Content>
      </Card>

      <Card style={{ width: '100%', marginTop: 16 }}>
        <Card.Content>
            <FlatList
                data={personProfile.phoneNumbers}
                renderItem={({item}) => <Paragraph>{item.type}: {item.number}</Paragraph> }
                keyExtractor={item => item.number}
            />
        </Card.Content>
      </Card>

    </View>
  );
};

export default PersonDetails;
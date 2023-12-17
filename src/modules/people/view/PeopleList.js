// People List View

import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PeopleViewModel } from "../view-model/people-viewmodel";

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
    const { people, navigateToDetails } = PeopleViewModel(navigation);
    
    const PersonItem = ({ person }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => { navigation.navigate("Person Details") }}>
                    <Text style={[styles.person]}>
                        {person.name}
                    </Text>
                </TouchableOpacity>
            </View>
            );
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
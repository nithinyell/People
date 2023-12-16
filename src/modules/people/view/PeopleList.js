// People List View

import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PeopleViewModel } from "../view-model/people-viewmodel";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    person: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
  });

const PeopleList = () => {
    const { people } = PeopleViewModel();

    const PersonItem = ({ person }) => {
        return <View>
            <Text style={[styles.person]}>
                {person.name}
            </Text>
        </View>
    };

    return (
        <View style={[styles.center, {top: 50}]}>
            <FlatList 
                data={people}
                keyExtractor={(person) => person.email}
                renderItem={({ item }) => <PersonItem person={ item }/>}
            />
        </View>
    );
};

export default PeopleList;
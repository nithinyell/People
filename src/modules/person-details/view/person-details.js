// Person Details

import { View,Text} from "react-native";
import { PersonDetailsViewModel } from "../view-model/person-details-viewmodel";

const PersonDetails = ({ route, navigation }) => {
    const { person } = route.params;
    const { personProfile } = PersonDetailsViewModel(person);

    return (
        <View>
            <Text>
                {personProfile.name}
            </Text>
        </View>
    );
};

export default PersonDetails;
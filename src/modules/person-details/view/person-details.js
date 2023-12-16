// Person Details

import { View } from "react-native";
import { PersonDetailsViewModel } from "../view-model/person-details-viewmodel";

const PersonDetails = () => {
    const { personDetails } = PersonDetailsViewModel();

    return (
        <View>
            <Text>
                Person Details
            </Text>
        </View>
    );
};

export default PersonDetails;
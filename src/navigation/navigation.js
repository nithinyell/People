// Handle App Navigation

import { createStackNavigator } from '@react-navigation/stack';
import PeopleList from '../modules/people/view/PeopleList';
import PersonDetails from '../modules/person-details/view/person-details';
import { NavigationContainer } from '@react-navigation/native';

const stack = createStackNavigator();

const BuildRoot = () => {
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="People" component={PeopleList}/>
                <stack.Screen name="Person Details" component={PersonDetails}/>
            </stack.Navigator>
        </NavigationContainer>
    );
};

export default BuildRoot;
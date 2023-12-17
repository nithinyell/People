// People View Model

import { useEffect, useState } from "react"
import { mockPeopleList } from "../data/mock/peopleList";
import Person from "../models/person";

const PeopleViewModel = (navigation) => {
    const[people, setPeople] = useState([]);

    useEffect(() => {
        fetchPeople()
    }, []);

    const fetchPeople = async() => {
        try {
            const response = await mockPeopleList();
            const peopleList = response.people.map( (person) =>
                new Person(
                    person.name,
                    person.email,
                    person.emailType,
                    person.phoneNumbers
                )
            );
            setPeople(peopleList)
        } catch(error) {
            // Retry option to user based on error type
        }
    }

    const navigateToDetails = (person) => {
        navigation.navigate("Person Details", { person })
    };

    return { people, navigateToDetails };
}

export { PeopleViewModel };
// People View Model

import { useEffect, useState } from "react"
import { mockPeopleList } from "../data/mock/peopleList";

const PeopleViewModel = () => {
    const[people, setPeople] = useState([]);

    useEffect(() => {
        fetchPeople()
    }, []);

    const fetchPeople = async() => {
        try {
            const peopleList = await mockPeopleList();
            setPeople(peopleList)
        } catch(error) {
            // Retry option to user based on error type
        }
    }

    return people;
}

export { PeopleViewModel };
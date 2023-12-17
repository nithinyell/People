// Person Details view model 

import { useEffect, useState } from "react";

const PersonDetailsViewModel = () => {
    const[personDetails, setPersonDetails] = useState([]);

    useEffect(() => {
        fetchPersonDetails(123)
    }, []);

    const fetchPersonDetails = async(personId) => {
        // In real time scenario we may fatch person detials by using personid from API 
        setPersonDetails("ABC") 
    }
    

    return personDetails;
};

export { PersonDetailsViewModel };
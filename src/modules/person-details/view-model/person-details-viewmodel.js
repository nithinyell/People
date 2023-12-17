// Person Details view model 

import { useEffect, useState } from "react";

const PersonDetailsViewModel = (person) => {
    const[personProfile, setPersonProfile] = useState([]);

    useEffect(() => {
        fetchPersonDetails(person)
    }, [person]);

    const fetchPersonDetails = async(person) => {
        console.log(person);
        // In real time scenario we may fetch additional person detials by using personid from person object
        // For now, just setting the details object as the person profile  
        setPersonProfile(person);
         
    }

    return { personProfile };
};

export { PersonDetailsViewModel };
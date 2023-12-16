// Person Details view model 

import { useState } from "react";

const PersonDetailsViewModel = () => {
    const[personDetails, setPersonDdtails] = useState([]);

    useEffect(() => {
        fetchPersonDetails(123)
    }, []);

    
    const fetchPersonDetails = async(personId) => {
        // In real time scenario we may fatch person detials by using personid from API  
    }
    

    return personDetails;
};

export { PersonDetailsViewModel };
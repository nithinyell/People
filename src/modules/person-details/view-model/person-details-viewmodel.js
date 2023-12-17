// Person Details view model

import {useEffect, useState} from 'react';

const PersonDetailsViewModel = person => {
  const [personProfile, setPersonProfile] = useState(person);
  const [editedPerson, setEditedPerson] = useState(person);

  useEffect(() => {
    // Update the person profile whenever editedPerson changes
    setPersonProfile(editedPerson); 
  }, [editedPerson]);

  useEffect(() => {
    // Fetch person details from the API whenever needed
    fetchPersonDetails(person);
  }, [person]);

  const handleEdit = (field, value) => {
    setEditedPerson(prevPerson => ({
      ...prevPerson,
      [field]: value,
    }));
  };

  const saveChanges = () => {
    setPersonProfile(editedPerson);
    // Additional save logic can be added here; send api update
  };

  const fetchPersonDetails = async person => {
    const simulateApiCall = async () => {
      const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

      // Simulate fetching additional details by using personid (replace this with your real API call logic)
      // For now, just returning the person details
      await delay(1); // Simulate delay 1 milliseconds
      return person;
    };

    // Call the simulated API function
    const response = await simulateApiCall();

    // Update the person profile
    setPersonProfile(response);
  };

  return {personProfile, handleEdit, saveChanges};
};

export {PersonDetailsViewModel};
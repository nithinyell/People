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

  // Call the simulated API function
  const simulateApiCall = async () => {
    return person;
  };

  const fetchPersonDetails = async person => {
    // Simulate fetching additional details by using personid (replace this with your real API call logic)
    // For now, just returning the person details
    const response = await simulateApiCall();

    // Update the person profile
    setPersonProfile(response);
  };

  return {personProfile, handleEdit, saveChanges};
};

export { PersonDetailsViewModel };
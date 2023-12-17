// Person Details view model 

import { useEffect, useState } from "react";

const PersonDetailsViewModel = (person) => {
  const [personProfile, setPersonProfile] = useState([]);
  const [editedPerson, setEditedPerson] = useState({...person});

  useEffect(() => {
    fetchPersonDetails(person);
  }, [person]);

  const handleEdit = (field, value) => {
    setEditedPerson(prevPerson => ({
      ...prevPerson,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setEditedPerson({...person});
  };

  const fetchPersonDetails = async person => {
    // In real time scenario we may fetch additional person detials by using personid from person object
    // For now, just setting the details object as the person profile
    setPersonProfile(person);
  };

  return { personProfile, editedPerson, handleEdit, resetForm };
};

export { PersonDetailsViewModel };
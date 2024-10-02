import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <h1>Contacts</h1>
      <ContactList setSelectedContactId={setSelectedContactId} />
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <div>Please select a contact.</div>
      )}
    </>
  );
}

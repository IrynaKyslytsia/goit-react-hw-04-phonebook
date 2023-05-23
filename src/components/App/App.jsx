import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container, MainTitle, SecondTitle } from 'components/App/App.styled'


export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    };

    setContacts(prev => [...prev, { id: nanoid(), name, number }]);
  };

  const  deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  };

  const handleChangeInFilter = (e) => {
    setFilter(e.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>  
      <ContactForm onAddContact={addContact}/>
      <SecondTitle>Contacts</SecondTitle>
      <Filter value={filter} onChange={handleChangeInFilter}/>
      <ContactList contacts={getFilteredContacts(filter)} onDeleteContact={deleteContact} />
    </Container>
  );
};

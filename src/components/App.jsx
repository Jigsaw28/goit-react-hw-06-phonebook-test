import { Container, Title } from './App.styled';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const newContact = { name, number, id: nanoid() };
    const doubleContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    doubleContact
      ? alert(`${doubleContact.name} is already in contacts`)
      : setContacts([...contacts, newContact]);
  };

  const changeFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    const filteredContact = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(filteredContact);
  };

  const visibleFilter = getFilterContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <PhonebookForm onSubmit={formSubmitHandler} />
      <Title>Contacts</Title>
      <Filter filter={filter} onChange={changeFilter} />
      <Contacts contacts={visibleFilter} deleteContact={deleteContact} />
    </Container>
  );
};

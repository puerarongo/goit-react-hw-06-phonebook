import React from 'react';
import Form from './form/Form';
import Filter from './filter/Filter';
import ContactList from './contactList/ContactList';

const App = () => {
  //const [contacts, setContacts] = useState(
  //  JSON.parse(localStorage.getItem('contacts')) || []
  //);
  //const [filter, setFilter] = useState('');
  //
  //useEffect(() => {
  //  localStorage.setItem('contacts', JSON.stringify(contacts));
  //}, [contacts]);
  //
  //
  //
  //const filterHandler = e => {
  //  setFilter(e.currentTarget.value);
  //};
  //
  //const filtred = contacts.filter(elem =>
  //  elem.name.toLowerCase().includes(filter.toLowerCase())
  //);
  //
  //const deleteComponent = id => {
  //  setContacts(contacts.filter(elem => elem.id !== id));
  //};
  //
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;

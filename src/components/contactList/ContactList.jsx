import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsDelete } from 'redux/actions/contacts-actions';
//import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch;
  const itemsContact = useSelector(state => state.contacts.items);
  const filterContact = useSelector(state => state.contacts.filter);
  const dataContacts = itemsContact.filter(({ name }) =>
    name.toLowerCase().includes(filterContact.toLowerCase())
  );

  const deleteHandler = id => {
    dispatch(contactsDelete(id));
  };
  return (
    <div className={styles.container}>
      <ul>
        {dataContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.contact}>
              <span>
                {name}: {number}
              </span>
              <button
                className={styles.button__delete}
                type="button"
                onClick={() => deleteHandler(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//ContactList.propTypes = {
//  contacts: PropTypes.arrayOf(
//    PropTypes.shape({
//      id: PropTypes.string.isRequired,
//      name: PropTypes.string.isRequired,
//      number: PropTypes.string.isRequired,
//    })
//  ).isRequired,
//  deleteById: PropTypes.func.isRequired,
//};

export default ContactList;

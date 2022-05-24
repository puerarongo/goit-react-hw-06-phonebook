import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

//const contactName = createAction("contact/name");
//const contactNumber = createAction("contact/number");

const contactsAdd = createAction('items/add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
});
const contactsDelete = createAction('items/delete');

const filtration = createAction('items/filtration');

export default { contactsAdd, contactsDelete, filtration };

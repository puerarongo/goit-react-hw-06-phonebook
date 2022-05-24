import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsHandler from 'services/constactsHandler';

import {
  contactsAdd,
  contactsDelete,
  filtration,
} from 'redux/actions/contacts-actions';

const items = createReducer([], {
  [contactsAdd.type]: (state, { payload }) =>
    //const nameArr = state.map(elem => elem.name.toLowerCase());
    //if (nameArr.includes(payload.name.toLowerCase())) {
    //    return Report.failure(
    //        'Failure',
    //        `${payload.name} is already in contacts!`,
    //        'Try again'
    //    );
    //}
    //[...state, payload]
    contactsHandler(state, payload),
  [contactsDelete.type]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filtration.type]: (state, { payload }) => payload,
});

//const filter = createReducer('', {
//    [filtration.type]: (state, { payload }) =>
//      state.filter(({ name }) =>
//        name.toLowerCase().includes(payload.toLowerCase())
//      ),
//  });

export default combineReducers({
  items,
  filter,
});

import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./actions";
import { combineReducers } from "redux";

const contactReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => {
    const contactsArr = [...state];
    const elementForRemove = contactsArr.find((item) => item.key === payload);
    const index = contactsArr.indexOf(elementForRemove);
    contactsArr.splice(index, 1);
    return (state = contactsArr);
  },
});

const filterReducer = createReducer("", {
  [filterContacts]: (state, { payload }) => {
    return (state = payload);
  },
});

export const reducers = combineReducers({
  contactReducer,
  filterReducer,
});

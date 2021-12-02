import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("phonebook/add", (contact) => {
  return {
    payload: { ...contact },
  };
});

export const deleteContact = createAction("phonebook/remove", (contact) => {
  return {
    payload: { ...contact },
  };
});

export const filterContacts = createAction("phonebook/filter", (value) => {
  return { payload: value };
});

import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("phonebook/add", (contact) => {
  return {
    payload: { ...contact },
  };
});

import { createReducer } from "@reduxjs/toolkit";
import { addContact } from "./actions";
import { combineReducers } from "redux";

const contactReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
});

export const reducers = combineReducers({
  contactReducer,
});

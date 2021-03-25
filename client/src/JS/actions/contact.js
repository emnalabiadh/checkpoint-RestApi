import {
  GET_CONTACTS,
  LOAD_CONTACTS,
  FAIL_CONTACTS,
  GET_CONTACT,
} from "../actionTypes/contact";
import axios from "axios";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: LOAD_CONTACTS });
  try {
    let result = await axios.get("/api/contacts");
    console.log(`result`, result.data.listContacts);
    dispatch({ type: GET_CONTACTS, payload: result.data.listContacts });
  } catch (error) {
    dispatch({ type: FAIL_CONTACTS, payload: error.response });
  }
};

export const postContact = (newUser) => async (dispatch) => {
  try {
    await axios.post("/api/contacts", newUser);
    dispatch(getContacts());
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/contacts/${id}`);
    dispatch(getContacts());
  } catch (error) {
    console.log(error);
  }
};

export const editContact = (id, newContact) => async (dispatch) => {
  try {
    await axios.put(`/api/contacts/${id}`, newContact);
    dispatch(getContacts());
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    let result = await axios.get(`/api/contacts/${id}`);
    dispatch({ type: GET_CONTACT, payload: result.data });
  } catch (error) {
    dispatch({
      type: FAIL_CONTACTS,
      payload: error.response,
    });
  }
};

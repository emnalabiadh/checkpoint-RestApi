import {
  GET_CONTACTS,
  LOAD_CONTACTS,
  FAIL_CONTACTS,
} from "../actionTypes/contact";

//initialState
const initialState = {
  contactList: [],
  errors: null,
  load: false,
  contact: {},
};

//pure function
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CONTACTS:
      return { ...state, load: true };
    case GET_CONTACTS:
      return { ...state, load: false, contactList: payload };
    case FAIL_CONTACTS:
      return { ...state, load: false, errors: payload };
    default:
      return state;
  }
};
export default contactReducer;

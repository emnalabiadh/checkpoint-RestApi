import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editContact, postContact } from "../JS/actions/contact";
import { Link } from "react-router-dom";

const Add = () => {
  const [contact, setContact] = useState({});

  const edit = useSelector((state) => state.editReducer.edit);

  const contactToEdit = useSelector((state) => state.contactReducer.contact);

  const dispatch = useDispatch();

  useEffect(() => {
    edit
      ? setContact(contactToEdit)
      : setContact({ name: "", email: "", phone: "" });
  }, [contactToEdit]);

  const handleData = () => {
    edit
      ? dispatch(editContact(contactToEdit._id, contact))
      : dispatch(postContact(contact));
  };
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <label>Name</label>
      <input name="name" value={contact.name} onChange={handleChange} />
      <label>Email</label>
      <input name="Email" value={contact.email} onChange={handleChange} />
      <label>Phone</label>
      <input name="Phone" value={contact.Phone} onChange={handleChange} />
      <button onClick={handleData}>
        {" "}
        <Link to="/">{edit ? "edit" : "add"}</Link>
      </button>
    </div>
  );
};

export default Add;

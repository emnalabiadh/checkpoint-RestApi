import React from "react";
import { deleteContact, getContact } from "../JS/actions/contact";
import { useDispatch } from "react-redux";
import { toggleEdit } from "../JS/actions/edit";
import { Link } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(toggleEdit());
    dispatch(getContact(contact._id));
  };
  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <span>{contact.email}</span>
      <span>{contact.phone}</span>
      <Link to="/edit">
        <button onClick={handleEdit}>Edit</button>
      </Link>
      <button onClick={() => dispatch(deleteContact(contact._id))}>
        Delete
      </button>
    </div>
  );
};

export default ContactCard;

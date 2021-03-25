import React from "react";
import ContactList from "../components/ContactList";
import { toggleAdd } from "../JS/actions/edit";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Link to="/Add">
        <button onClick={() => dispatch(toggleAdd())}>Add Contact</button>
      </Link>

      <Link to="/contacts">
        <button>ContactList</button>
      </Link>

      <ContactList />
    </div>
  );
};

export default Home;

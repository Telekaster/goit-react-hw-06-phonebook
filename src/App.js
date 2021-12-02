import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, filterContacts } from "./redux/actions";
import { store } from "./redux/store";
import shortid from "shortid";
import ContactForm from "./components/ContactForm/ContactForm ";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/ContactList/ContactList";

export default function App() {
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const dispatch = useDispatch();
  const contacts = useSelector((store) => {
    return store.contactReducer;
  });
  const filter = useSelector((store) => {
    return store.filterReducer;
  });

  function handleChange(evt) {
    switch (evt.target.name) {
      case "name":
        setName(evt.target.value);
        break;

      case "tel":
        setNumber(evt.target.value);
        break;

      default:
        break;
    }
  }

  function handleAddContact() {
    if (
      contacts.find((contact) => {
        return contact.name === name;
      })
    ) {
      alert(`${name} is already in contacts`);
    } else {
      const newContact = {
        key: shortid.generate(),
        name: name,
        number: number,
      };

      dispatch(addContact(newContact));
    }
  }

  function filterer(evt) {
    dispatch(filterContacts(evt.target.value));
  }

  function removeContact(evt) {
    const id = evt.target.id;

    dispatch(deleteContact(id));
  }

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm
        handleChange={handleChange}
        handleAddContact={handleAddContact}
      />

      <h2>Contacts</h2>
      <Filter filterContacts={filterer} />

      <ContactList
        filter={filter}
        contacts={contacts}
        key={contacts.key}
        deleteContact={removeContact}
      />
    </div>
  );
}

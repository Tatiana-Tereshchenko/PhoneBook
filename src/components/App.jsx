import React, {Component} from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import Notiflix from 'notiflix';



export class App extends Component   {
  state = {
    contacts: [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: ''
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({contacts: JSON.parse(savedContacts)})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  handelAddContact = (newContact) => {
    const { contacts } = this.state;
    const isDublicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    )
    if (isDublicate) {
      Notiflix.Notify.failure('Such a contact already exists');
    } else {
      this.setState((prevState) => (
        {
          contacts: [...prevState.contacts, newContact]
        }))
    }
    localStorage.setItem('contacts', JSON.stringify(newContact))
  }
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = (contactId) => {
  this.setState((prevState) => ({
    contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
  }));
  };
  
  render() {
      const { contacts, filter } = this.state
     return ( 
       <div>
         <h1>Phonebook</h1>
         <ContactForm onAddContact={this.handelAddContact} />
         
          <h2>Contacts</h2>
          <Filter value={filter} onChange={this.handleFilterChange} />
         <ContactList contacts={contacts} filter={filter} onDeleteContact={this.handleDeleteContact}/>
    </div>
    )
  }
};

import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = contact => {
    const contactExists = this.state.contacts.some(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    this.setState(() => ({ contacts: [...this.state.contacts, contact] }));
  };

  handleDeleteContact = id => {
    if (!id) {
      return;
    }

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  handleSearch = filter => {
    this.setState({ filter: filter.toLowerCase() });
  };

  render() {
    let filteredContacts = this.state.contacts;
    const filter = this.state.filter?.trim();

    if (filter) {
      filteredContacts = filteredContacts.filter(item =>
        item.name.toLowerCase().includes(filter)
      );
    }

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.handleAddContact} />

          <h2>Contacts</h2>
          <Filter onSearch={this.handleSearch} />
          <ContactList
            contacts={filteredContacts}
            onContactDelete={this.handleDeleteContact}
          />
        </div>
      </div>
    );
  }
}

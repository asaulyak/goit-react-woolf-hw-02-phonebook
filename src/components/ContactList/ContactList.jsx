import { Component } from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts.map(contact => (
          <li key={contact.id}>
            <ContactListItem contact={contact} onContactDelete={this.props.onContactDelete}/>
          </li>
        ))}
      </ul>
    );
  }
}

import { Component } from 'react';
import css from './ContactListItem.module.css';

export class ContactListItem extends Component {
  render() {
    return (
      <span className={css.contact}>
        {this.props.contact.name}: {this.props.contact.number}{' '}
        <button
          type="button"
          onClick={() => this.props.onContactDelete(this.props.contact.id)}
        >
          Delete
        </button>
      </span>
    );
  }
}

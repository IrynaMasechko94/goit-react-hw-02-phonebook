import React, { Component } from 'react';
import css from './ContactList.module.css';

export default class ContactList extends Component {
  static defaultProps = {
    contacts: this.contacts,
    handleDelete: this.handleDelete,
  };
  render() {
    const { contacts, handleDelete } = this.props;
    return (
      <ul className={css.contactList}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={css.contactListItemBtn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

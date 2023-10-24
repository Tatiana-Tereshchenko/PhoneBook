import React, { Component } from "react";
import ContactItem from "components/ContactItem/ContactItem";

class ContactList extends Component {

    handelDeleteClick = (contactId) => {
        this.props.onDeleteContact(contactId)
    }

    render() {
        const { contacts, filter } = this.props;
        const filteredContacts = contacts.filter((contact) => 
        contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        return (
            <ul>
                {filteredContacts.map((contact) => (
                    <ContactItem
                        key={contact.id}
                        contact={contact}
                        onDeleteClick={this.handelDeleteClick}
                    />
                )
                )}
            </ul>
        )
    }
}

export default ContactList;
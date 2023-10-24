import React, { Component } from "react";


class ContactItem extends Component {
    render() {
        const { contact, onDeleteClick } = this.props;
        return (
            <li>
                <p>
                    {contact.name}: {contact.number}
                </p>
                <button onClick={()=> onDeleteClick(contact.id)}>Delete button</button>
            </li>
            
        )
    }
}

export default ContactItem;
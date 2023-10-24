import React, { Component } from "react";
import { nanoid } from 'nanoid'


export class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            number: ''
        }
    }

        handelSubmit = (event) => {
            event.preventDefault();
            const { name, number } = this.state;
            if (name.trim() === '' || number.trim() === '') return;
            this.props.onAddContact({ id: nanoid(), name: name.trim(), number: number.trim() });
            this.setState({ name: '', number: '' });
        }

   

        handelNameChange = (event) => {
            const inputName = event.target.value;
            this.setState({ name: inputName })
        }

        handelNumberChange = (event) => {
            const inputNumber = event.target.value;
            const sanitaizeNumber = inputNumber.replace(/\D/g, '');
            this.setState({ number: sanitaizeNumber })
        }

        render() {
         const { name, number } = this.state;
    
            return (
                <form onSubmit={this.handelSubmit}>
                    <input
                        type="text"
                        placeholder="name"
                        required
                        value={name}
                        name="name"
                        onChange={this.handelNameChange} />
                    <input
                        type="tel"
                        placeholder="Phone number"
                        required
                        value={number}
                        name="number"
                        onChange={this.handelNumberChange} />
                    <button type="submit">Add Contact</button>
                </form>
            )
        }
    }


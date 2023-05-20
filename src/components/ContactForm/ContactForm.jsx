import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormLabel, FormInput, FormBtn } from 'components/ContactForm/ContactForm.styled';

export default function ContactForm({ onAddContact }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        const { name, value } = e.target

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            
            default:
                return;
        }
    };

    const handleSabmit = (e) => {
        e.preventDefault();

        onAddContact(name, number);
        reset();
    };

    const reset = () => {
    setName('');
    setNumber('');
    };

    return (
        <Form onSubmit={handleSabmit}>
            <FormLabel htmlFor={nanoid()}>Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
           
            <FormLabel htmlFor={nanoid()}>Number</FormLabel>
            <FormInput
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            
            <FormBtn type='submit'>Add contact</FormBtn>
          </Form>
    )
}
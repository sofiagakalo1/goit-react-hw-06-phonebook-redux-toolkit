import { useState } from 'react';
import PropTypes from 'prop-types';

import css from './contactsForm.module.css';

const ContactsForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.form}>
        <div className={css.formInput}>
          <label className={css.label}>Name</label>
          <input
            onChange={event => {
              setName(event.target.value);
            }}
            value={name}
            className={css.inputField}
            placeholder="Type name..."
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={css.formInput}>
          <label className={css.label}>Number</label>
          <input
            onChange={event => {
              setNumber(event.target.value);
            }}
            value={number}
            className={css.inputField}
            placeholder="Type number..."
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <div>
          <button type="submit" className={css.button}>
            Add contact
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactsForm;

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

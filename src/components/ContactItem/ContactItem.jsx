import React from 'react';
import PropTypes from 'prop-types';
import css from './contact-item.module.css';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from 'redux/contacts/contacts-thunk';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    console.log(id);
    dispatch(deleteContactsThunk(id));
  };

  return (
    <li key={id} className={css.contactItem}>
      <span className={css.contactItem__text}>{name}</span>
      <span className={css.contactItem__text}>{number}</span>
      <button
        className={css.contactItem__button}
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
};

export default ContactItem;

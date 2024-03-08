import PropTypes from 'prop-types';
import { ContactStyled } from './styled';

const Contact = ({ id = '', name = '', phone = '', onHandleDeleteContact }) => {
  const handleDeleteContact = () => {
    onHandleDeleteContact(id);
  };

  return (
    <ContactStyled>
      <p>
        {name}: {phone}
      </p>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </ContactStyled>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  onHandleDeleteContact: PropTypes.func,
};

export default Contact;

import PropTypes from 'prop-types'
import { ConactListWrapper } from "./ContactList.styled";
import { ContactItem } from "components/ContactListItem/ContactListItem";

export const ContactList = ({ contacts, deleteContact }) => {
    return (
        <ConactListWrapper>
            {contacts.map(({ name, id, phone }) => {
                return <ContactItem
                    key={id}
                    name={name}
                    number={phone}
                    deleteContact={() => deleteContact(id)} /> 
            })}
        </ConactListWrapper>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            phone: PropTypes.string.isRequired,
        }).isRequired).isRequired,
        
    deleteContact: PropTypes.func.isRequired,
};

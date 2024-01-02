import PropTypes from 'prop-types';
import { Contact } from '../models/contact-class';

export const ContactComponent = ({ contact }) => {
  return (
    <>
      <h2>Nombre: { contact.name }</h2>
      <h3>Apellido: { contact.lastName }</h3>
      <h4>Email: { contact.email }</h4>
      <h5>{ contact.connected ? 'Contacto En Línea' : 'Contacto No Disponible' }</h5>
    </>
  )
}

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact)
}
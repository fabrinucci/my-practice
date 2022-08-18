import { Contact } from "../models/contact-class"
import { ContactComponent } from "./ContactComponent"

export const ContactList = () => {

  const contactDefault = new Contact('Juan', 'Perez', 'juanp@correo.com', true)

  return (
    <>
      <ContactComponent contact={ contactDefault }/>
    </>
  )
}

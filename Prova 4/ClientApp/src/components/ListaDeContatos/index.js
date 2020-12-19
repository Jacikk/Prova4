import React from 'react';
import './styles.css'

const ContactsList = (props) => {
  const { contacts } = props;
  if (!contacts || contacts.length === 0) return <p>Não encontramos nenhum contato seu ainda!</p>;
  return (
    <div>
      {contacts.map((contact) => {
        return (
          <div key={contact.idContact} className='list'>
            <p>id: {contact.idContact}</p>
            <p >Nome: {contact.name}</p>
            <p >Telefone: {contact.cellphone}</p>
            <p >Email: {contact.email}</p>

            <button>Deletar</button>
          </div>
        );
      })}
    </div>
  );
};
export default ContactsList;
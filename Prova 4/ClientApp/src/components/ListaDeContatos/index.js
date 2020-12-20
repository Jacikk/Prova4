import React from 'react';
import './styles.css'

import AlterarContatoButton from '../AlterarContato';
import DeletarContato from '../DeletarContato'

import Api from '../../services/api'

import { getId } from "../../services/auth";

const ContactsList = (props) => {
  const { contacts } = props;
  var refresh = false;
  if (!contacts || contacts.length === 0) return <p>Não encontramos nenhum contato seu ainda!</p>;
  return (
    <div>
      {contacts.map((contact) => {
        return (
          <div key={contact.idContact} className='list'>
            <div className='listRow'>
              <p >Nome:<br />{contact.name}</p>
              <p >Telefone:<br />{contact.cellphone}</p>
              <p >Email:<br />{contact.email}</p>
            </div>
            <div id='lightgreen'>
              <AlterarContatoButton idContact={contact.idContact} />
              <DeletarContato idContact={contact.idContact} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ContactsList;
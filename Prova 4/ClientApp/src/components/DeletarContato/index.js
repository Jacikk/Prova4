import React, { Component } from 'react';
import './styles.css'
import Api from '../../services/api'

export default class DeletarContato extends Component {

    constructor(props) {
        super(props);
      }

    async DeletarContato (e) {

        e.preventDefault();

        try {
            await Api.delete("Contacts/" + this.props.idContact);
        } catch (err) {
            console.log(err);
            this.setState({
                error:
                    "Houve um problema com o cadastro, verifique os dados."
            });
        } finally {
            window.location.reload();
        }
    }

    render() {
        return <button onClick= {(e) => this.DeletarContato(e)}>Deletar</button>
    }
}


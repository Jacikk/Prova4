import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './styles.css'

import Api from '../../services/api'

import { getId } from "../../services/auth";


export default class GravarContato extends Component {

    state = {
        Name:"",
        Cellphone: "",
        Email:"",
        User_idUser: parseInt(getId())
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { Name, Cellphone, Email, User_idUser} = this.state;

        if (!Name || !Cellphone || !Email) {
            this.setState({ error: "Todos os campos são obrigatórios" });
        } else {
            try {
                this.setState({ user_idUser: parseInt(getId())});
                await Api.post("Contacts", { Name, Email, Cellphone, User_idUser} );
                
            } catch (err) {
                console.log(err);
                this.setState({
                    error:
                        "Houve um problema com o cadastro, verifique os dados."
                });
            }
        }
    };


    render() {
        return (<section>
            <div className='GravarContato'>
                <form onSubmit={this.handleSubmit}>
                    
                    <input
                        type="name"
                        placeholder="Nome"
                        onChange={e => this.setState({ Name: e.target.value })}
                    />
                    <input
                        type="cellphone"
                        placeholder="Telefone"
                        onChange={e => this.setState({ Cellphone: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ Email: e.target.value })}
                    />
                    
                    <button type="submit" id='loginBtn'>Salvar</button>
                    <hr />
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        </section>
        )
    }
}
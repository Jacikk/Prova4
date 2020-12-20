import React, { Component, useState } from "react";
import './styles.css'

import Api from '../../services/api'

import { getId } from "../../services/auth";

export default class AlterarContato extends Component {
    
    state = {
        idContact: this.props.idContact,
        Name:this.props.name,
        Cellphone: this.props.cellphone,
        Email:this.props.email,
        User_idUser: parseInt(getId()),
        toggleDropDown: false
    }

    constructor(props) {
        super(props);
        this.setState({ toggleDropDown: false});
      }

    handleSubmit = async e => {
        e.preventDefault();
        const { idContact, Name, Cellphone, Email, User_idUser} = this.state;
        this.setState({ User_idUser: parseInt(getId())});
        this.setState({ idContact: this.props.idContact});
        
        if (!Name || !Cellphone || !Email) {
            this.setState({ error: "Todos os campos são obrigatórios" });
        } else {
            try {
                console.log(idContact + Name + Email + Cellphone + User_idUser);
                await Api.put("Contacts/" + this.state.idContact, {idContact, Name, Email, Cellphone, User_idUser} );
                
                
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
    };

    render() {

        if(this.state.toggleDropDown) return (<section className="AlterarContato">
            <div className='GravarContato'>
                <form onSubmit={this.handleSubmit} id='lightgreen'>

                    <input
                        type="name"
                        placeholder={this.props.name}
                        onChange={e => this.setState({ Name: e.target.value })}
                    />
                    <input
                        type="cellphone"
                        placeholder={this.state.Cellphone}
                        onChange={e => this.setState({ Cellphone: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder={this.state.Email}
                        onChange={e => this.setState({ Email: e.target.value })}
                    />
                    
                    <button type="submit" id='loginBtn'>Salvar</button>
                    <button onClick={() => this.setState({ toggleDropDown: !this.state.toggleDropDown})} >Cancelar</button>
                    <hr />
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        </section>
        )
        else {
            return <button onClick={() => this.setState({ toggleDropDown: !this.state.toggleDropDown})} >Alterar</button>
        }
    } 
}
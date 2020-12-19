import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Api from '../../services/api'

import { login, isAuthenticated, userId } from "../../services/auth";


class SignIn extends Component {

    state = {
        email: "",
        password: ""
    }

    handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha e-mail e senha para continuar!" });
        } else {
            try {
                const response = await Api.post("/auth/login", { email, password });
                var responseString = response.data.split(",");
                login(responseString[0]);
                userId(responseString[1]);
                this.props.history.push('/');

            } catch (err) {
                this.setState({
                    error:
                        "Houve um problema com o login, verifique suas credenciais."
                });
            }
        }
    };


    render() {

        if (isAuthenticated()) return (
            <section>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p>Você já esta logado!
                <Link to={'/'}> Clique aqui para voltar</Link></p>
                </div>
                <Footer />
            </section>


        )
        else return (<section>
            <Header />
            <div id='SignUpContainer'>
                <form onSubmit={this.handleSignIn}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit" id='loginBtn'>Login</button>
                    <hr />
                    <Link to="/SignUp" id="SignUpLogin">Não é registrado ainda? Registre-se!</Link>
                </form>
            </div>
            <Footer />
        </section>
        )
    }
}

export default withRouter(SignIn);
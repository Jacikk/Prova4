import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Api from '../../services/api'
import { login, userId } from "../../services/auth";

class SignUp extends Component {

  state = {
    email: "",
    password: "",
    confirmPassword: ""
  }

  handleSignUp = async e => {
    e.preventDefault();
    const { email, password, confirmPassword } = this.state;
    if (!confirmPassword || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        const response = await Api.post("/auth/Registrar", { email, password, confirmPassword });
        var responseString = response.data.split(",");
        login(responseString[0]);
        userId(responseString[1]);
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };

  render() {
    return (
      <section>
        <Header />
        <div id='SignUpContainer'>
          <form onSubmit={this.handleSignUp}>
            <div id='h3'>BEM VINDO A SUA AGENDA!</div>
            {this.state.error && <p>{this.state.error}</p>}
            <input
              type="Email"
              placeholder="Endereço de e-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="Password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <input
              type="Password"
              placeholder="Repita a Senha"
              onChange={e => this.setState({ confirmPassword: e.target.value })}
            />
            <button type="submit">Cadastrar grátis</button>
            <hr />
            <Link to="/SignIn" id="SignUpLogin">Já está cadastrado? Então faça login!</Link>
          </form>
        </div>
        <Footer />
      </section>

    )
  }
}

export default withRouter(SignUp);
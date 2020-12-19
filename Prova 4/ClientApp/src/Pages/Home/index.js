import React, { Component } from 'react'
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { isAuthenticated } from '../../services/auth.js'

export default class Home extends Component {

    render() {
        if (isAuthenticated()) return (
            <section>
                <Header />
                <h1 style={{display:'flex', justifyContent: 'center', alignItems:'center'}}> Home Logado </h1>
                <Footer />
            </section>
        );
        else return (
            <section>
                <Header />
                <h1 style={{display:'flex', justifyContent: 'center', alignItems:'center'}}> Home não Logado </h1>
                <Footer />
            </section>
        )
    }
}
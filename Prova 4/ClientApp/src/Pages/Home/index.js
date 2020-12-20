import React, { useEffect, useState } from 'react';
import './styles.css';
import List from '../../components/ListaDeContatos';
import withListLoading from '../../components/LoadingContactList';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import GravarContato from '../../components/GravarContato'

import Api from '../../services/api'

import { isAuthenticated, getId } from "../../services/auth";
import { Redirect } from 'react-router-dom';

function Home() {
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        contacts: null,
    });

    useEffect(() => {
        setAppState({ loading: true });

        var resp = Api.get("Contacts/userId:" + getId()).then((contacts) => {
            const allcontacts = contacts.data;
            setAppState({ loading: false, contacts: allcontacts });
        });
        console.log("resp");
        console.log(resp);
    }, [setAppState]);
    if(isAuthenticated())
    return (<section>
        <Header />
        <GravarContato />
        <div className='App'>
            <div className='listBackground'>
                <div className='title'>
                    <h3>Meus Contatos</h3>
                </div>
                <div className='list-container'>
                    <ListLoading isLoading={appState.loading} contacts={appState.contacts} />
                </div>
            </div>
        </div>
        <Footer />
    </section>
    );
    else return <Redirect to="/SignIn"/>
  
}
export default Home;
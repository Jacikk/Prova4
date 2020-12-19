import React from 'react'
import './styles.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Api from '../../services/api'

export default class PerfilPage extends React.Component {

    state = {
        user: [],
        street: [],
        district: [],
        city: [],
        state: [],
        country: []
    }

    componentDidMount() {
        Api.get('Users/' + this.props.match.params.id)
            .then(res => {
                const user = res.data;
                this.setState({ user });
            })
        Api.get('streets/' + this.state.user.street_Id)
            .then(res => {
                const street = res.data;
                this.setState({ street });
            })
        Api.get('districts/' + this.state.street.district_Id)
            .then(res => {
                const district = res.data;
                this.setState({ district });
            })
        Api.get('cities/' + this.state.district.City_Id)
            .then(res => {
                const city = res.data;
                this.setState({ city });
            })
        Api.get('states/' + this.state.city.State_Id)
            .then(res => {
                const state = res.data;
                this.setState({ state });
            })
        Api.get('countries/' + this.state.state.Country_Id)
            .then(res => {
                const country = res.data;
                this.setState({ country });
            })

    }


    render() {

        const user = this.state.user;

        return <section>
            <Header />
            <body>
                <div className='root'>
                    <div className='flexRow'>
                        <div className='Container' id='UserName'>{user.name}</div>
                        <div className='Container' id='PageName'>Meu Perfil</div>
                    </div>
                    <div className='flexRow'>
                        <div className='Container' id='PerfilImgContainer'><img src={user.avatar} alt='Avatar do Usuario' id='ImgPerfil'></img></div>
                        <div className='Container' id='UserDescription'>{user.description}</div>
                    </div>
                    <div className='flexRow'>
                        <div className='Container' id='Role'>{user.role}</div>
                        <div className='Container' id='Institution'>{user.institution}</div>
                    </div>
                    <div className='flexRow'>
                        <div className='Container' id='telefone'>Tel: {user.telefone1}</div>
                        <div className='Container' id='telefone'>Tel: {user.telefone2}</div>
                        <div className='Container' id='Email'>E-mail: {user.email}</div>
                    </div>
                    <div className='flexRow'>
                        <div className='Container' id='BirthDate'>Data de nascimento: {user.birthDate}</div>
                        <div className='Container' id='medicalCares'>Cuidados médicos: {user.medicalCares}</div>
                    </div>
                </div>
            </body>
            <Footer />
        </section>

    }
}
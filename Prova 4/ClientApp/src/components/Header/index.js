import React from 'react';
import './styles.css';

import Button from '../Button';

import { isAuthenticated, logout } from '../../services/auth.js'
import { Link } from 'react-router-dom';

export default function Header() { 
    if (isAuthenticated()) {
        return <header>
            <div className='headerBtns'>
                <Button link='/Perfil' btnName='Perfil' />
                <Button link='/' onClick={logout} btnName='Logout' />
            </div>
        </header>
    } else return <header>
        <div className='headerBtns'>
            <Button link='/SignIn' btnName='Login' />
            <Button link='/SignUp' btnName='Register' />
        </div>
    </header>
}

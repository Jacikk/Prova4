import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return <footer>
        
        <Link to='/' className='LogoRedirect'>Voltar</Link>

    </footer>
}
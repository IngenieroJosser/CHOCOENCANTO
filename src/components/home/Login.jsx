import React, { useState } from 'react';
import '../../style/scss/components/home/_login.scss';

import back from '../../assets/icons/previous.png'
// import gmail from '../../assets/icons/gmail.png'

import { NavLink } from 'react-router-dom';
import Home from '../../modules/Home';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Aquí puedes validar los campos del formulario antes de enviarlo
        if (!email || !password) {
        setError('Por favor, complete todos los campos');
        return;
        }

        // Aquí puedes enviar los datos del formulario a tu servidor o API
        try {
        // Simula una solicitud a la API
        const response = await fetch('http://127.0.0.1/', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            setSuccess('Inicio de sesión exitoso');
            setError('');
        } else {
            setError('Error en el inicio de sesión. Por favor, verifica tus credenciales');
        }
        } catch (error) {
        setError('Error en el inicio de sesión. Por favor, verifica tus credenciales');
        }
    };

    return (
        <div className="login">
            <h1><NavLink to="/" exact><img src={back} alt="Pagina anterior"/></NavLink>Registrate a <strong> CHOCÓENCANTO!</strong></h1>
            <form onSubmit={handleSubmit}>
                <label className='correo' htmlFor="email">Correo</label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />

                <label className='acces' htmlFor="password">Contraseña</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />

                <button type="submit">Registrate</button>

                {/* <button className='gmail'><img src={gmail} alt="logo de gmail" /> Registrate en Gmail</button> */}
            </form>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
        </div>
    );
};

export default Login;
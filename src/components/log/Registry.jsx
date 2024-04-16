import '../../style/scss/login/_login.scss';
import React, { useState } from 'react';
import axios from 'axios';

const Registry = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost/phpElectiva2/log/registry.php', { email, password });
            if (response.data.success) {
                // Redirigir al usuario a la página principal
                window.location.href = 'http://localhost:5173/Resrvas';
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error('Error de conexión:', error); // Imprimir el error en la consola
            setError('Error de conexión');
        }
    };
    
    return (
        <form>
            <h2>Iniciar sesión</h2>
            <p>Inicia sesión ingresando tu dirección de correo electrónico y contraseña.</p>
            
            <label className='name-label' htmlFor="">Correo electrónico</label>
            <input type="email" name="email" placeholder='email@address.com' value={email} onChange={(e) => setEmail(e.target.value)} id="name" />

            <label className='password-label' htmlFor="">Contraseña</label>
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} name="contrasena" id="contrasena" />
            <button onClick={handleLogin} id="log-registry"></button>
            <input type="submit" value="Iniciar sesión" id='log-registry' />
            {error && <section>{error}</section>} {/* Aquí se corrigió el cierre del div */}
        </form>
    );
}

export default Registry;

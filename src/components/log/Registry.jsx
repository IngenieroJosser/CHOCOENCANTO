import '../../style/scss/login/_login.scss'

const Registry = () => {
    return (
        <form>
            <h2>Iniciar sesión</h2>
            <p>Inicia sesión ingresando tu dirección de correo electrónico y contraseña.</p>
            
            <label className='name-label' htmlFor="">Correo electrónico</label>
            <input type="email" name="email" placeholder='email@address.com' id="name" />

            <label className='password-label' htmlFor="">Contraseña</label>
            <input type="password" name="contrasena" id="contrasena" />

            <input type="submit" value="Registrarse" id='log-registry' />
        </form>

    )
}

export default Registry
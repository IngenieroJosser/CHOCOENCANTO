import '../../../style/scss/login/_createaccount.scss'

const CreateAccount = () => {
    return (
        <form>
            <h2 className='c-a'>Únete a disfrutar</h2>
            <p className='c-a-'>Únete a disfrutar ingresando tu nombre, dirección de correo electrónico y contraseña para disfrutar.</p>
            
            <div className="create-account">
                <div className="usuario">
                    <label className='name-label' htmlFor="">Usuario</label>
                    <input type="text" name="usuario" id="usuario" />
                </div>

                <div className="email">
                    <label className='name-label' htmlFor="">Correo electrónico</label>
                    <input type="email" name="email" placeholder='email@address.com' id="name" />
                </div>

                <div className="password">
                    <label className='password-' htmlFor="">Contraseña</label>
                    <input type="password" name="contrasena" id="contrasena" />
                </div>
            </div>

            <input type="submit" value="Unete a explorar" id='i--registry' />
        </form>
    )
}

export default CreateAccount
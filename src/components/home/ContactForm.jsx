import React from 'react';
import '../../style/scss/components/home/_contactform.scss';
import { NavLink } from 'react-router-dom';
import back from '../../assets/icons/previous.png';

const ContactForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="cf-encanto">
            <h2> <NavLink to="/"><img src={back} alt="pagina anterior" /></NavLink> CONTAC<strong>TANOS</strong></h2>            

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Deja tu mensaje:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit">Enviar mensaje</button>
            </form>
        </div>
    );
};

export default ContactForm;
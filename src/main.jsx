import React from 'react'
import ReactDOM from 'react-dom/client';

import Header from './components/home/Header'
import Presentation from './components/home/Presentation'
import About from './components/home/About'
import ViewServices from './components/home/ViewServices';
import ViewPlace from './components/home/ViewPlace'
import Places from './components/home/Places'
// import ContactForm from './components/home/ContactForm';
import Footer from './components/home/Footer';
// import ThemeToggleButton from './components/home/ThemeToggleButton';


//                    Evento loader 
//                          ↓
// import LoadingImage from './hooks/LoadingImage';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    {/* <LoadingImage /> */}
    <Header />
    <Presentation />
    <About />
    <ViewServices />
    <ViewPlace />
    <Places />
    {/* <ContactForm /> */}
    <Footer />
  </React.StrictMode>,
)

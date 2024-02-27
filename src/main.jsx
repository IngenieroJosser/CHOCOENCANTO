import React from 'react'
import ReactDOM from 'react-dom/client';

import Header from './components/home/Header'
import Presentation from './components/home/Presentation'
import About from './components/home/About'
import Places from './components/home/Places'
import OurServicies from './components/home/OurServicies'


//                    Evento loader 
//                          ↓
// import LoadingImage from './components/home/LoadingImage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <LoadingImage /> */}
    <Header />
    <Presentation />
    <About />
    <Places />
    <OurServicies />
  </React.StrictMode>,
)

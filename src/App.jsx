import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/home/Header';
import Presentation from './components/home/Presentation';
import About from './components/home/About';
import Places from './components/home/Places';
import OurServicies from './components/home/OurServicies';
// import Testimonials from './components/testimonials/Testimonials';
// import Blog from './components/blog/Blog';
// import Reservations from './components/reservations/Reservations';

const AppRouter = () => {
    return (
        <Switch>
        <Route exact path="/" component={Presentation} />
        <Route path="/about" component={About} />
        <Route path="/places" component={Places} />
        <Route path="/services" component={OurServicies} />
        {/* <Route path="/testimonials" component={Testimonials} />
        <Route path="/blog" component={Blog} />
        <Route path="/reservations" component={Reservations} /> */}
        </Switch>
    );
};

const App = () => {
    return (
        <React.Fragment>
        <Header />
        <AppRouter />
        </React.Fragment>
    );
};

export default App;
import React from 'react';
import GlobalStyles from '../src/components/globals/GlobalStyles';
import Nav from '../src/components/globals/Nav';
import Footer from '../src/components/globals/Footer';
import { withRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import BrowsePage from './pages/browse';
import CategoryPage from './pages/category';
import ProfilePage from './pages/profile';
import { lightTheme } from './styles';

function App() {
  // This will be used for blocking certian routes
  // const token = localStorage.getItem('token');
  return (
    <ThemeProvider theme={lightTheme}>
      <Nav />
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/browse/categories/:category" component={CategoryPage} />
        <Route exact path="/browse" component={BrowsePage} />
        <Route exact path="/:username" component={ProfilePage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default withRouter(App);

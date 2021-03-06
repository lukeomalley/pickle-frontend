import React from 'react';
import GlobalStyles from '../src/components/globals/GlobalStyles';
import Footer from '../src/components/globals/Footer';
import { withRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import ME_QUERY from '../src/queries/ME_QUERY';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import BrowsePage from './pages/browse';
import CategoryPage from './pages/category';
import ProfilePage from './pages/profile';
import NewPicklePage from './pages/newPickle';
import PicklePage from './pages/pickle';
import { lightTheme } from './styles';

function App() {
  const { loading, error } = useQuery(ME_QUERY);
  const token = localStorage.getItem('token');
  if (loading) return null;
  if (error) return null;
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/browse/categories/:category" component={CategoryPage} />
        <Route exact path="/pickle/:id" component={PicklePage} />
        <Route exact path="/new/pickle" component={token ? NewPicklePage : LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/browse" component={BrowsePage} />
        <Route exact path="/:username" component={ProfilePage} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default withRouter(App);

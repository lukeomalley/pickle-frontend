import React from 'react';
import GlobalStyles from '../src/components/globals/GlobalStyles';
import Footer from '../src/components/globals/Footer';
import { withRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import ME from '../src/queries/ME_QUERY';

import HomePage from './pages/home';
import LoginPage from './pages/login';
import BrowsePage from './pages/browse';
import CategoryPage from './pages/category';
import ProfilePage from './pages/profile';
import NewPicklePage from './pages/newPickle';
import { lightTheme } from './styles';

function App() {
  // This will be used for blocking certian routes
  const { data: me, loading, error } = useQuery(ME);
  if (loading) return null;
  if (error) return <div>Error</div>;
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={me ? HomePage : LoginPage} />
        <Route
          exact
          path="/browse/categories/:category"
          component={me ? CategoryPage : LoginPage}
        />
        <Route exact path="/new/pickle" component={me ? NewPicklePage : LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/browse" component={me ? BrowsePage : LoginPage} />
        <Route exact path="/:username" component={me ? ProfilePage : LoginPage} />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default withRouter(App);

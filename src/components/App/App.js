import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import { Home } from '../Home/Home';
import { NotFound } from '../NotFound/NotFound';
import { AppHeader } from '../elements/AppHeader/AppHeader';
import { BackToTop } from '../elements/BackToTop/BackToTop';

export const App = () => {
  const themeObject = {
    palette: {
      type: 'light',
      primary: lightBlue,
    },
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
      ].join(','),
    },
  }

  const muiTheme = createMuiTheme(themeObject);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*" >
            <NotFound />
          </Route>
        </Switch>
        <BackToTop />
      </Router>
    </MuiThemeProvider>
  );
}
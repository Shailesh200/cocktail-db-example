import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';

const appHeaderStyles = makeStyles({
  root: {
    backgroundImage: 'linear-gradient(90deg, #03a9f4 0%, #03a9f4 75%)',
    '&.MuiPaper-elevation4': {
      boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.2)',
    },
  },
  toolBar: {
    margin: '0 auto',
    width: '100%',
    maxWidth: 1280,    
    display: 'flex',
    justifyContent: 'space-between',
  },
  brandTitle: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.6,
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
});

export const AppHeader = () => {
  const classes = appHeaderStyles();

  return (
    <>     
      <Fragment>
        <AppBar className={classes.root}>
          <Toolbar className={classes.toolBar}>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Home"
              component={RouterLink}
              to="/"
            >
              <HomeIcon />
            </IconButton>
            <div className={classes.brandTitle}>
              My Cocktail Cellar
            </div>    
          </Toolbar>          
        </AppBar>
      </Fragment> 
      <Toolbar id="back-to-top-anchor" />     
    </>
  );
}

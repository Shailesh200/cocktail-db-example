import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import NoCocktailPNG from './noResults.png';

const artNoCocktailStyles = makeStyles({
  root: {
    height: 'auto',
    minHeight: 'calc(100vh - 300px)',
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    width: '100%',
    maxWidth: '320px',
    margin: '0 auto',
    textAlign: 'center',
  },
  img: {
    display: 'block',
    margin: '0 auto 24px',
    width: '100%',
    height: 'auto',
    maxWidth: '300px',
  },
  p: {
    display: 'block',
    width: '100%',
    fontSize: '17px',
  },
});

export const NoCocktailFound = () => {
  const classes = artNoCocktailStyles();

  return (
    <Fade in={true}>
      <Box component="div" className={classes.root}>
        <img src={NoCocktailPNG} alt="Search for cocktail recipes." width="350" className={classes.img} />
        <p className={classes.p}>Sorry! We do not have that cocktail. :(</p>
      </Box>
    </Fade>
  );
}

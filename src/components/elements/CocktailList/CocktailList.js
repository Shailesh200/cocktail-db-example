import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Cocktail } from '../Cocktail/Cocktail';
import { LoadingCircle } from '../LoadingCircle/LoadingCircle';
import { CocktailHome } from '../images/CocktailHome';
import { NoCocktailFound } from '../images/ArtNoCocktail';
import Fade from '@material-ui/core/Fade';

const cocktailListStyles = makeStyles(theme => ({  
  grid: {
    justifyContent: 'center',
  },
  item: {
    '@media (max-width: 459px)': {
      maxWidth: '100%',
      flexBasis: '100%',
    },  
  },
}));

export const CocktailList = ({ cocktails, loading, initial }) => {
  const classes = cocktailListStyles();

  if(initial) {
    return(
      <CocktailHome />
    );
  } else {
    if(loading) {
      return(
        <LoadingCircle />
      );
    } else {
      if(!cocktails.length) {
        return(
          <NoCocktailFound />
        )
      } else {
        return(
          <Grid container spacing={4} className={classes.grid}>
            {cocktails.map(element => {
              return(
                <Fade in={true} key={element.id}>
                  <Grid item xs={6} md={4} lg={3} className={classes.item}>
                    <Cocktail {...element} />
                  </Grid>
                </Fade>
              );            
            })}
          </Grid>
        );
      }
    }
  }
}

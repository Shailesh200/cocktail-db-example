import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const cocktailStyles = makeStyles({
  root: {
    borderRadius: 12,
    padding: 12,
    textAlign: 'center',
    height: '100%',
    boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(0)',
    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
    '&:hover': {
      boxShadow: '0 5px 15px -5px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(3px)',
    },
  },
  media: {
    height: 260,
    borderRadius: 6,
  },
  subtitle1: {
    textTransform: 'uppercase',
    fontSize: '.75rem',
    letterSpacing: 2,
    margin: '12px 0 0',
  },
  h5: {
    fontSize: '1.75rem',
    fontWeight: 300,
    margin: '12px 0 24px',
  },
});

export const Cocktail = ({ id, name, image, alcoholic }) => {
  const classes = cocktailStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
      />
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary" component="p" className={classes.subtitle1}>
          {alcoholic}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2" className={classes.h5}>
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
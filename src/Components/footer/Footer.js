import React from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  link: {
    color: 'white',
  },
  title: {
    marginLeft: '10px',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid container justify='space-between' alignItems='center'>
          <IconButton
            edge='start'
            color='inherit'
            aria-label='github'
            onClick={() => window.open('https://github.com/Strategizer/app')}
          >
            <GitHubIcon color='inherit' />
            <Typography className={classes.title} variant='h6'>
              Github Repository
            </Typography>
          </IconButton>
          <Grid item>
            <Button>
              <Typography variant='button'>
                <Link className={classes.link} to='/contributors'>
                  Our contributors
                </Link>
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;

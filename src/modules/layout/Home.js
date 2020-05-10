import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    typography: {
        color: 'black',
    },
    iconHome: {
        fontSize: 50,
        color: blue[500],
        marginTop: theme.spacing(3),
    },
    box: {
        padding: 0,
        height: "80vh",
        margin: 'auto',
    },
}));

const Home = (props) => {
    const classes = useStyles();
    return (
        <Grid container
            direction="column"
            justify="space-evenly"
            alignItems="center">
            <Grid item xs={12} sm={6}><HomeIcon className={classes.iconHome} /></Grid>
            <Grid item xs={12} sm={6}><Typography className={classes.typography} variant='h4'>
                Welcome !
            </Typography>
            </Grid>
        </Grid>


    );
}

export default Home;
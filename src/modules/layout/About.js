import React from 'react';
import { Grid, Typography } from '@material-ui/core';
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
            <Grid item xs={12} sm={6}>
                <br />
                <Typography variant={'h2'}>React Scaffold</Typography>
                <br />
                <Typography className={classes.typography}>
                    ES - Una sencilla aplicación para usar como base de tus proyectos.
                </Typography>
                <Typography>
                    EN - A simple application to use as the basis of your projects.
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Home;
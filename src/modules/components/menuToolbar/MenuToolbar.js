import React from 'react'
import {
    Grid,
    AppBar,
    Toolbar,
    Typography,
} from '@material-ui/core'
import { styles } from './StyleMenuToolbar'
import Sliderbar from '../sliderbar/Sliderbar'

function MenuToolbar() {
    const classes = styles
    return (
        <Grid container className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Sliderbar />
                    <Typography
                        className={classes.title}
                        variant='h5'
                    >
                        Your title
                    </Typography>
                   
                </Toolbar>
            </AppBar>
        </Grid>
    );
}


export default MenuToolbar;

import React from 'react'
import Home from './Home'
import About from './About'

import HomeIcon from '@material-ui/icons/HomeTwoTone';
import AboutIcon from '@material-ui/icons/InfoTwoTone';

export const routesPublic = [
    {
        name: "Home",
        path: '/home',
        component: Home,
        menuList: true,
        icon: <HomeIcon />
    },
    {
        name: "About",
        path: '/about',
        component: About,
        menuList: true,
        icon: <AboutIcon />,
    }];
import React from 'react'
import { useState } from 'react'
import './style.css'
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableNav from './SwipeableNav'
import { IconButton } from '@material-ui/core';
function Header() {
    const [open,setOpen] =useState(false)
    const toggleDrawer = () => setOpen(!open)
    return (
        <div className='user-header'>
            <div className='header-flexbox'>
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
            </div>
            <div className='header-flexbox'>
                
            </div>
            <SwipeableNav open={open} toggleDrawer={toggleDrawer} />
        </div>
    )
}

export default Header

import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'

import { IconButton, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
     
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
    title: {
        flexGrow: 1
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
    }
  },
}))

const Navbar = (props) => {
    const classes= useStyles()
    return (
        
            <AppBar className={classes.appBar}>
              <Toolbar>
                  <IconButton 
                    color="inherit"  
                    className={classes.menuButton} 
                    aria-label="menu"
                    onClick={() => props.accionAbrir()}
                    >
                      <MenuIcon /> 
                  </IconButton>
                <Typography variant="h6" className={classes.title}>
                  un titulo nuevo 
                </Typography>
                <Button variant="text" color="inherit">
                    Login 
                </Button>

                
              </Toolbar>
            </AppBar>
            
    )
}

export default Navbar
 //video 158
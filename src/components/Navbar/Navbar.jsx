import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'
export default function Navbar() {
  return (
     <>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'white',color:'black'}}>
        <Toolbar sx={{gap:2}}>
        
          <Typography variant="h6" component="div" sx={{  }}>
            KASHOP
          </Typography>
          <Box  sx={{ 
             flexGrow: 1,
   display:{xs:'none',sm:'flex'},
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }}>
            <Link component={RouterLink} to={'/'} color="inherit" underline='none'>Home</Link>
           <Link component={RouterLink} to={'/login'} color="inherit"  underline='none'>Login</Link>
          <Link component={RouterLink} to={'/register'} color="inherit" underline='none'>Register</Link>
           <Link component={RouterLink} to={'/cart'} color="inherit" underline='none'>Cart</Link>
          </Box>
           
        </Toolbar>
      </AppBar>
    </Box>
      <IconButton
            size="large"
            edge="start"
           color="inherit"
            aria-label="menu"
            sx={{ mr: 2 ,display:{xs:'flex',sm:'none'}}}
          >
            <MenuIcon />
          </IconButton>
         </>
  )
}

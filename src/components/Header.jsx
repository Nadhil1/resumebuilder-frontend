import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      sx={{backgroundColor:"Black",color:"white"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} style={{color:"white",textDecoration:"none"}}>
            Resume Builder
            </Link>
          </Typography>
          <Link to={'/all-resumes'}>
            <Button sx={{color:"white"}}>All Resumes</Button>
          </Link>
          <Link to={'/downloads'}>
            <Button sx={{color:"white"}}>All Downloads</Button>
          </Link>
          <Link to={''}>
            <Button sx={{color:"white"}}>About Us</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

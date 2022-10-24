import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button'

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography sx={{ mr: 20 }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }} href="/">
                Logo
              </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Find a Host
              </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Be a Host
              </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Tips
              </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Blogs
              </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Contacts
              </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                Sign In
              </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

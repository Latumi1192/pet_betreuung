import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormGroup, Checkbox, FormControlLabel, Button, Menu, MenuItem } from '@mui/material';

export default function SignUp_Page() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="First Name"
          placeholder="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          placeholder="Hello World"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Addresse"
          placeholder="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="ZIP Code"
          placeholder="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="City"
          placeholder="Hello World"
        />
        <TextField
          required
          id="outlined-required"
          label="Country"
          placeholder="Hello World"
        />
      </div>

      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          variant="outlined"
          onClick={handleClick}
        >
          Gender
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Male</MenuItem>
          <MenuItem onClick={handleClose}>Female</MenuItem>
          <MenuItem onClick={handleClose}>Other</MenuItem>
        </Menu>
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Account"
          placeholder="Hello World"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder="Hello World"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Password again"
          placeholder="Hello World"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="Hello World"
        />
      </div>
      <div>
        <Button variant="outlined" component="label">
          Profile picture
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox />}
          label="Datenschutzerklärung "
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Allgemein geschäftsbedingungen "
        />
      </FormGroup>
      <div>
        <Button variant="contained">Sign Up</Button>
      </div>
    </Box>
  );
}

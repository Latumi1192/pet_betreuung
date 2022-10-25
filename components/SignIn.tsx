import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControlLabel, Checkbox } from '@mui/material';

export default function SignIn() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Account"
          placeholder="Enter your Account"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          placeholder="Enter your Password"
        />
      </div>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Stay logged in"
      />
      <div>
        <Button
          variant="contained"
          onClick={() => {
            alert('clicked');
          }}
        >
          Sign In
        </Button>
      </div>
      <a href="/password_recover">
        <div>Forgot Password</div>
      </a>
      OR
      <div>
        <Button
          variant="contained"
          onClick={() => {
            alert('clicked');
          }}
        >
          Sign Up
        </Button>
      </div>
    </Box>
  );
}

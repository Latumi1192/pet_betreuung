import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import GenderButton from "./GenderButton";

export default function SignUpForm() {
  return (
    <Box
      component="form"
      sx={{
        border: 3,
        borderColor: "primary.main",
        borderRadius: "16px",
        "& .MuiTextField-root": { m: 2, width: "25ch" },
        "& .MuiButton-root": { mt: 1, ml: 2, mb: 1 },
        "& .MuiFormGroup-root": { mt: 0, ml: 1 },
        "& .MuiFormControlLabel-root": { m: 0 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="First Name"
          placeholder="Enter your first name"
        />
        <TextField
          focused
          required
          id="outlined-required"
          label="Last Name"
          placeholder="Enter your last name"
        />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="Addresse"
          placeholder="Enter your addresse"
        />
        <TextField
          focused
          required
          id="outlined-required"
          label="ZIP Code"
          placeholder="12345"
        />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="City"
          placeholder="Hamburg"
        />
        <TextField
          focused
          required
          id="outlined-required"
          label="Country"
          placeholder="Germany"
        />
      </div>

      <div>
        <GenderButton />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="Account"
          placeholder="Account"
        />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="Password"
          placeholder="Password"
        />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="Password again"
          placeholder="Password again"
        />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="Email"
          placeholder="abc@xy.z"
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
        <Button variant="contained" onClick={() => console.log("signup....")}>
          Sign Up
        </Button>
      </div>
    </Box>
  );
}

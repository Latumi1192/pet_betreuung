import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControlLabel, Checkbox, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function SignInForm() {
  const router = useRouter();
  return (
    <Box
      component="form"
      sx={{
        width: 220,
        height: 380,
        border: 3,
        borderColor: "primary.main",
        borderRadius: "16px",
        "& .MuiTextField-root": { mt: 3, ml: 1, width: "25ch" },
        "& .MuiFormControlLabel-root": { m: 0.1, width: "25ch" },
        "& .MuiButton-root": { ml: 1 },
        "& .MuiTypography-root": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="Account"
          placeholder="Enter your Account"
        />
        <TextField
          focused
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
            alert("clicked");
          }}
        >
          Sign In
        </Button>
      </div>
      <Typography>
        <a href="/password_recover">Forgot Password</a>
      </Typography>
      <Typography>---------OR---------</Typography>
      <div>
        <Button variant="contained" onClick={() => router.push("signup")}>
          Sign Up
        </Button>
      </div>
    </Box>
  );
}

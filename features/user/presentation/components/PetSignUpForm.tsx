import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormGroup, Checkbox, FormControlLabel, Button } from "@mui/material";
import { useRouter } from "next/router";
import PageBar from "./PageBar";

export default function PetSignUpForm() {
  const router = useRouter();
  return (
    <Box>
      <PageBar />
      <Box
        component="form"
        m="auto"
        sx={{
          mt: 1,
          border: 3,
          borderColor: "primary.main",
          borderRadius: "16px",
          "& .MuiTextField-root": { m: 2, width: "25ch" },
          "& .MuiButton-root": { mt: 1, ml: 2, mb: 1, mr: 2 },
          "& .MuiFormGroup-root": { mt: 0, ml: 1 },
          "& .MuiFormControlLabel-root": { m: 0 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <Button variant="outlined" component="label">
            Pet's profile picture
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
        <div>
          <Button variant="outlined" component="label">
            Pet's Document
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>
        <div>
          <TextField
            focused
            label="Kind of Pet"
            placeholder="Dog, cat, mouse, rabbit..."
          />
          <TextField
            focused
            label="Race"
            placeholder="Malteser, Chihuahua, ..."
          />
        </div>
        <div>
          <TextField
            focused
            multiline={true}
            fullWidth={true}
            rows="6"
            id="outlined-required"
            label="About"
            placeholder="Tell us about him/her"
          />
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
          <Button variant="contained" onClick={() => router.push("/")}>
            Sign Up
          </Button>
          OR
          <Button variant="contained" onClick={() => router.push("/")}>
            Later
          </Button>
        </div>
      </Box>{" "}
    </Box>
  );
}

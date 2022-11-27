import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
} from "@mui/material";
import GenderButton from "./GenderButton";
import { useRouter } from "next/router";
import { UserServiceImpl } from "../../domain/services/UserServiceImpl";

export default function SignUpForm() {
  const router = useRouter();
  const userServ = new UserServiceImpl();

  const [valid, setValid] = React.useState(true);
  const [warning, setWarning] = React.useState("");

  const [form, setForm] = React.useState({
    firstname: "",
    lastname: "",
    addresse: "",
    zipcode: 0,
    city: "",
    country: "",
    telephone: 0,
    gender: "",
    account: "",
    password: "",
    passwordagain: "",
    email: "",
    profilepicture: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

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
        "& .MuiTypography-root": { ml: 2, mt: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      {!valid && (
        <div>
          <Typography>{warning}</Typography>
        </div>
      )}
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="First Name"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
          placeholder="Enter your first name"
        />
        <TextField
          focused
          required
          id="outlined-required"
          label="Last Name"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
          placeholder="Enter your last name"
        />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="Addresse"
          name="addresse"
          value={form.addresse}
          onChange={handleChange}
          placeholder="Enter your addresse"
        />
        <TextField
          focused
          required
          id="outlined-required"
          label="ZIP Code"
          name="zipcode"
          value={form.zipcode}
          onChange={handleChange}
          placeholder="12345"
        />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="City"
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Hamburg"
        />
        <TextField
          focused
          required
          id="outlined-required"
          label="Country"
          name="country"
          value={form.country}
          onChange={handleChange}
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
          name="account"
          value={form.account}
          onChange={handleChange}
          placeholder="Account"
        />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="Password again"
          name="passwordagain"
          value={form.passwordagain}
          onChange={handleChange}
          placeholder="Password again"
        />
      </div>
      <div>
        <TextField
          focused
          required
          id="outlined-required"
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
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
        <Button
          variant="contained"
          onClick={() => {
            if (userServ.signupWarning(form) != "") {
              setWarning(userServ.signupWarning(form));
              setValid(false);
            } else {
              userServ.createUserData(form);
              router.push("petsignin");
            }
          }}
        >
          Sign Up
        </Button>
      </div>
    </Box>
  );
}

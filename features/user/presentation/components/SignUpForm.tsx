import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import GenderButton from "./GenderButton";
import { useRouter } from "next/router";
import { UserServiceImpl } from "../../domain/services/UserServiceImpl";
import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import { UserData } from "../../domain/dto/UserData";
import { PetData } from "../../domain/dto/PetData";
import PageBar from "./PageBar";

export default function SignUpForm() {
  const router = useRouter();
  const userServ = new UserServiceImpl();
  const userRepo = new UserRepositoryImpl();

  const [valid, setValid] = React.useState(true);
  const [warning, setWarning] = React.useState("");

  const [userData, setUserData] = React.useState<UserData>({
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
    email: "",
    profilepicture: "",
    uid: 0,
    pet: new Array<PetData>(),
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const [passwordagain, setPasswordAgain] = React.useState("");
  const handlePassword = (event: { target: { name: any; value: any } }) => {
    setPasswordAgain(event.target.value);
  };

  return (
    <Box>
      <PageBar />
      <Box
        component="form"
        m="auto"
        sx={{
          mt: 1,
          width: 550,
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
        {!valid && (
          <div>
            <Alert
              severity="error"
              sx={{
                borderRadius: "16px 16px 0px 0px",
              }}
            >
              <AlertTitle>Error</AlertTitle>
              <strong>{warning}</strong>
            </Alert>
          </div>
        )}
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="First Name"
            name="firstname"
            value={userData?.firstname}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          <TextField
            focused
            required
            id="outlined-required"
            label="Last Name"
            name="lastname"
            value={userData?.lastname}
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
            value={userData?.addresse}
            onChange={handleChange}
            placeholder="Enter your addresse"
          />
          <TextField
            focused
            required
            id="outlined-required"
            label="ZIP Code"
            name="zipcode"
            value={userData?.zipcode}
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
            value={userData?.city}
            onChange={handleChange}
            placeholder="Hamburg"
          />
          <TextField
            focused
            required
            id="outlined-required"
            label="Country"
            name="country"
            value={userData?.country}
            onChange={handleChange}
            placeholder="Germany"
          />
        </div>

        <div>
          <GenderButton />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            focused
            required
            id="outlined-required"
            label="Account"
            name="account"
            value={userData?.account}
            onChange={handleChange}
            placeholder="Account"
          />
          <Typography>*Must have 8-20 characters </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            focused
            required
            id="outlined-required"
            label="Password"
            name="password"
            value={userData?.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <Typography>*Must have 8-20 characters </Typography>
        </div>
        <div>
          <TextField
            focused
            required
            id="outlined-required"
            label="Password again"
            name="passwordagain"
            value={passwordagain}
            onChange={handlePassword}
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
            value={userData?.email}
            onChange={handleChange}
            placeholder="abc@xy.z"
          />
          <TextField
            focused
            required
            id="outlined-required"
            label="Telephone"
            name="telephone"
            value={userData?.telephone}
            onChange={handleChange}
            placeholder="0123456789"
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
              if (userServ.signupWarning(userData, passwordagain) != "") {
                setWarning(userServ.signupWarning(userData, passwordagain));
                setValid(false);
              } else {
                if (userServ.createUserData(userData, passwordagain))
                  router.push("petsignup");
                else {
                  setWarning("Account or email is being used");
                  setValid(false);
                }
              }
            }}
          >
            Sign Up
          </Button>
          {/* <Button
          variant="contained"
          onClick={() => {
            userRepo.resetDB();
          }}
        >
          Clear DB
        </Button> */}
          {
            <Button
              variant="contained"
              onClick={() => {
                userRepo.printDB();
              }}
            >
              Show DB
            </Button>
          }
        </div>
      </Box>{" "}
    </Box>
  );
}

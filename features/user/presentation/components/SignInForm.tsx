import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  FormControlLabel,
  Checkbox,
  Typography,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useRouter } from "next/router";
import { UserServiceImpl } from "../../domain/services/UserServiceImpl";
import { UserID } from "../../../../context/UserID";
import { useContext } from "react";
import PageBar from "./PageBar";

export default function SignInForm() {
  const userServ = new UserServiceImpl();
  const router = useRouter();
  const { uid, setUID } = useContext(UserID);

  const [form, setForm] = React.useState({
    account: "",
    password: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const [isRegistered, setRegistered] = React.useState(true);

  return (
    <Box>
      <PageBar />
      <Box
        component="form"
        m="auto"
        sx={{
          mt: 1,
          width: 220,
          border: 3,
          borderColor: "primary.main",
          borderRadius: "16px",
          "& .MuiTextField-root": { mt: 3, ml: 1, width: "25ch" },
          "& .MuiFormControlLabel-root": { m: 0.1, width: "25ch" },
          "& .MuiButton-root": { ml: 1, mb: 2 },
          "& .MuiTypography-root": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          {!isRegistered && (
            <div>
              <Alert
                severity="error"
                sx={{
                  borderRadius: "16px 16px 0px 0px",
                }}
              >
                <AlertTitle>Error</AlertTitle>
                <strong>Check input again!!!</strong>
              </Alert>
            </div>
          )}
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
            placeholder="Enter your Account"
          />
          <TextField
            focused
            id="outlined-password-input"
            label="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
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
              if (form.account == "" || form.password == "")
                setRegistered(false);
              else {
                if (userServ.isRegistered(form).account != "") {
                  setUID(userServ.isRegistered(form).uid);
                  router.push("/");
                } else {
                  setRegistered(false);
                }
                console.log(isRegistered);
              }
            }}
          >
            Sign In
          </Button>
        </div>
        <Typography>
          <a href="/passwordrecover">Forgot Password</a>
        </Typography>
        <Typography>---------OR---------</Typography>
        <div>
          <Button variant="contained" onClick={() => router.push("signup")}>
            Sign Up
          </Button>
        </div>
      </Box>{" "}
    </Box>
  );
}

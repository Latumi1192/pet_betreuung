import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography, Alert, AlertTitle } from "@mui/material";
import { useRouter } from "next/router";
import { UserServiceImpl } from "../../domain/services/UserServiceImpl";
import PageBar from "./PageBar";

export default function PasswordRecovery() {
  const router = useRouter();
  const userServ = new UserServiceImpl();
  const [isFound, setIsFound] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleChange = (event: { target: { value: any } }) => {
    setEmail(event.target.value);
  };
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
          "& .MuiTypography-root": { ml: 2, mt: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        {!isFound && (
          <div>
            {notFound && (
              <div>
                <Alert
                  severity="error"
                  sx={{
                    borderRadius: "16px 16px 0px 0px",
                  }}
                >
                  <AlertTitle>Error</AlertTitle>
                  <strong>Check your Email again!!!</strong>
                </Alert>
              </div>
            )}
            <div>
              <TextField
                focused
                label="Email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => {
                  if (userServ.recoverPassword(email) != "") {
                    setIsFound(true);
                    setPassword(userServ.recoverPassword(email));
                  } else {
                    setNotFound(true);
                  }
                }}
              >
                Recover Password
              </Button>
            </div>
          </div>
        )}
        {isFound && (
          <div>
            <Alert
              severity="success"
              sx={{
                borderRadius: "16px 16px 0px 0px",
              }}
            >
              <AlertTitle>Success</AlertTitle>
            </Alert>
            <Typography> Your password is: {password}</Typography>
            <Button
              variant="contained"
              onClick={() => {
                router.push("signin");
              }}
            >
              Return to Sign in
            </Button>
          </div>
        )}
      </Box>
    </Box>
  );
}

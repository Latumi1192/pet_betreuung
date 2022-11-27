import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { UserServiceImpl } from "../../domain/services/UserServiceImpl";
import { Password } from "@mui/icons-material";

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
    <Box
      component="form"
      sx={{
        border: 3,
        borderColor: "primary.main",
        borderRadius: "16px",
        "& .MuiTextField-root": { m: 2, width: "25ch" },
        "& .MuiButton-root": { mt: 1, ml: 2, mb: 1, mr: 2 },
        "& .MuiTypography-root": { m: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      {!isFound && (
        <div>
          {notFound && <Typography>Check your Email again</Typography>}
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
          <Typography>Your password is: {password}</Typography>
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
  );
}

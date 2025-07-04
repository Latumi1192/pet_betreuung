import { Grid } from "@mui/material";
import React from "react";
import SignInForm from "../../features/user/presentation/components/SignInForm";

const SignInPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <SignInForm />
      </Grid>
    </Grid>
  );
};

export default SignInPage;

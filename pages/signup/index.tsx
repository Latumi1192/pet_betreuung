import { Grid } from "@mui/material";
import React from "react";
import SignUpForm from "../../features/user/presentation/components/SignUpForm";

const SignUpPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <SignUpForm />
      </Grid>
    </Grid>
  );
};

export default SignUpPage;

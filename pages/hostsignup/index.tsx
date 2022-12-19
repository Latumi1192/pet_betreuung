import { Grid } from "@mui/material";
import React from "react";
import HostSignUpForm from "../../features/user/presentation/components/HostSignUpForm";

const HostSignUpPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <HostSignUpForm />
      </Grid>
    </Grid>
  );
};

export default HostSignUpPage;

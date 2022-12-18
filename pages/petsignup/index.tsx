import { Grid } from "@mui/material";
import React from "react";
import PetSignUpForm from "../../features/user/presentation/components/PetSignUpForm";

const PetSignUpPage = () => {
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
        <PetSignUpForm />
      </Grid>
    </Grid>
  );
};

export default PetSignUpPage;

import { Grid } from "@mui/material";
import React from "react";
import UserProfile from "../../features/user/presentation/components/UserProfile";

const PasswordRecoverPage = () => {
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
        <UserProfile />
      </Grid>
    </Grid>
  );
};

export default PasswordRecoverPage;

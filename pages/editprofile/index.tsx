import { Grid } from "@mui/material";
import React from "react";
import EditProfile from "../../features/user/presentation/components/EditProfile";

const PasswordRecoverPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <EditProfile />
      </Grid>
    </Grid>
  );
};

export default PasswordRecoverPage;

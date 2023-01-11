import { Grid } from "@mui/material";
import React from "react";
import HostPage from "../../features/user/presentation/components/HostPage";

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
        <HostPage />
      </Grid>
    </Grid>
  );
};

export default PasswordRecoverPage;

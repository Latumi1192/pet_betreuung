import { Grid } from "@mui/material";
import React from "react";
import PasswordRecovery from "../../features/user/presentation/components/PasswordRecovery";

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
        <PasswordRecovery />
      </Grid>
    </Grid>
  );
};

export default PasswordRecoverPage;

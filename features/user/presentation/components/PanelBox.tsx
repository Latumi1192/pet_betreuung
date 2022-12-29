import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useContext, useState } from "react";
import { UserID } from "../../../../context/UserID";
import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import { UserData } from "../../domain/dto/UserData";

export default function PanelBox() {
  const router = useRouter();
  const { uid, setUID } = useContext(UserID);
  const userRepo = new UserRepositoryImpl();
  const hostData = userRepo.getHostDB();
  const [userData, setUserData] = useState<JSX.Element[]>();
  React.useEffect(() => {
    const uData = hostData
      .filter((host) => host.uid != uid)
      .map((host) => (
        <Box
          sx={{
            width: 1 / 4,
            borderColor: "primary.main",
            border: 2,
            borderRadius: "8px",
            alignContent: "space-around",
            justifyContent: "center",
          }}
        >
          <Typography>{host.uid}</Typography>
          <Typography>{host.kind}</Typography>
          <Typography>{host.abouthost}</Typography>
        </Box>
      ));
    setUserData(uData);
  }, []);

  return (
    <Box sx={{ alignItems: "center", justifyContent: "space-around" }}>
      {userData}
    </Box>
  );
}

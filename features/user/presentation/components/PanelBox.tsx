import { Avatar, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useContext, useState } from "react";
import { HostID } from "../../../../context/HostID";
import { UserID } from "../../../../context/UserID";
import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import { UserData } from "../../domain/dto/UserData";

export default function PanelBox() {
  const router = useRouter();
  const { uid, setUID } = useContext(UserID);
  const { hostUID, setHostUID } = useContext(HostID);
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
            height: 1 / 8,
            display: "inline-flex",
            flexDirection: "row",
            borderColor: "primary.main",
            border: 2,
            borderRadius: "8px",
            alignContent: "space-around",
            justifyContent: "center",
            "& .MuiAvatar-root": { m: 1 },
          }}
        >
          <Avatar
            sx={{ width: 1 / 3, height: 1 / 3 }}
            src="https://t4.ftcdn.net/jpg/03/03/62/45/360_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg"
            onClick={() => {
              setHostUID(host.uid);
              router.push("hostpage");
            }}
          />
          <div>
            <Typography>
              Host name: {userRepo.getUserFromID(host.uid).firstname}
            </Typography>
            <Typography>ID: {host.uid}</Typography>
            <Typography>Kind of Pet: {host.kind}</Typography>
          </div>
        </Box>
      ));
    setUserData(uData);
  }, []);

  return (
    <Box
      sx={{
        width: 1 / 1,
        display: "inline-flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        alignContent: "flex-start",
        mt: 1,
        border: 3,
        "& .MuiBox-root": { m: 1 },
      }}
    >
      {userData}
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import { UserRepositoryImpl } from "../../data/UserRepositoryImpl";
import Typography from "@mui/material/Typography";
import { UserData } from "../../domain/dto/UserData";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useContext } from "react";
import { UserID } from "../../../../context/UserID";
import PageBar from "./PageBar";

export default function UserProfile() {
  const userRepo = new UserRepositoryImpl();
  const [userData, setUserData] = React.useState<UserData>();
  const router = useRouter();
  const { uid, setUID } = useContext(UserID);

  React.useEffect(() => {
    const foundUserData = userRepo.getUserFromID(uid);
    setUserData(foundUserData);
  }, []);

  return (
    <Box>
      <PageBar />
      <Box
        m="auto"
        sx={{
          mt: 1,
          width: "500px",
          border: 3,
          borderColor: "primary.main",
          borderRadius: "16px",
          "& .MuiTypography-root": { mt: 1, ml: 1 },
          "& .MuiButton-root": { m: 1 },
        }}
      >
        <Typography variant="h5">First name: {userData?.firstname}</Typography>
        <Typography variant="h5">Last name: {userData?.lastname}</Typography>
        <Typography variant="h5">Address: {userData?.addresse}, </Typography>
        <Typography variant="h5">
          {userData?.zipcode} {userData?.city},
        </Typography>
        <Typography variant="h5">{userData?.country}</Typography>
        <Typography variant="h5">Telephone: {userData?.telephone}</Typography>
        <Typography variant="h5">Gender: {userData?.gender}</Typography>
        <Typography variant="h5">Email: {userData?.email}</Typography>
        <Button variant="contained" onClick={() => router.push("/editprofile")}>
          Edit Profile
        </Button>
        <Button onClick={() => router.push("/")}>Back to Home</Button>
      </Box>{" "}
    </Box>
  );
}

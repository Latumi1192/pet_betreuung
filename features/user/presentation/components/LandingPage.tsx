import { Typography } from "@mui/material";
import * as React from "react";
import { useContext } from "react";
import PageBar from "./PageBar";
import { UserID } from "../../../../context/UserID";
export default function LandingPage() {
  const { uid, setUID } = useContext(UserID);

  return (
    <div>
      <PageBar />
      <div>
        <Typography>{uid}</Typography>
      </div>
    </div>
  );
}

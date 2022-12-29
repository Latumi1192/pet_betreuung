import { Box } from "@mui/material";
import * as React from "react";
import { useContext } from "react";
import PageBar from "./PageBar";
import { UserID } from "../../../../context/UserID";
import PanelBox from "./PanelBox";
export default function LandingPage() {
  const { uid, setUID } = useContext(UserID);

  return (
    <div>
      <PageBar />
      <div>
        <PanelBox />
      </div>
    </div>
  );
}

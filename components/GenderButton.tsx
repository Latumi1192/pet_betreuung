import * as React from "react";
import { Button, Menu, MenuItem } from "@mui/material";

export default function GenderButton() {
  const [gender, setGender] = React.useState("Gender");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        onClick={handleClick}
      >
        {gender}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            setGender("Male");
            handleClose();
          }}
        >
          Male
        </MenuItem>
        <MenuItem
          onClick={() => {
            setGender("Female");
            handleClose();
          }}
        >
          Female
        </MenuItem>
        <MenuItem
          onClick={() => {
            setGender("Other");
            handleClose();
          }}
        >
          Other
        </MenuItem>
      </Menu>
    </div>
  );
}

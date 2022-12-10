import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton/IconButton";
import { AccountCircle } from "@mui/icons-material";
import Menu from "@mui/material/Menu/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";

export default function PageBar() {
  const router = useRouter();
  const [signin, setSignIn] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography sx={{ mr: 20 }}>
            <Button sx={{ my: 2, color: "white", display: "block" }} href="/">
              Logo
            </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Find a Host
            </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Be a Host
            </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Tips
            </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Blogs
            </Button>
          </Typography>
          <Typography sx={{ mr: 20 }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Contacts
            </Button>
          </Typography>

          {signin ? (
            <Typography sx={{ mr: 20 }}>
              {" "}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose;
                    setSignIn(false);
                  }}
                >
                  Sign Out
                </MenuItem>
                <MenuItem onClick={handleClose}>Feedback</MenuItem>
              </Menu>
            </Typography>
          ) : (
            <Typography sx={{ mr: 20 }}>
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => router.push("/signin")}
              >
                Sign In
              </Button>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" sx={{ mr: 1 }}>
          Mediporta - zadanie rekrutacyjne
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import {
  AppBar,
  Container,
  useMediaQuery,
  useTheme,
  Toolbar,
  Typography,
  IconButton,
  SliderValueLabel,
} from "@mui/material";
import Tabs from "./components/Tabs";
import Drawer from "./components/Drawer";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mainNavigation = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isLargerThanMedium = useMediaQuery(theme.breakpoints.up("md"));

  const pathnames = location.pathname.split("/").filter((x) => x);
  const paths = ["/", "/introduction", "/profolio", "/others"];

  const getValue = () => {
    if (location.pathname === "/") return 0; //如果是根路徑
    return paths.indexOf(`/${pathnames[0]}`);
  };

  let value = getValue(); //傳遞給Tabs和Drawer，告訴他們哪一個選項被選取

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleChange = (e, newValue) => {
    value = newValue;
    navigate(paths[newValue]);
  };

  return (
    <AppBar style={{ backgroundColor: "#1c1c1c" }} position="relative">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5">Logo</Typography>
          {isLargerThanMedium ? (
            <Tabs value={value} onChange={handleChange} />
          ) : (
            <>
              <IconButton
                sx={{ marginLeft: "auto", color: "white" }}
                onClick={() => {
                  setIsDrawerOpen(!isDrawerOpen);
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                isOpen={isDrawerOpen}
                value={value}
                onChange={handleChange}
                onClose={() => setIsDrawerOpen(false)}
              />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default mainNavigation;

import { Outlet } from "react-router-dom";
import MainNavigation from "./mainNavigation";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <Container maxWidth="lg" sx={{ flex: "1" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;

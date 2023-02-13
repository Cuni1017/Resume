import { Outlet } from "react-router-dom";
import MainNavigation from "./mainNavigation";
import { Container } from "@mui/material";

const Layout = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <MainNavigation />
        <main style={{ marginTop: "5rem" }}>
          <Outlet />
        </main>
      </Container>
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import MainNavigation from "./mainNavigation";

const Layout = () => {
  return (
    <>
      <MainNavigation />
      
      <Outlet />
      
    </>
  );
};

export default Layout;

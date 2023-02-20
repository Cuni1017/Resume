import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import { Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink, useLocation } from "react-router-dom";

// 返回具有react-router-dom功能的MUI Link
// 因為MUI有些元件裡一定要用他的Link才會顯示
function LinkRouter(props) {
  return <Link {...props} className="capitalize" component={RouterLink} />;
}
const workPath = {
  profolio: "/profolio",
  woocommerceStore: "/profolio/woocommerceStore",
  basicComponents: "/profolio/basicComponents",
};

const Profolio = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Container maxWidth="lg" sx={{ flex: "1" }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <LinkRouter underline="hover" color="inherit" to="/">
          Home
        </LinkRouter>
        {pathnames.map((value, index) => {
          return (
            <LinkRouter
              underline="hover"
              color="inherit"
              to={workPath[value]}
              key={value}
            >
              {value}
            </LinkRouter>
          );
        })}
      </Breadcrumbs>
      <Outlet />
    </Container>
  );
};

export default Profolio;

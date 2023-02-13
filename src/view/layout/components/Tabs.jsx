import { Tabs, Tab } from "@mui/material";

const MyTabs = ({ value, onChange }) => {
  return (
    <>
      <Tabs
        value={value}
        onChange={onChange}
        variant="scrollable"
        textColor="inherit"
        // indicatorColor="inherit"
        sx={{
          marginLeft: "auto",
        }}
      >
        <Tab label="Home" />
        <Tab label="Introduction" />
        <Tab label="Profolio" />
        <Tab label="Others" />
      </Tabs>
    </>
  );
};

export default MyTabs;

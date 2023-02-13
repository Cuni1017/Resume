import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Collapse,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

const ListItemLink = (props) => {
  return <ListItemButton {...props} component={RouterLink}></ListItemButton>;
};

const MyDrawer = ({ isOpen, value, onChange, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(value);
  const [profoliosOpen, setProfoliosOpen] = useState(true);

  const pages = ["Home", "Introduction", "Profolio", "Others"];

  const renderedListItem = pages.map((page, index) => {
    return (
      <React.Fragment key={page}>
        <ListItemButton
          selected={selectedIndex === index}
          onClick={(e) => {
            setSelectedIndex(index);
            onChange(e, index);
            {
              page === "Profolio"
                ? setProfoliosOpen(!profoliosOpen)
                : onClose();
            }
          }}
        >
          <ListItemText>{page}</ListItemText>
          {page === "Profolio" ? (
            profoliosOpen ? (
              <ExpandLess />
            ) : (
              <ExpandMore />
            )
          ) : null}
        </ListItemButton>
        {page === "Profolio" ? (
          // 作品集
          <Collapse in={profoliosOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemLink to="/profolio/wooCommerceStore">
                <ListItemText sx={{ paddingLeft: "1rem" }}>
                  WooCommerceStore
                </ListItemText>
              </ListItemLink>
              <ListItemLink to="/profolio/basicComponents">
                <ListItemText sx={{ paddingLeft: "1rem" }}>
                  BasicComponents
                </ListItemText>
              </ListItemLink>
            </List>
          </Collapse>
        ) : null}
      </React.Fragment>
    );
  });

  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <Box width="200px" textAlign="center">
        <List>{renderedListItem}</List>
      </Box>
    </Drawer>
  );
};

export default MyDrawer;

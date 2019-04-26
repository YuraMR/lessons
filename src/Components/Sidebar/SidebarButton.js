import React from "react";
import {ListItem, ListItemText} from "@material-ui/core/es/index";

const SidebarButton = ({ children, handleClick, name }) => (
  <ListItem
    button
    onClick={handleClick}
  >
    <ListItemText
      inset
      primary={name}
    />
    {children}
  </ListItem>
);

export default SidebarButton

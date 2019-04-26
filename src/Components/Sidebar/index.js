import React from "react";
import SidebarList from "./SidebarList";
import Drawer from "@material-ui/core/es/Drawer/Drawer";

const SideBar = ({ classes, items, selectLesson }) => (
  <Drawer
    anchor="left"
    classes={{
      paper: classes.drawerPaper,
    }}
    variant="permanent"
  >
    <SidebarList
      items={items}
      selectLesson={selectLesson}
    />
  </Drawer>
);

export default SideBar
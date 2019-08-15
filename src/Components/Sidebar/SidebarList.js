import React from "react";
import Collapse from "@material-ui/core/es/Collapse/Collapse";
import List from "@material-ui/core/es/List/List";

import SidebarItem from "./SidebarItem";
import SidebarButtonChild from "./SidebarButtonChild";

const SidebarList = ({ items, selectLesson }) => (
  <List
    component="div"
    disablePadding
  >
    {items.map(({ children, isCategory, id, locked, name }) => (
      <SidebarItem
        key={id}
        sidebarButtonChild={open => (
          <SidebarButtonChild
            isCategory={isCategory}
            open={open}
            locked={locked}
          />
        )}
        {...{ isCategory, name, selectLesson}}
      >
        {open => isCategory && (
          <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <SidebarList
              items={children}
              selectLesson={selectLesson}
            />
          </Collapse>
        )}
      </SidebarItem>
    ))}
  </List>
);

export default SidebarList
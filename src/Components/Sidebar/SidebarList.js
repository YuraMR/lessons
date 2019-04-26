import React from "react";
import Collapse from "@material-ui/core/es/Collapse/Collapse";
import List from "@material-ui/core/es/List/List";

import SidebarItem from "./SidebarItem";

const SidebarList = ({items, selectLesson}) => (
  <List component="div" disablePadding>
    {items.map(({children, isCategory, id, locked, name}) => (
      <SidebarItem
        key={id}
        locked={locked}
        name={name}
        isCategory={isCategory}
        selectLesson={selectLesson}
      >
        {open => isCategory && (
          <Collapse in={open} timeout="auto" unmountOnExit>
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
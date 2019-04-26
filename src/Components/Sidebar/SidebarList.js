import React, { useState } from "react";
import Collapse from "@material-ui/core/es/Collapse/Collapse";
import List from "@material-ui/core/es/List/List";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Typography} from '@material-ui/core/es/index';

import SidebarItem from "./SidebarItem";

const SidebarList = ({items, selectLesson}) => {
  const [open, toggleOpen] = useState(false);

  const ExpandIcon = open ? ExpandLess : ExpandMore;

  return (
    <List component="div" disablePadding>
      {items.map(({children, isCategory, id, locked, name}) => (
        <SidebarItem
          key={id}
          locked={locked}
          name={name}
          sidebarButtonChildren={isCategory ? <ExpandIcon/> : locked && <Typography color="error">Locked</Typography>}
          handleClick={isCategory ? () => toggleOpen(!open) : () => selectLesson(name)}
        >
          {isCategory && (
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
  )
};

export default SidebarList
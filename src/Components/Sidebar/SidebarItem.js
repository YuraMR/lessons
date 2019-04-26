import React, { Fragment, useState } from 'react';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Typography} from '@material-ui/core/es/index';

import SidebarButton from './SidebarButton';

const LockedLabel = () => <Typography color="error">Locked</Typography>;

const SidebarItem = ({children, name, isCategory, locked, selectLesson}) => {
  const [open, toggleOpen] = useState(false);

  const ExpandIcon = open ? ExpandLess : ExpandMore;
  const handleClick = isCategory ? () => toggleOpen(!open) : () => selectLesson(name);

  return (
    <Fragment>
      <SidebarButton
        name={name}
        handleClick={handleClick}
      >
        {isCategory ?
          <ExpandIcon/>
          : locked && <LockedLabel/>
        }
      </SidebarButton>
      {children(open)}
    </Fragment>
  )
};

export default SidebarItem

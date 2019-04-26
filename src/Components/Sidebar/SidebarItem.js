import React, { Fragment, useState } from 'react';

import SidebarButton from './SidebarButton';

const SidebarItem = ({ children, name, isCategory, sidebarButtonChild, selectLesson }) => {
  const [open, toggleOpen] = useState(false);

  const handleClick = isCategory ? () => toggleOpen(!open) : () => selectLesson(name);

  return (
    <Fragment>
      <SidebarButton
        handleClick={handleClick}
        name={name}
      >
        {sidebarButtonChild(open)}
      </SidebarButton>
      {children(open)}
    </Fragment>
  )
};

export default SidebarItem

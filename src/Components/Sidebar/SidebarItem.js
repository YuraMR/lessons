import React, { Fragment, useState } from 'react';

import SidebarButton from './SidebarButton';

const SidebarItem = ({children, name, isCategory, sidebarButtonChildren, selectLesson}) => {
  const [open, toggleOpen] = useState(false);

  const handleClick = isCategory ? () => toggleOpen(!open) : () => selectLesson(name);

  return (
    <Fragment>
      <SidebarButton
        name={name}
        handleClick={handleClick}
      >
        {sidebarButtonChildren(open)}
      </SidebarButton>
      {children(open)}
    </Fragment>
  )
};

export default SidebarItem

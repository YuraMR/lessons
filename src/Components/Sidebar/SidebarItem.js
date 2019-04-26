import React, { Fragment } from 'react';

import SidebarButton from './SidebarButton';

const SidebarItem = ({children, name, sidebarButtonChildren, handleClick}) => (
  <Fragment>
    <SidebarButton
      name={name}
      handleClick={handleClick}
    >
      {sidebarButtonChildren}
    </SidebarButton>
    {children}
  </Fragment>
);

export default SidebarItem

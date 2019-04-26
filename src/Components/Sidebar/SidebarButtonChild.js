import React from "react";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Typography} from '@material-ui/core/es/index';

const ExpandIcon = ({ open }) => open ?
  <ExpandLess/> : <ExpandMore/>;

const LockedLabel = () =>
  <Typography color="error">Locked</Typography>;

const SidebarButtonChild = ({open, isCategory, locked}) => isCategory ?
  <ExpandIcon open={open}/> : locked ?
    <LockedLabel/> : null;

export default SidebarButtonChild
import React from 'react';
import {
  FiHelpCircle, FiHome, FiMenu, FiUser,
} from 'react-icons/fi';
import { SideContent } from './sideBarComponents';

function SideBarHome() {
  return (
    <SideContent>
      <FiMenu className="Side_bar_Icons Menu_Icon" />
      <FiHome className="Side_bar_Icons" />
      <FiUser className="Side_bar_Icons" />
      <FiHelpCircle className="Side_bar_Icons" />
    </SideContent>
  );
}

export default SideBarHome;

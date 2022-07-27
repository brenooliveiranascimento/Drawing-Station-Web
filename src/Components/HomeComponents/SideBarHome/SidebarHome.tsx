import React from 'react';
import {
  FiHelpCircle, FiHome, FiMenu, FiUser,
} from 'react-icons/fi';
import { SideBarBtn, SideContent } from './sideBarComponents';

function SideBarHome() {
  return (
    <SideContent>
      <SideBarBtn>
        <FiMenu className="Side_bar_Icons Menu_Icon" />
      </SideBarBtn>
      <SideBarBtn>
        <FiHome className="Side_bar_Icons" />
      </SideBarBtn>
      <SideBarBtn>
        <FiUser className="Side_bar_Icons" />
      </SideBarBtn>
      <SideBarBtn>
        <FiHelpCircle className="Side_bar_Icons" />
      </SideBarBtn>
    </SideContent>
  );
}

export default SideBarHome;

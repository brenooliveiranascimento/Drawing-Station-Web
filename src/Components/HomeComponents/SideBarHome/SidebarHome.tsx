/* eslint-disable global-require */
import React from 'react';
import {
  FiHelpCircle, FiHome, FiMenu, FiUser,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SideContainer } from './sideBarComponents';

function SideBarHome() {
  return (
    <SideContainer>
      <img alt="logo" src={require('../../../Assets/drawing/logo1.png')} />
      <Link className="Link" to="/">
        <FiMenu className="icon_side" />
        <span>Home</span>
      </Link>
      <Link className="Link" to="/">
        <FiHome className="icon_side" />
        <span>Home</span>
      </Link>
      <Link className="Link" to="/User">
        <FiUser className="icon_side" />
        <span>User</span>
      </Link>
      <Link className="Link" to="/User">
        <FiHelpCircle className="icon_side" />
        <span>Suporte</span>
      </Link>
    </SideContainer>
  );
}

export default SideBarHome;

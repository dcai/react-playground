import React from 'react';
import classNames from 'classnames';
import { Container } from './Container';

const NavbarItem = props => {
  const classes = classNames({
    'navbar-item': true,
    'is-active': props.active,
  });
  return <a className={classes}>{props.children}</a>;
};

const NavbarLink = props => <a className="navbar-link">{props.children}</a>;

const NavbarBurger = props => (
  <span className="navbar-burger burger" data-target={props.dataTarget}>
    <span></span>
    <span></span>
    <span></span>
  </span>
);
const NavbarBrand = props => (
  <div className="navbar-brand">
    <NavbarItem href="#">
      <span>🎲 React 🎲</span>
      <NavbarBurger />
    </NavbarItem>
  </div>
);

const NavbarMenu = props => (
  <div className="navbar-menu">
    <div className="navbar-start"></div>
    <div className="navbar-end">
      <NavbarItem active>Home</NavbarItem>
      <NavbarItem>Examples</NavbarItem>
      <NavbarItem>Features</NavbarItem>
      <NavbarItem>Team</NavbarItem>
      <div className="navbar-item has-dropdown is-hoverable">
        <NavbarLink>Account</NavbarLink>
        <div className="navbar-dropdown">
          <NavbarItem>Dashboard</NavbarItem>
          <NavbarItem>Profile</NavbarItem>
          <NavbarItem>Settings</NavbarItem>
          <hr className="navbar-divider" />
          <NavbarItem>Logout</NavbarItem>
        </div>
      </div>
    </div>
  </div>
);

export const Navbar = () => (
  <nav className="navbar is-dark">
    <Container>
      <NavbarBrand />
      <NavbarMenu />
    </Container>
  </nav>
);

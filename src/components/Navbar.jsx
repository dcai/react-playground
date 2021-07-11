import React from 'react';
import classNames from 'classnames';
import { Container } from './Container';
import { NavLink } from 'react-router-dom';

const NavbarItem = props => {
  const classes = classNames({
    'navbar-item': true,
  });
  return (
    <NavLink
      exact
      to={props.to || '/'}
      className={classes}
      activeClassName="is-active"
    >
      {props.children}
    </NavLink>
  );
};

const NavbarLink = props => (
  <a href={props.href} className="navbar-link">
    {props.children}
  </a>
);

const NavbarBurger = props => (
  <span className="navbar-burger burger" data-target={props.dataTarget}>
    <span></span>
    <span></span>
    <span></span>
  </span>
);
const NavbarBrand = props => (
  <div className="navbar-brand">
    <NavbarItem href={props.href}>
      <span>🎲 React 🎲</span>
      <NavbarBurger />
    </NavbarItem>
  </div>
);

const NavbarMenu = props => (
  <div className="navbar-menu">
    <div className="navbar-start"></div>
    <div className="navbar-end">
      <NavbarItem to="/">Home</NavbarItem>
      <NavbarItem to="/about">About</NavbarItem>
      <div className="navbar-item has-dropdown is-hoverable">
        <NavbarLink href="/">Account</NavbarLink>
        <div className="navbar-dropdown">
          <NavbarItem>Dashboard</NavbarItem>
          <NavbarItem>Settings</NavbarItem>
          <hr className="navbar-divider" />
          <NavbarItem>Logout</NavbarItem>
        </div>
      </div>
    </div>
  </div>
);

export const Navbar = () => (
  <nav className="navbar">
    <Container>
      <NavbarBrand href="/" />
      <NavbarMenu />
    </Container>
  </nav>
);

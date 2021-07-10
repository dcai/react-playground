import React from 'react';
import classNames from 'classnames';
import { Container } from './Container';

const NavbarItem = props => {
  const classes = classNames({
    'navbar-item': true,
    'is-active': props.active,
  });
  return (
    <a href={props.href || '/'} className={classes}>
      {props.children}
    </a>
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
      <NavbarItem active>Home</NavbarItem>
      <NavbarItem>Examples</NavbarItem>
      <div className="navbar-item has-dropdown is-hoverable">
        <NavbarLink href="/">Account</NavbarLink>
        <div className="navbar-dropdown is-dark">
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
  <nav className="navbar is-info">
    <Container>
      <NavbarBrand href="/" />
      <NavbarMenu />
    </Container>
  </nav>
);

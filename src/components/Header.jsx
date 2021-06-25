import React from 'react';
import { Flex, Text, Box, Link } from 'rebass';

const NavLink = props => (
  <Link
    variant="nav"
    href={props.href}
    sx={{
      display: 'inline-block',
      fontWeight: 'bold',
      px: 2,
      py: 1,
      color: 'inherit',
    }}
  >
    {props.children}
  </Link>
);

const Header = () => (
  <Flex px={2} color="white" bg="blue" alignItems="center">
    <Text p={2} fontWeight="bold">
      React Playground
    </Text>
    <Box mx="auto" />
    <NavLink href="/">Home</NavLink>
  </Flex>
);

export default Header;

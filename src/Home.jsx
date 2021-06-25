import React from 'react';
import Header from './components/Header';
import { Flex, Heading, Text, Box, Link } from 'rebass';

const SideBar = props => (
  <Box px={2} py={2} width={1 / 4}>
    <Text p={1} color="background" bg="gray" height="10em">
      1/2
    </Text>
  </Box>
);

const Main = props => (
  <Flex flexWrap="wrap" mx={-2}>
    <SideBar />
    <Box px={2} py={2} width={3 / 4}>
      <Heading bg="primary">Hello</Heading>
    </Box>
  </Flex>
);
export const Home = () => (
  <>
    <Header />
    <Main />
  </>
);

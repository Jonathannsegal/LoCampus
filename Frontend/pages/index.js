import React from 'react';
import NextLink from 'next/link';
import {
  Image,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  ButtonGroup,
} from '@chakra-ui/core';

const Index = () => (
  <>
    <Box
      border="1px solid #E8EAED"
      borderRadius="8px"
      boxshadow="0 2px 4px rgba(0,0,0,0.3)"
      bg="white"
      w="600px"
      h="400px"
      position="fixed"
      top="50%"
      left="70%"
      transform="translate(-50%, -50%)"
      p={4}
      color="black"
    >
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          type="name"
          id="name"
          aria-describedby="name-helper-text"
        />
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          id="email"
          aria-describedby="email-helper-text"
        />
        <FormHelperText id="email-helper-text">
          You need an ISU email.
        </FormHelperText>

        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          type="password"
          id="password"
          aria-describedby="password-helper-text"
        />
        <FormLabel htmlFor="confirmPassword">
          Confirm Password
        </FormLabel>
        <Input
          type="password"
          id="confirmPassword"
          aria-describedby="password-helper-text"
        />
        <ButtonGroup spacing={4}>
          <Button mt={4} variantColor="green" type="submit">
            Sign Up
          </Button>
          <Button mt={4} variantColor="teal" type="submit">
            Sign In
          </Button>
          <NextLink href="/home" passHref>
            <Button mt={4} as="a" variantColor="teal" type="submit">
              Skip
            </Button>
          </NextLink>
        </ButtonGroup>
      </FormControl>
    </Box>
    <Box bg="red.500" h="100vh" w="100vw">
      <Image
        h="100%"
        w="70%"
        src="/images/iowastate.jpg"
        alt="iowastate"
        objectFit="cover"
      />
    </Box>
  </>
);

export default Index;

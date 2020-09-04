import React from 'react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
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

const FormComponent = styled(Box)`
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

export default () => {
    return (
        <>
            <FormComponent
                border={["1px solid rgba(232, 234, 237, 0.2)", "1px solid rgba(232, 234, 237, 0.2)", "1px solid #E8EAED", "1px solid #E8EAED"]}
                borderRadius="8px"
                boxshadow="0 2px 4px rgba(0,0,0,0.3)"
                bg={["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.5)", "white", "white"]}
                w={["100%", "100%", "500px", "500px"]}
                position="fixed"
                top={["75%", "75%", "60%", "50%"]}
                left={["50%", "50%", "50%", "70%"]}
                transform="translate(-50%, -50%)"
                p={4}
                zIndex="99"
                color="black"
            >
                <Box height="40px" width="100%">
                    <Image margin="auto" width="60%" src="/images/iowastate_wordmark.png" alt="Iowa State Wordmark" />
                </Box>
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
                    <Box height={["4rem", "4rem", "4rem", "0rem"]} />
                </FormControl>
            </FormComponent>
        </>
    )
}
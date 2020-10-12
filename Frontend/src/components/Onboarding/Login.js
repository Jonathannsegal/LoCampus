import React, { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import postLogin from '../../app/util/postLogin'
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
import { Formik, Form, Field } from 'formik';

const FormComponent = styled(Box)`
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const useLogin = () => {
    const dispatch = useDispatch();
    const setUser = (input) =>
        dispatch({
            type: 'SET_USER',
            payload: { txt: input },
        });
    return { setUser };
};

const Login = () => {
    const { setUser } = useLogin();
    const [formType, setFormType] = useState("register");
    const router = useRouter();

    if (formType == "register") {
        return (
            <Formik
                initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email,
                        )
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setUser(values.name);
                    setSubmitting(false);
                    postLogin(values.name, values.email, values.password, values.confirmPassword);
                    router.push('/home');
                }}
            >
                {({ isSubmitting }) => (
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
                        <Form>
                            <Box height="40px" width="100%">
                                <Image margin="auto" width="60%" src="/images/iowastate_wordmark.png" alt="Iowa State Wordmark" />
                            </Box>
                            <FormControl>
                                <Field name="name">
                                    {({ field }) => (
                                        <FormControl>
                                            <FormLabel htmlFor="name">Name</FormLabel>
                                            <Input {...field} id="name" placeholder="your name" />
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="email">
                                    {({ field }) => (
                                        <FormControl>
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <Input {...field} id="email" placeholder="you@iastate.edu" />
                                        </FormControl>
                                    )}
                                </Field>
                                <FormHelperText id="email-helper-text">
                                    You need an ISU email.
                        </FormHelperText>
                                <Field name="password">
                                    {({ field }) => (
                                        <FormControl>
                                            <FormLabel htmlFor="password">Password</FormLabel>
                                            <Input {...field} id="password" type="password" placeholder="super secret password" />
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="confirmPassword">
                                    {({ field }) => (
                                        <FormControl>
                                            <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
                                            <Input {...field} id="confirmPassword" type="password" placeholder="super secret password" />
                                        </FormControl>
                                    )}
                                </Field>
                                <ButtonGroup spacing={4}>
                                    <Button mt={4} type="submit" disabled={isSubmitting}>
                                        Sign Up
                            </Button>
                                    <Button mt={4} variantColor="teal" onClick={() => setFormType("login")}>
                                        Sign In
                            </Button>
                                    {/* <NextLink href="/home" passHref>
                                        <Button mt={4} as="a" variantColor="teal" type="submit">
                                            Skip
                            </Button>
                                    </NextLink> */}
                                </ButtonGroup>
                                <Box height={["4rem", "4rem", "4rem", "0rem"]} />
                            </FormControl>
                        </Form>
                    </FormComponent>
                )}
            </Formik>
        );
    } else {
        return (
            <Formik
                initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email,
                        )
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setUser(values.name);
                    setSubmitting(false);
                    router.push('/home');
                }}
            >
                {({ isSubmitting }) => (
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
                        <Form>
                            <Box height="40px" width="100%">
                                <Image margin="auto" width="60%" src="/images/iowastate_wordmark.png" alt="Iowa State Wordmark" />
                            </Box>
                            <FormControl>
                                <Field name="email">
                                    {({ field }) => (
                                        <FormControl>
                                            <FormLabel htmlFor="email">Email</FormLabel>
                                            <Input {...field} id="email" placeholder="you@iastate.edu" />
                                        </FormControl>
                                    )}
                                </Field>
                                <FormHelperText id="email-helper-text">
                                    You need an ISU email.
                        </FormHelperText>
                                <Field name="password">
                                    {({ field }) => (
                                        <FormControl>
                                            <FormLabel htmlFor="password">Password</FormLabel>
                                            <Input {...field} id="password" type="password" placeholder="super secret password" />
                                        </FormControl>
                                    )}
                                </Field>
                                <ButtonGroup spacing={4}>
                                    <Button mt={4} type="submit" disabled={isSubmitting}>
                                        Sign In
                            </Button>
                                    <Button mt={4} variantColor="green" onClick={() => setFormType("register")}>
                                        Make an account
                            </Button>
                                    {/* <NextLink href="/home" passHref>
                                        <Button mt={4} as="a" variantColor="teal" type="submit">
                                            Skip
                            </Button>
                                    </NextLink> */}
                                </ButtonGroup>
                                <Box height={["4rem", "4rem", "4rem", "0rem"]} />
                            </FormControl>
                        </Form>
                    </FormComponent>
                )}
            </Formik>
        );
    }
};
export default Login;

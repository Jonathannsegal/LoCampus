import React from 'react';
import NextLink from 'next/link';
import {
    Text,
    Link
} from '@chakra-ui/core';
import Container from '../src/components/Shared/Container';

const Docs = () => {
    return (
        <Container>
            <Text fontSize="5xl">COM S 309</Text>
            <Text fontSize="3xl">Team HV_10_LOCAMPUS</Text>
            <NextLink href="http://coms-309-hv-10.cs.iastate.edu:8080/swagger-ui.html" passHref>
                <Link color="teal.500">Server side docs by Andrew Yunt</Link>
            </NextLink>
            <NextLink href="/frontenddocs" passHref>
                <Link color="teal.500">Client side docs by Jonathan Segal, Andrew Deick, Alex Domowicz</Link>
            </NextLink>
        </Container>
    );
};

export default Docs;

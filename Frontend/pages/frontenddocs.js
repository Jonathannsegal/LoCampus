import React from 'react';
import Content from './frontenddocs.mdx'
import {
    Box
} from '@chakra-ui/core';

const FrontEndDocs = () => {
    return (
        <div className="container">
            <Box m="2em">
                <Content />
            </Box>
        </div>
    );
};

export default FrontEndDocs;

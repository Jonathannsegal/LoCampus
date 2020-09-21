import React from 'react';
import { Image, Box } from '@chakra-ui/core';

export default (props) => {
  return (
    <>
      <Box position="absolute" height="50%">
        <Box width="40%">
          <Image
            margin="0.1rem 1rem"
            padding="0.3rem"
            src="/images/logo.png"
            alt="Iowa State Wordmark"
          />
        </Box>
      </Box>
    </>
  );
};

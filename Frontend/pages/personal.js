import React from 'react';
import { Box, Heading, IconButton } from '@chakra-ui/core';
import { GiPoliceBadge } from "react-icons/gi";


const Personal = () => (
  <Box size="md" m="auto">
    <Heading>Personal Page
      <a href="../badges">
              <IconButton
                variant="ghost"
                variantColor="gray"
                aria-label="Badges"
                fontSize="30px"
                icon={GiPoliceBadge}
                size="lg"
                border-radius="0.95rem"
              /> 
        </a>
      </Heading>
  </Box>
);

export default Personal;

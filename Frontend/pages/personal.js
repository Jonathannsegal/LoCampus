import React from 'react';
import { Box, Heading, IconButton } from '@chakra-ui/core';
import { GiPoliceBadge } from "react-icons/gi";
import BadgeCase from '../components/BadgeCase';


const Personal = () => (
  <>
  <Box w="100%" h="30%" py="60px"pl="300px" my="30px">
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
  <BadgeCase position="relative" w="50vw"  left="50%" color="blue.500"/>
  </>
);

export default Personal;

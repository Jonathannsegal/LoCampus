import React, { Component } from 'react';
import { Box, IconButton } from '@chakra-ui/core';
import { MdPermIdentity } from "react-icons/md";
import { FiMap } from "react-icons/fi";



class Sidebar extends Component {
    
    render() {
      return (
        <Box 
          border="0px"
          boxshadow="0 2px 4px rgba(0,0,0,0.3)"
          bg="#FF6347"
          w="6%"
          h="100%"
          position="absolute"
          left="0"
          p={4}
          color="black"
          zIndex={98}
          padding="36px"
          margin="0px"
        >
          <a href="../personal">
            <IconButton
              variant="ghost"
              variantColor="gray"
              aria-label="Profile"
              fontSize="30px"
              icon={MdPermIdentity}
              size="lg"
              top="200px"
              border-radius="0.95rem"
              position="relative"
            />  
          </a>
          <a href="../location">
            <IconButton
              variant="ghost"
              variantColor="gray"
              aria-label="Map"
              fontSize="30px"
              icon={FiMap}
              size="lg"
              top="300px"
              border-radius="0.95rem"
              position="relative"
            />
          </a>
        </Box>
      );
    }
  }

  export default Sidebar;
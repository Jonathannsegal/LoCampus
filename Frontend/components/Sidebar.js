import React, { Component } from 'react';
import { Box, Stack, Icon } from '@chakra-ui/core';
import { MdPermIdentity } from "react-icons/md";


class Sidebar extends Component {
    
    render() {
      return (
        <Box 
          border="1px solid #E8EAED"
          boxshadow="0 2px 4px rgba(0,0,0,0.3)"
          bg="#FF6347"
          w="9%"
          h="100%"
          position="absolute"
          top="50%"
          left="0"
          transform="translate(-50%, -50%)"
          p={4}
          color="black"
          zIndex={98}
        >
         <Stack>
            <Icon name="phone" position="absolute" right="5" top="20%" size="25%" color="yellow.500" />
            <Icon name="bell" position="absolute" right="5" top="0" size="30%" color="yellow.500" />
         </Stack>
        {/* Would like to use the IconButtons below instead of Icons above */}
          
          {/* <IconButton
            variant="solid"
            variantColor="gray"
            aria-label="Profile"
            fontSize="30px"
            icon={MdPermIdentity}
            size="lg"
          /> */}
        </Box>
      );
    }
  }

  export default Sidebar;
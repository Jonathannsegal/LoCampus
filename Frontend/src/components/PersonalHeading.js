import React, { Component } from 'react';
import { Flex, Image, Text, LightMode, useColorMode } from '@chakra-ui/core';
import { useSelector } from 'react-redux';
import { withRedux } from '../lib/redux';

const usePersonalHeading = () => {
  const username = useSelector((state) => state.username);
  return { username };
};

const PersonalHeading = () => {
    const { colorMode } = useColorMode();
    const { username } = usePersonalHeading();
    const bgColor = {
      light: '#ffffff',
      dark: 'gray.900',
    };
    return (
      <Flex bg="gray.200" position="relative" w="100%" h="50vh" justifyContent="center">
          <Image src="/images/iowastate.jpg" alt="Banner Picture" zIndex={1} w="100%" objectFit="cover"/>
          <Image src="https://i.pinimg.com/originals/70/2b/8c/702b8cbe5b1356702494d1c2b640a037.png" alt="Profile Picture" zIndex={2} rounded="full" size={["100px","100px","22vw","18vw"]}
          position="absolute" top="10%" left="10%"/>
          <Flex bg={bgColor[colorMode]} position="absolute" pl="2%" pr="3%" h="70px" zIndex={3} 
          bottom="0%" borderRadius="30px 30px 0 0" justifyContent="center" align="center">
              <Image src="/images/cyclone.png" alt="ISU" size="50px" rounded="full"  right="10%"/>
              <Text fontSize={["30px","30px","40px","50px"]}>
                {"\xa0" + username}
              </Text>
              
          </Flex>

      </Flex>
  );
}

export default PersonalHeading;
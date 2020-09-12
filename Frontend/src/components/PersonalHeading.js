import React, { Component } from 'react';
import { Flex, Image, Text } from '@chakra-ui/core';



class PersonalHeading extends Component {

  render() {           
    return (
        <Flex bg={this.props.color} position="relative" w="100%" h="50vh" justifyContent="center">
            <Image src="/images/iowastate.jpg" alt="Banner Picture" zIndex={1} w="100%" objectFit="cover"/>
            <Image src="/images/profile.png" alt="Profile Picture" zIndex={50} rounded="full" size="250px"
            position="absolute" top="10%" left="10%"/>
            <Flex bg="gray.100" position="absolute" pl="3%" pr="7%" h="20%" zIndex={51} 
            bottom="0%" borderRadius="30px 30px 0 0" justifyContent="center" align="center">
                <Text fontSize="50px">
                    Jon Doe
                </Text>
                <Image src="/images/cyclone.png" alt="ISU" size="50px" rounded="full" position="absolute" right="10%"/>
            </Flex>

        </Flex>
    );
  }
}

export default PersonalHeading;
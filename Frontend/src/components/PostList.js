import React, { Component } from 'react';
import { Flex, Image, Text } from '@chakra-ui/core';



class PostList extends Component {

  render() {           
    return (
        <Flex bg={this.props.color} w="55%" position="absolute" h="1000px" top="20%" left="5%" borderRadius="30px" border="5px solid" p="2%">
        <Text fontSize="30px">PostList Component</Text>
      </Flex>
    );
  }
}

export default PostList;
import React, { Component } from 'react';
import { Flex, IconButton, Image } from '@chakra-ui/core';


class BadgeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unlocked: false
    };
  }

  render() {
    return (
      <Flex w="15em" h="15em" bg="blue.200" 
      display="inline-block" padding="50px" margin="30px" 
      border="5px solid black" borderRadius="30px">
        <Image src={this.props.src} alt={this.props.alt}/>
      </Flex>
    );
  }
}

export default BadgeBox;

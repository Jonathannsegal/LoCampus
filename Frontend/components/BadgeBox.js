import React, { Component } from 'react';
import { Box, IconButton, Image } from '@chakra-ui/core';


class BadgeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unlocked: false
    };
  }

  render() {
    return (
      <Box size="200px" bg="blue.200" 
      display="inline-block" padding="40px" margin="30px" 
      border="5px solid black" borderRadius="30px">
        <Image src={this.props.src} alt={this.props.alt}/>
      </Box>
    );
  }
}

export default BadgeBox;

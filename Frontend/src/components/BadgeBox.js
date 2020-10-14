import React, { Component } from 'react';
import { Flex, IconButton, Image } from '@chakra-ui/core';
import GenericLottie from './GenericLottie';

class BadgeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unlocked: false,
      play: true,
    };
  }

  render() {
    return (
      <Flex
w="15em" h="15em" bg="blue.200" justifyContent="center" align="center"
        display="inline-block" padding="20px" margin="30px" 
        border="5px solid black" borderRadius="30px" objectFit="cover"
      >
        {this.props.src ? (
          <Image src={this.props.src} alt={this.props.alt} />
        ) : (
          <GenericLottie animData={this.props.animData} play={this.state.play}/>
        )}
      </Flex>
    );
  }
}

export default BadgeBox;

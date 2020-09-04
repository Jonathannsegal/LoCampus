import React, { Component } from 'react';
import { Box, IconButton, Image } from '@chakra-ui/core';
import BadgeBox from '../components/BadgeBox';



class BadgeCase extends Component {

  render() {
    var nameList = [
        {alt:'trophy', src:'/images/trophy.png'},
        {alt:'gear', src:'/images/gear.png'},
        {alt:'atom', src:'/images/atom.png'},
        {alt:'locked', src:'/images/question.png'},
        {alt:'locked', src:'/images/question.png'},
        {alt:'locked', src:'/images/question.png'},
        {alt:'locked', src:'/images/question.png'},
        {alt:'locked', src:'/images/question.png'},
        {alt:'locked', src:'/images/question.png'},
        {alt:'locked', src:'/images/question.png'},
        ];
    var badgeList = nameList.map(function(name){
        return <BadgeBox src={name.src} alt={name.alt} />
    })    
           
    return (
        <Box bg="blue.500" position="absolute" left="6%" top="15%" w="94vw" h="85vh">
            {badgeList}
        </Box>
    );
  }
}

export default BadgeCase;
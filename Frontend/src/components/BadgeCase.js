import React, { Component } from 'react';
import { Flex } from '@chakra-ui/core';
import BadgeBox from '../components/BadgeBox';



class BadgeCase extends Component {

  render() {
    var nameList = [
        {alt:'trophy', src:'/images/trophy.png', key:'1'},
        {alt:'gear', src:'/images/gear.png', key:'2'},
        {alt:'atom', src:'/images/atom.png', key:'3'},
        {alt:'locked', src:'/images/question.png', key:'4'},
        {alt:'locked', src:'/images/question.png', key:'5'},
        {alt:'locked', src:'/images/question.png', key:'6'},
        {alt:'locked', src:'/images/question.png', key:'7'},
        {alt:'locked', src:'/images/question.png', key:'8'},
        {alt:'locked', src:'/images/question.png', key:'9'},
        {alt:'locked', src:'/images/question.png', key:'10'},
        {alt:'locked', src:'/images/question.png', key:'11'},
        {alt:'locked', src:'/images/question.png', key:'12'},
        ];
    var badgeList = nameList.map(function(name){
        return <BadgeBox src={name.src} alt={name.alt} />
    })    
           
    return (
        <Flex bg={this.props.color} position={this.props.position} 
        left={this.props.left} top={this.props.top} w={this.props.w} h={this.props.h}
        wrap="wrap" justify="center" pt="30px" borderRadius={this.props.borderRadius}>
            {badgeList}
        </Flex>
    );
  }
}

export default BadgeCase;
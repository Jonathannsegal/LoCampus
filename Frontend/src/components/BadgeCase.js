import React, { Component } from 'react';
import { Flex } from '@chakra-ui/core';
import BadgeBox from '../components/BadgeBox';
import building from '../../public/lotties/building.json'
import chest from '../../public/lotties/chest.json'
import clock from '../../public/lotties/clock.json'
import creditcard from '../../public/lotties/creditcard.json'
import dnalottie from '../../public/lotties/dna.json'
import engineering from '../../public/lotties/engineering.json'
import handshake from '../../public/lotties/handshake.json'
import hospital from '../../public/lotties/hospital.json'
import map from '../../public/lotties/map.json'
import navpinsfalling from '../../public/lotties/navpinsfalling.json'
import radar from '../../public/lotties/radar.json'
import rocket from '../../public/lotties/rocket.json'
import student from '../../public/lotties/student.json'
import teacher from '../../public/lotties/teacher.json'
import tree from '../../public/lotties/tree.json'
import trophy from '../../public/lotties/trophy.json'
import virus from '../../public/lotties/virus.json'
import wallet from '../../public/lotties/wallet.json'
import GenericLottie from './GenericLottie';


class BadgeCase extends Component {

  render() {
    var nameList = [
        {alt:'student', src:'', animData: student, key:'1'},
        {alt:'teacher', src:'', animData: teacher, key:'2'}, //https://assets4.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json
        {alt:'creditcard', src:'', animData: creditcard, key:'3'},
        {alt:'radar', src:'', animData: radar, key:'4'},
        {alt:'locked', src:'/images/question.png', key:'5'}, //
        {alt:'locked', src:'/images/question.png', key:'6'},
        {alt:'locked', src:'/images/question.png', key:'7'},
        {alt:'locked', src:'/images/question.png', key:'8'},
        {alt:'locked', src:'/images/question.png', key:'9'},
        {alt:'locked', src:'/images/question.png', key:'10'},
        {alt:'locked', src:'/images/question.png', key:'11'},
        {alt:'locked', src:'/images/question.png', key:'12'},
        ];
    var badgeList = nameList.map(function(name){
        return <BadgeBox src={name.src} alt={name.alt} animData={name.animData} />
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
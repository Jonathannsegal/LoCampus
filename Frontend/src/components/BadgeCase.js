import React, { useEffect } from 'react';
import { Flex, Text, useColorMode } from '@chakra-ui/core';
import { Center, Square, Circle } from "@chakra-ui/react"

import BadgeBox from '../components/BadgeBox';
import { useSelector } from 'react-redux';
import { withRedux } from '../lib/redux';
import { useDispatch } from 'react-redux';




import data_building from '../../public/lotties/building.json'
import data_chest from '../../public/lotties/chest.json'
import data_clock from '../../public/lotties/clock.json'
import data_creditcard from '../../public/lotties/creditcard.json'
import data_daynight from '../../public/lotties/daynight.json'
import data_dnalottie from '../../public/lotties/dna.json'
import data_engineering from '../../public/lotties/engineering.json'
import data_handshake from '../../public/lotties/handshake.json'
import data_hospital from '../../public/lotties/hospital.json'
import data_map from '../../public/lotties/map.json'
import data_navpinsfalling from '../../public/lotties/navpinsfalling.json'
import data_partycone from '../../public/lotties/partycone.json'
import data_pencil from '../../public/lotties/pencil.json'
import data_radar from '../../public/lotties/radar.json'
import data_rocket from '../../public/lotties/rocket.json'
import data_student from '../../public/lotties/student.json'
import data_studying from '../../public/lotties/studying.json'
import data_teacher from '../../public/lotties/teacher.json'
import data_tree from '../../public/lotties/tree.json'
import data_trophy from '../../public/lotties/trophy.json'
import data_virus from '../../public/lotties/virus.json'
import data_wallet from '../../public/lotties/wallet.json'
import GenericLottie from './GenericLottie';


const useBadgeCase = () => {
  
  const dispatch = useDispatch();
  const setBadge = (badgeName, unlocked) =>
      dispatch({
          type: 'SET_BADGE',
          payload: { badge: badgeName, unlocked: unlocked },
      });

  const badges = useSelector((state) => ({...state.badges}));
  return { badges, setBadge };
};

const BadgeCase = (props) => {
  
    const { badges, setBadge } = useBadgeCase();
    const { colorMode } = useColorMode();
    const badgeText = {
      light: 'Early Bird',
      dark: 'Night Owl',
    };
  // useEffect(() => {
  //   setBadge('pencil', false);
  // }, []);

  var nameList = [
      {alt: badgeText[colorMode],   animData: data_daynight, unlocked: badges.daynight, key:'1'}, 
      {alt:'Student',               animData: data_student, unlocked: badges.student, key:'2'},
      {alt:'Scholar',               animData: data_studying, unlocked: badges.studying, key:'3'},
      {alt:'Teacher',               unlocked: false, key:'4'},                                      //https://assets4.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json
      {alt:'Collaborator',          animData: data_handshake, unlocked: badges.handshake, key:'5'},
      {alt:'Influencer',            animData: data_partycone, unlocked: badges.partycone, key:'6'},
      {alt:'Writer',                animData: data_teacher, unlocked: badges.pencil, key:'7'},
      {alt:'Author',                unlocked: false, key:'8'},
      {alt:'Engineer',              animData: data_engineering, unlocked: badges.engineering, key:'9'},
      {alt:'Scientist',             animData: data_virus, unlocked: badges.virus, key:'10'},
      {alt:'Navigator',             animData: data_radar, unlocked: badges.radar, key:'11'},
      {alt:'Tour Guide',            unlocked: false, key:'12'},
      // {alt:'Adventurer',            unlocked: false, key:'13'},
      // {alt:'Cartographer',          unlocked: false, key:'14'},
      // {alt:'Explorer',              unlocked: false, key:'15'},
      ];
  var badgeList = nameList.map(function(name){
      return <BadgeBox src={name.src} alt={name.alt} animData={name.animData} unlocked={name.unlocked} key={name.key}/>
  })    
          
  return (
      <Flex bg={props.color} position={props.position} 
      left={props.left} top={props.top} w={props.w} h={props.h} right={props.right}
      wrap="wrap" justify="center" pt="30px" borderRadius={props.borderRadius}>
          <Center w="100%">
            <Text fontSize={["30px", "40px", "50px", "58px"]} color="gray.900">Badges</Text>
          </Center>
          {badgeList}
      </Flex>
  );
  
}

export default withRedux(BadgeCase);
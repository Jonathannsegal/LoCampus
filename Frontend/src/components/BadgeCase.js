import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/core';
import BadgeBox from '../components/BadgeBox';
import { useSelector } from 'react-redux';
import { withRedux } from '../lib/redux';
import { useDispatch } from 'react-redux';



import data_building from '../../public/lotties/building.json'
import data_chest from '../../public/lotties/chest.json'
import data_clock from '../../public/lotties/clock.json'
import data_creditcard from '../../public/lotties/creditcard.json'
import data_dnalottie from '../../public/lotties/dna.json'
import data_engineering from '../../public/lotties/engineering.json'
import data_handshake from '../../public/lotties/handshake.json'
import data_hospital from '../../public/lotties/hospital.json'
import data_map from '../../public/lotties/map.json'
import data_navpinsfalling from '../../public/lotties/navpinsfalling.json'
import data_radar from '../../public/lotties/radar.json'
import data_rocket from '../../public/lotties/rocket.json'
import data_student from '../../public/lotties/student.json'
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

  //useEffect(() => {setBadge('student', false)}, []);

  var nameList = [
      {alt:'Student',     animData: data_student,     unlocked: badges.student,     key:'1'},
      {alt:'Teacher',     animData: data_teacher,     unlocked: badges.teacher,     key:'2'}, //https://assets4.lottiefiles.com/datafiles/zc3XRzudyWE36ZBJr7PIkkqq0PFIrIBgp4ojqShI/newAnimation.json
      {alt:'Businessman', animData: data_creditcard,  unlocked: badges.creditcard,  key:'3'},
      {alt:'Navigator',   animData: data_radar,       unlocked: badges.radar,       key:'4'},
      {alt:'Locked',                                  unlocked: false,              key:'5'}, 
      {alt:'Locked',                                  unlocked: false,              key:'6'},
      {alt:'Locked',                                  unlocked: false,              key:'7'},
      {alt:'Locked',                                  unlocked: false,              key:'8'},
      {alt:'Locked',                                  unlocked: false,              key:'9'},
      {alt:'Locked',                                  unlocked: false,              key:'10'},
      {alt:'Locked',                                  unlocked: false,              key:'11'},
      {alt:'Locked',                                  unlocked: false,              key:'12'},
      ];
  var badgeList = nameList.map(function(name){
      return <BadgeBox src={name.src} alt={name.alt} animData={name.animData} unlocked={name.unlocked} key={name.key}/>
  })    
          
  return (
      <Flex bg={props.color} position={props.position} 
      left={props.left} top={props.top} w={props.w} h={props.h}
      wrap="wrap" justify="center" pt="30px" borderRadius={props.borderRadius}>
          {badgeList}
      </Flex>
  );
  
}

export default withRedux(BadgeCase);
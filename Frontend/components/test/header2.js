import React from 'react';
import {
    Flex,
    Image,
    Text,
    Avatar,
    AvatarBadge,
    Grid,
    Link,
    Box,
    Icon,
    Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Button,
  Divider
} from "@chakra-ui/core";
import {MdBuild , MdCall} from "react-icons/md";

export default (props) => {
    return (
        <>
            <Flex
                width="100vw"
                bg={props.color}
                flexDirection="column"
            >
                <Flex height="150px">
                    <Image
                        src={props.image}
                        objectFit="cover"
                        objectPosition="top" 
                        w="100vw"/>
                </Flex>
                
                <Flex 
                 align="center"
                // justify="center"
                // margin="auto"
                > 
                <Divider orientation="vertical" />
                <Divider orientation="vertical" />
                
                    <Avatar
                        src={props.profilepic}
                        size="2xl" 
                        />
                    <Text
                        fontSize="50px"
                        color= {props.namecolor}
                    >
                        {props.name}
                    </Text>
                    <Divider orientation="vertical" />
                    <Divider orientation="vertical" />
                    <Divider orientation="vertical" />
                    <Divider orientation="vertical" />

                    <StatGroup
                align="left">
                        <Stat>
                        <StatLabel>Followers</StatLabel>
                        <StatNumber>2,068</StatNumber>
                        <StatLabel>Following</StatLabel>
                        <StatNumber>1,892</StatNumber>
                        </Stat>
                    </StatGroup>
                 
                    <Divider orientation="vertical" />
                    <Divider orientation="vertical" />

                        <Button leftIcon="check-circle" variantColor="green" variant="solid">
                            Follow
                        </Button>
                        <Divider orientation="vertical" />
                        <Divider orientation="vertical" />
                        <Divider orientation="vertical" />
                        
                        <Text fontSize="16px" >
                             Iowa State University Class of 2023
                        </Text>
                    
                        <Divider orientation="vertical" />
                        <Divider orientation="vertical" />
                        <Divider orientation="vertical" />

                        <Button rightIcon="chat" variantColor="blue" variant="outline">
                            Message
                        </Button>

                </Flex>
                
                <Flex>

                </Flex>
            </Flex>
        </>
    );
};
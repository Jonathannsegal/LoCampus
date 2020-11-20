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
  Divider,
  Button
} from "@chakra-ui/core";
import {MdBuild , MdCall} from "react-icons/md";


export default (props) => {
    if(props.type === "location")
    {
        return (
            <>
                <Flex
                    width="100vw"
                    bg={props.color}
                    flexDirection="column"
                >
                    <Flex height="40px">
                        <Image
                            src={props.image}
                            objectFit="cover"
                            objectPosition="top" />
                    </Flex>
                    
                    <Flex 
                    align="center"
                    justify="center"
                    margin="auto">
                    
                    {/* <StatGroup
                    align="left">
                            <Stat>
                            <StatLabel>Followers</StatLabel>
                            <StatNumber>345,670</StatNumber>
                           
                            </Stat>
                        </StatGroup>  */}
                    
                        {/* <Button leftIcon="check-circle" variantColor="green" variant="solid">
                                Follow
                            </Button> */}
                            <Divider orientation="vertical" />
                            <Divider orientation="vertical" />
                            <Divider orientation="vertical" />
                    
                        <Image
                            src={props.logo}
                            height="70px" 
                            />

                        <Divider orientation="vertical" />

                        <Text
                            fontSize="50px"
                            color= {props.namecolor}
                        >
                            {props.school}
                        </Text>
                        
                        <Divider orientation="vertical" />

                        <Image
                            src={props.logo}
                            height="70px" 
                            />
                      
                        <Divider orientation="vertical" />
                        <Divider orientation="vertical" />
                        <Divider orientation="vertical" />
    
                        <Link 
                        href={props.isulink} isExternal
                        align="right">
                             Iowa State University Official Website <Icon name="external-link" mx="2px" />
                        </Link>
    
                    </Flex>
                </Flex>
            </>
        );
    }


    else if(props.type === "personal")
    {
        return (
            <>
                <Flex
                    width="100vw"
                    bg={props.colorP}
                    flexDirection="column"
                >
                    <Flex height="150px">
                        <Image
                            src={props.imageP}
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
                            color= {props.namecolorP}
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
                                 Iowa State University Class of 2023<br></br>
                                 Computer Science major<br></br>
                                 I love soccer and lifiting
                            </Text>
                        
                            <Divider orientation="vertical" />
                            <Divider orientation="vertical" />
                            <Divider orientation="vertical" />
    
                            <Button rightIcon="chat" variantColor="blue" variant="outline">
                                Message
                            </Button>

                            <Divider orientation="vertical" />
                            <Divider orientation="vertical" />

                            <Button leftIcon="info" variantColor="red" variant="outline">
                                More Info
                            </Button>
    
                    </Flex>
                    
                    <Flex>
    
                    </Flex>
                </Flex>
            </>
        );
    }


    else if(props.type === "faculty")
    {
        return (
            <>
                <Flex
                    width="100vw"
                    bg={props.colorF}
                    flexDirection="column"
                >
                    <Flex height="150px">
                        <Image
                            src={props.imageP}
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
                            src={props.profilepicF}
                            size="2xl" 
                            />

                    <Divider orientation="vertical" />

                        <Text
                            fontSize="50px"
                            color= {props.namecolorP}
                        >
                            {props.nameF}
                        </Text>
                        <Divider orientation="vertical" />
                        <Divider orientation="vertical" />
                        <Divider orientation="vertical" />
                        <Divider orientation="vertical" />
    
                        <StatGroup
                    align="left">
                            <Stat>
                            <StatLabel>Professor of:</StatLabel>
                            <StatNumber>Computer Science</StatNumber>
                            </Stat>
                        </StatGroup>
                     
                        <Divider orientation="vertical" />

                        <Image
                            src={props.logo}
                            height="70px" 
                            />
    
                            <Divider orientation="vertical" />
                            <Divider orientation="vertical" />
                            <Divider orientation="vertical" />
                            
                            <Text fontSize="16px" as="cite" >
                                 Iowa State University Class Teacher<br></br>
                                 MBA from Harvard University<br></br>
                                 Teaches: COM S 227,228,309, 319<br></br>
                            </Text>
                        
                            <Divider orientation="vertical" />
                            <Divider orientation="vertical" />
                            <Divider orientation="vertical" />

                            <Button leftIcon="email" variantColor="blue" variant="outline">
                                Email
                            </Button>

                            <Divider orientation="vertical" />
    
                            <Button leftIcon={MdCall} variantColor="blue" variant="outline">
                                Phone
                            </Button>
    
                    </Flex>
                    
                    <Flex>
    
                    </Flex>
                </Flex>
            </>
        );
    }
    
};
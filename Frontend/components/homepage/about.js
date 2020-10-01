import React from 'react';
import { 
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
    Flex,
    Text,
    Avatar,
    Image,
    Box,
    Stack,
    Divider,
    Button,
    Textarea,
    useToast,
    StatGroup,
    Stat,
    StatLabel,
    StatNumber,
    Skeleton,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from "@chakra-ui/core";
import {MdBuild , MdCall} from "react-icons/md";

export default (props) => {
    if(props.type === "main")
    {
        return (
            <>
                <Flex>
                   
                   <Box 
                    w={['24vw', '24vw', '24vw', '24vw']} 
                    h ={['33vw', '33vw', '55vw', '33vw']} 
                    position="absolute" 
                    left="3%"  
                    bg= {props.color2}
                    top="25vh"
                    borderRadius = "25px"
                   >
   
                       <Image
                           src={props.isu}
                           w = "20vw"
                           position="relative" left={['0.5vh', '1vh', '2vh', '4vh']}  top = "3vh"
                           />
                        <Flex
                         position="relative" top = "5vh" left = "13vh"
                         align="center"
                         >   
                           <StatGroup
                               align="left"
                               position="relative"  left ={['0.5vh', '1vh', '-12vh', '0vh']}>
                               <Stat>
                               <StatLabel >Students</StatLabel>
                               <StatNumber>34,670</StatNumber>
                               </Stat>
                           </StatGroup> 
                           <Divider orientation="vertical" />
                           <StatGroup
                               align="left"
                               position="relative"  left ={['0.5vh', '1vh', '-12vh', '0vh']}>
                               <Stat>
                               <StatLabel>Teachers</StatLabel>
                               <StatNumber>1,670</StatNumber>
                               </Stat>
                           </StatGroup> 
                   </Flex>
                       <Skeleton height="20px" my="10px" position="relative" top = "5vh" />
                       <Skeleton height="20px" my="10px" position="relative" top = "5vh"/>
                       <Skeleton height="20px" my="10px" position="relative" top = "5vh"/>

                       <Tabs variant="soft-rounded" 
                                variantColor="green" 
                                position="relative" top = "5vh" left = "0vh" 
                                fontSize = {['xs', 'xs', 'xs', 'sm']}
                                textAlign = "center">
                           <TabList>
                               <Tab fontSize = {['xs', 'xs', '3px', 'sm']}>About</Tab>
                               <Tab fontSize = {['xs', 'xs', '3px', 'sm']}>Academics</Tab>
                               <Tab fontSize = {['xs', 'xs', '3px', 'sm']}>Campus</Tab>
                               <Tab fontSize = {['xs', 'xs', '3px', 'sm']}>Student Life</Tab>
                           </TabList>
                           <TabPanels>
                               <TabPanel>
                               <p>Iowa State University of Science and Technology, (Iowa State University or Iowa State), is a public land-grant research university in Ames, Iowa. It is the largest university in the state of Iowa and the third largest university in the Big 12 athletic conference.</p>
                               </TabPanel>
                               <TabPanel>
                               <p>Iowa State University is organized into eight colleges and two schools that offer 100 Bachelor's degree programs, 112 Masters programs, and 83 Ph.D programs, including one professional degree program in Veterinary Medicine.</p>
                               </TabPanel>
                               <TabPanel>
                               <p>Iowa State's campus contains over 160 buildings. Several buildings, as well as the Marston Water Tower, are listed on the National Register of Historic Places. The central campus includes 490 acres of trees, plants, and classically designed buildings.</p>
                               </TabPanel>
                               <TabPanel>
                               <p>Iowa State operates 20 on-campus residence halls. The Union Drive Association consists of four residence halls located on the west side of campus, including Friley Hall, which has been declared one of the largest residence halls in the country.</p>
                               </TabPanel>
                           </TabPanels>
                           </Tabs>
                   </Box>
                   </Flex>
                   </>    
        );
    }
}
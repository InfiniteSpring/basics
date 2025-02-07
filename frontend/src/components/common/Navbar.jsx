import { Button, Center, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { FiMoon, FiSun } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { useColorMode, useColorModeValue } from '../ui/color-mode'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();


  return (
    // <div>
        <Container maxW={"1140px"} px={4}>
            <Flex 
                h={16} 
                alignItems={"center"} 
                justifyContent={"space-between"}
                flexDir={{
                    sm:"raw"
                }} >
                <Text
                    color={"pink.600"}
                    textAlign={"center"}
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    fontSize={{base: 22, sm: 28}}
                    >
                        <Link to={"/"}>prodstore</Link>
                </Text>
                <>
                    <HStack alignItems={"center"}>
                        <Link to={"/create"}><Button bgColor={"gray.800"}>
                            <FaRegSquarePlus color='white'></FaRegSquarePlus>
                        </Button></Link>
                        <Button bgColor={"gray.800"} onClick={toggleColorMode}>
                            {colorMode === "light" ? <FiMoon color='white'></FiMoon> : <FiSun color='white'></FiSun>}
                        </Button>
                    </HStack>
                </>
            </Flex>
        </Container>
    // </div>
  )
}

export default Navbar
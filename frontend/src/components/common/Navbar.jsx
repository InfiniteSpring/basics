import { Button, Center, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    // <div>
        <Container maxW={"1140px"} px={4}>
            <Flex 
                h={16} 
                alignItems={"center"} 
                justifyContent={"space-between"}
                flexDir={{
                    base:"column",
                    sm:"raw"
                }} >
                <Text
                    // bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    // bgClip={"text"}
                    color={"pink.600"}
                    textAlign={"center"}
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    fontSize={{base: 22, sm: 28}}
                    >
                        <Link to={"/"}>prodstore</Link>
                </Text>
                <>
                    <Button></Button>
                </>
            </Flex>
        </Container>
    // </div>
  )
}

export default Navbar
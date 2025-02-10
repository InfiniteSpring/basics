"use client"

import { useProductStore } from '../shared/product';
import { useColorModeValue } from '../components/ui/color-mode';
import { Box, Button, Container, Heading, Input, useToastStyles, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import {toaster, Toaster} from "../components/ui/toaster"

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  const {createProduct} = useProductStore();

  const handleCreateProduct = async () => {
    const {success,message} = await createProduct(newProduct)
    if(success){
      setNewProduct({
        name: "", price: "", image: ""
      })
    }
    toaster.create({
      title: success == true ? "Success" : "Error",
      description: message,
      type: success == true ? "success" : "error",
      duration: 5000,
      max: 3,
      action:{
        label: "got it",
        onClick: () => console.log("got it")
      }
    })
  }

  return (
    <Container maxW={'1140px'}>
      <Toaster />
      <VStack>
        <Heading as={'h1'} size={'2xl'} textAlign={'center'} marginBottom={8}>Create new product</Heading>
        <Box w={'full'} bg={useColorModeValue('white', 'gray.800')} p={6} rounded={'lg'} shadow={'md'}>
          <VStack>
            <Input
              placeholder='Product name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <Input
              placeholder='Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <Input
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <Button bg={"pink.700"} color={'white'} onClick={handleCreateProduct} w={'full'}>
              Add Product
            </Button> 
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage
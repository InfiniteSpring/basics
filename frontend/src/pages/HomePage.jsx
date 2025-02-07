import { useProductStore } from '../shared/product'
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/common/ProductCard'

const HomePage = () => {

  const {readProducts, products} = useProductStore();

  useEffect(() => {
    readProducts()
  }, [readProducts])
  
  console.log("products: ", products)
  return (
    <div>
      <Container maxW={"1140px"} py={12}>
        <VStack>
        <Text
            color={"pink.600"}
            textAlign={"center"}
            textTransform={"uppercase"}
            fontWeight={"bold"}
            fontSize={{base: 22, sm: 28}}
            >
          Products list
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          gap={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        <Text
          fontSize="xl" textAlign={"center"}
          fontWeight="bold" color="gray.500"
        >Products not found :/ 
          <Link to={"/create"}>
            <Text
              as="span" color="pink.500"
              _hover={{textDecoration: "underline", color: "white"}}
            >Create a product!
            </Text>
          </Link>
        </Text>
        </VStack>
      </Container>
    </div>
  )
}

export default HomePage
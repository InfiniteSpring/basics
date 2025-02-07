import { 
    Box, HStack, IconButton, Image, Text, Heading, useColorModeValue 
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const ProductCart = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const onEdit = (new_product) => {
        console.log("edit works correctly", new_product)
    }
    const onDelete = (new_product) => {
        console.log("delete works correctly", new_product)
    }

    return (
        <Box
            maxW="sm"
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            transition="all 0.3s"
            _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
            bg={bg}
        >
            <Image 
                src={product.image} 
                alt={`Image of ${product.name}`} 
                h={48} 
                w="full" 
                objectFit="cover"
            />
            <Box p={4}>
                <Heading as="h3" size="md" mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
                    ${product.price}
                </Text>
                <HStack spacing={2}>
                    <IconButton 
                        icon={<EditIcon aria-hidden="true" />} 
                        colorScheme="blue" 
                        aria-label="Edit Product" 
                        onClick={() => onEdit(product)}
                    />
                    <IconButton 
                        icon={<DeleteIcon aria-hidden="true" />} 
                        colorScheme="red" 
                        aria-label="Delete Product" 
                        onClick={() => onDelete(product)}
                    />
                </HStack>
            </Box>
        </Box>
    );
}

export default ProductCart;
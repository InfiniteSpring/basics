import { 
    Box, HStack, IconButton, Image, 
    Text, Heading, Button, VStack, Input 
} from "@chakra-ui/react";
import { useState } from "react";
import { useColorModeValue } from "../ui/color-mode";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useProductStore } from "../../shared/product";
import { toaster, Toaster } from "../ui/toaster";
import {
    DialogActionTrigger,
    DialogBody,
    DialogCloseTrigger,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogRoot,
    DialogTrigger,
} from "../ui/dialog";

const ProductCart = ({ product }) => {
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const { deleteProduct, updateProduct } = useProductStore();
    
    const [editedProduct, setEditedProduct] = useState({ ...product });

    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        toaster.create({
            title: success ? "Success" : "Error",
            description: message,
            type: success ? "success" : "error",
            duration: 5000,
            max: 3,
            action:{
                label: "X",
            }
        });
    };

    const handleEditProduct = async () => {
        const { success, message } = await updateProduct(product._id, editedProduct);
        toaster.create({
            title: success ? "Success" : "Error",
            description: message,
            type: success ? "success" : "error",
            duration: 5000,
            max: 3,
            action:{
                label: "X",
            }
        });
    };

    return (
        <Box>
            <Toaster />
            <Box
                // maxW="sm"
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
                        <DialogRoot
                            key='center'
                            placement='center'
                            motionPreset="slide-in-bottom"
                        >
                            <DialogTrigger asChild>
                                <Button bg='blue.400'><FaEdit /></Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit {product.name}</DialogTitle>
                                </DialogHeader>
                                <DialogBody>
                                    <VStack spacing={4}>
                                        <Input
                                            placeholder='Product name'
                                            name='name'
                                            value={editedProduct.name}
                                            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
                                        />
                                        <Input
                                            placeholder='Price'
                                            name='price'
                                            type='number'
                                            value={editedProduct.price}
                                            onChange={(e) => setEditedProduct({ ...editedProduct, price: e.target.value })}
                                        />
                                        <Input
                                            placeholder='Image URL'
                                            name='image'
                                            value={editedProduct.image}
                                            onChange={(e) => setEditedProduct({ ...editedProduct, image: e.target.value })}
                                        />
                                    </VStack>
                                </DialogBody>
                                <DialogFooter>
                                    <DialogActionTrigger asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogActionTrigger>
                                    <Button bg="pink.700" color="white" onClick={handleEditProduct}>
                                        Confirm changes
                                    </Button> 
                                </DialogFooter>
                                <DialogCloseTrigger />
                            </DialogContent>
                        </DialogRoot>
                        <Button
                            bg='red.400'
                            onClick={() => handleDeleteProduct(product._id)}
                        >
                            <MdDeleteForever />
                        </Button>
                    </HStack>
                </Box>
            </Box>
        </Box>
    );
}

export default ProductCart;

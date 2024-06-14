import { useEffect, useRef, useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Select,
    Stack,
    Text,
    Box,
    GridItem,
    SimpleGrid,
    Flex,
    Heading, Input,
    VStack
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

import fetchProducts from '../Api/ProductApi';
import { useQuery } from '@tanstack/react-query';



function CreateSaleOrderModal({ isOpen, onClose }) {
    const [availableProducts, setAvailableProducts] = useState([]);
    const [selectedProductName, setSelectedProductName] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);

    const [selectedProduct, setselectedProduct] = useState(null);

    const { data, error, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });


    useEffect(() => {
        if (!data) return
        const productsList = data.map(
            ({ name, id, sku, updated_on }) => {
                return { id, name, sku, updated_on }
            }
        )
        setAvailableProducts(productsList)
    }, [data])



    const handleProductSelect = (productId) => {
        const selected = availableProducts.filter(product => product.id === productId)
        setSelectedProducts(prev => [...prev, selected[0]])

        // product name selection
        setSelectedProductName(availableProducts.filter(pro => pro.id === productId)[0].name)

        // item selection to map sku
        const product = availableProducts.filter(product => product.id === productId)
        setselectedProduct(product[0])
    };


    const handleRemoveProduct = (productId) => {
        const remain = selectedProducts.filter(product => product.id !== productId)
        setSelectedProducts(remain);
        setSelectedProductName(remain[remain.length - 1]?.name)
        setselectedProduct(availableProducts.filter(product => product.id === remain[remain.length - 1]?.id)[0])
    };

    const handleClose = () => {
        setSelectedProducts([]);
        setSelectedProductName(null)
        setselectedProduct(null)
        onClose();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Sale Order</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody>
                        <FormControl mb={4}>
                            <FormLabel>All Products</FormLabel>
                            <Select
                                placeholder={selectedProductName ? selectedProductName : "Select products"}
                                onChange={(e) => handleProductSelect(parseInt(e.target.value))}
                                value=""
                            >
                                {availableProducts.map(product => (
                                    <option key={product.id} value={product.id}>
                                        {product.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>


                        {selectedProducts.length > 0 && (
                            <Box mt={4}>
                                <Text fontWeight="bold">Selected Products:</Text>

                                <Box mt={2} className='flex flex-wrap gap-2 mb-4'>
                                    {selectedProducts.map(product => (
                                        <Flex key={product.id} className='border border-gray-200 rounded-full justify-between items-center px-4'
                                        >
                                            <Text>{product.name}</Text>
                                            <Button
                                                variant="ghost"
                                                aria-label="Remove"
                                                size="sm"
                                                onClick={() => handleRemoveProduct(product.id)}
                                                ml={2}
                                            >
                                                <CloseIcon />
                                            </Button>
                                        </Flex>
                                    ))}
                                </Box>
                            </Box>
                        )}

                        {selectedProduct ? selectedProduct?.sku?.map(product => (
                            <Flex key={product.id}
                                className='flex-col gap-4 w-full p-6 border-2 border-gray-200 rounded-lg mb-4'>
                                <Text className='font-bold'>SKU 227 (234 Kg)</Text>
                                <Flex className='w-full gap-4'>
                                    {/* form body */}
                                    <FormControl>
                                        <FormLabel>Selling Rate</FormLabel>
                                        <Input rounded={'none'} variant={'filled'} placeholder='Enter Selling Rate' value={product?.selling_price} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Total Items</FormLabel>
                                        <Input rounded={'none'} variant={'filled'} placeholder='Enter Quantity' value={product?.quantity_in_inventory} />
                                    </FormControl>
                                </Flex>
                            </Flex>
                        )
                        ) : <></>}
                    </ModalBody>


                    <ModalFooter className='gap-4'>
                        <Button variant="ghost" onClick={handleClose}>Cancel</Button>
                        <Button colorScheme="teal">Create</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateSaleOrderModal;

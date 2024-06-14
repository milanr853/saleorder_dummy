// SaleOrderList.js
import React, { useState } from 'react';
import { Box, Grid, GridItem, Text, Button, Flex } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import EditSaleOrderModal from './EditSaleOrderModal';

// Sample data for demonstration
const saleOrders = [
    { id: 1, customerName: 'John Doe', price: '$100', lastModified: '2024-06-15' },
    { id: 2, customerName: 'Jane Smith', price: '$150', lastModified: '2024-06-14' },
    // Add more sale orders as needed
];

function SaleOrderList({ showEditOption }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const handleOpenModal = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    return (
        <Box>
            <Grid templateColumns="1fr 3fr 1fr 2fr 1fr" gap={2} borderBottom="1px solid" borderColor="gray.200" fontWeight="bold" className='py-4'>
                <GridItem>ID</GridItem>
                <GridItem>CUSTOMER NAME</GridItem>
                <GridItem>PRICE</GridItem>
                <GridItem>LAST MODIFIED</GridItem>
                {showEditOption && <GridItem textAlign="center">EDIT</GridItem>}
            </Grid>
            {saleOrders.map(order => (
                <Grid key={order.id} templateColumns="1fr 3fr 1fr 2fr 1fr" gap={2} borderBottom="1px solid" borderColor="gray.200" className='py-4'>
                    <Flex className='items-center'>{order.id}</Flex>
                    <Flex className='items-center'>{order.customerName}</Flex>
                    <Flex className='items-center'>{order.price}</Flex>
                    <Flex className='items-center'>{order.lastModified}</Flex>
                    {showEditOption && (
                        <Flex className='justify-center'>
                            <Button variant="ghost" aria-label="Edit" onClick={() => handleOpenModal(order)}>
                                <EditIcon />
                            </Button>
                        </Flex>
                    )}
                </Grid>
            ))}
            {selectedOrder && (
                <EditSaleOrderModal isOpen={isModalOpen} onClose={handleCloseModal} saleOrder={selectedOrder} />
            )}
        </Box>
    );
}

export default SaleOrderList;

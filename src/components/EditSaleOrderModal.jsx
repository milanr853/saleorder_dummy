// EditSaleOrderModal.js
import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

function EditSaleOrderModal({ isOpen, onClose, saleOrder }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit Sale Order</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>ID</FormLabel>
                        <Input value={saleOrder.id} isReadOnly />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Customer Name</FormLabel>
                        <Input value={saleOrder.customerName} isReadOnly />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Price</FormLabel>
                        <Input value={saleOrder.price} isReadOnly />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Last Modified Date</FormLabel>
                        <Input value={saleOrder.lastModified} isReadOnly />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default EditSaleOrderModal;

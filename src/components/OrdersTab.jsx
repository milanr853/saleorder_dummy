// OrdersTab.js
import React, { useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Button, Box } from '@chakra-ui/react';
import SaleOrderList from './SaleOrderList';
import CreateSaleOrderModal from './CreateSaleOrderModal';

function OrdersTab() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Box className='w-full min-h-full flex justify-center pt-[120px]'>
            <div className='w-full px-8 flex justify-between gap-2'>
                <Tabs variant="soft-rounded" colorScheme="teal" className='w-full' onChange={(index) => setActiveTabIndex(index)}>
                    <TabList>
                        <Tab>Active sales order</Tab>
                        <Tab>Completed sales order</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <SaleOrderList showEditOption={true} />
                        </TabPanel>
                        <TabPanel>
                            <SaleOrderList showEditOption={false} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

                {activeTabIndex === 0 && (
                    <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid" onClick={handleOpenModal}>
                        Sale Order
                    </Button>
                )}

                <CreateSaleOrderModal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
        </Box>
    );
}

export default OrdersTab;

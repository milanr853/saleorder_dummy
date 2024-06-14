import React from 'react';
import { Box, Heading, VStack, FormControl, FormLabel, Input, Button, HStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onFormSubmit = (data) => {
        if (data.username === 'user' && data.password === 'password') {
            localStorage.setItem("auth", "true");
            navigate("/orders");
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Box className='p-6 w-[350px] border border-gray-200 shadow-md rounded-lg'>
            <VStack spacing={3}>
                <HStack justify="space-between" align="center" width="full" mb={4}>
                    <Heading as="h2" size="lg">Login</Heading>
                </HStack>

                <form className='w-full flex flex-col gap-2' onSubmit={handleSubmit(onFormSubmit)}>
                    <FormControl id="username">
                        <FormLabel>Username</FormLabel>
                        <Input type='text' {...register('username')} rounded={'none'} variant={'filled'} placeholder='user' />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type='password' {...register('password')} rounded={'none'} variant={'filled'} placeholder='password' />
                    </FormControl>
                    <Button rounded={'none'} colorScheme='teal' type="submit" className='w-full mt-2'>Login</Button>
                </form>
            </VStack>
        </Box>
    );
}

export default Login;

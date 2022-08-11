import React from 'react'
import { FormControl,FormLabel,Text,Flex,Input, Button } from '@chakra-ui/react'
const Login = () => {
   return (
       <Flex justify="center" align="center">      
    <form>
        <Text>Login Form</Text>
       <FormControl>
           <FormLabel htmlFor='email'>Email Address</FormLabel>
           <Input id='email' type='email'/>
       </FormControl>
       <FormControl>
           <FormLabel htmlFor='password'>Password</FormLabel>
           <Input type='password'/>
       </FormControl>
       <Button type='submit'>Login</Button>
       </form>
       </Flex>
   )
}

export default Login;

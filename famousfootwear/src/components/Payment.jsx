import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
const initstate = {
  fname: "",
  lname: "",
  email: "",
  number: "",
  password: "",
}

let cartArray = JSON.parse(localStorage.getItem('addCart'))
const Payment = () => {
  const [formState, setFormState] = useState(initstate);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const handleFormData = (e) => {

    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  const handleFormsubmit = (e) => {
    e.preventDefault()
    console.log("clicked")
  }
  const handleCartNull = () => {
    localStorage.removeItem("addCart")

    toast({
      title: 'Payment Done',
      description: "Thankyou for shopping with us.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }
  const { fname, lname, email, number, password } = formState
  return (
    <div>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Enter Credit Card details
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>

            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired onSubmit={handleFormsubmit} >
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" name={fname} onChange={handleFormData} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" onSubmit={handleFormsubmit} >
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" name={lname} onChange={handleFormData} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired onSubmit={handleFormsubmit}>
                <FormLabel>Address</FormLabel>
                <Input type="email" name={email} onChange={handleFormData} />
              </FormControl>
              <FormControl id="number" isRequired onSubmit={handleFormsubmit}>
                <FormLabel>Credit Card Number</FormLabel>
                <Input type="number" name={number} onChange={handleFormData} />
              </FormControl>
              <FormControl id="password" isRequired onSubmit={handleFormsubmit}>
                <FormLabel>CVV</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name={password} onChange={handleFormData} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={onOpen} >
                  Proceed
                </Button>
              </Stack>
              {/* <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack> */}
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Please confirm to Continue</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <RouterLink to={'/Addtocart'}><Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            </RouterLink>
            <RouterLink to={'/'}>
              <Button variant='ghost' onClick={handleCartNull}

              >Confirm</Button></RouterLink>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default Payment;
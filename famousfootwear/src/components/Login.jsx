import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  useToast,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import React from "react";
import { AuthContext } from "../AuthContextProvider";
import { useNavigate } from "react-router";

export default function Login() {
  const { login } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();
  const email = React.useRef();
  const password = React.useRef();
  const hadleClick = () => {
    
    if (
      email.current.value === "neha@gmail.com" &&
      password.current.value === "neha123"
    ) {
      login();
      toast({
        title: "Login Successful",
        description: "You are logged in",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      email.current.value = "";
      password.current.value = "";
      navigate("/")
    }
    else if (email.current.value === "" || password.current.value === "") {
      toast({
        title: "Required Fields",
        description: "Please enter email and password",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    else {
      toast({
        title: "Invalid Credentials",
        description: "Please enter valid credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

  };
  return (
    <Center>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Login
        </Heading>

        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            ref={email}
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            ref={password}
            placeholder="password"
            _placeholder={{ color: "gray.500" }}
            type="password"
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button
            bg={"red.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "red.500",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={hadleClick}
            bg={"blue.400"}
            color={"white"}
            w="full"
            _hover={{
              bg: "blue.500",
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Center>
  );
}

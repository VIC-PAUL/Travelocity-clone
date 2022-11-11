import React, { useState, useEffect } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Flex,
  Heading,
  useMediaQuery,
  useToast,
  Spinner,
  Link
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
function SignUp() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const { SignUp } = useContext(AuthContext);
  const toast = useToast();
  const Navigate = useNavigate();
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  const onChangeInput = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userData.email == "" ||
      userData.firstName == "" ||
      userData.lastName == "" ||
      userData.password == ""
    )
      return toast({
        title: "Fill all the details !!!",
        status: "error",
        duration: 1500,
        isClosable: true,
        position: "top",
      });
    SignUp(userData);
    setTimeout(() => {
      Navigate("/signin");
    }, 2000);
    setUserData({
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    });
    toast({
      title: "Signup Successfull !!!",
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <>
      {isLoading ? (
        <Flex justify="center" mt={"5"}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#3182ce"
            size="lg"
          />
        </Flex>
      ) : (
        <Flex
          justify="center"
          align="center"
          direction="column"
          textAlign="center"
          pb={10}
          boxShadow="base"
        >
          <Heading mt="10" as="h2" size="lg">
          Create an account
          </Heading>
          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            borderRadius="lg"
            p={"3"}
            cursor="pointer"
            mt={5}
          >
            {/* <FormLabel htmlFor="firstName">First Name</FormLabel> */}
            <Input
              mb={4}
              value={userData.firstName}
              type="text"
              id="firstName"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="Enter first name"
            />
            {/* <FormLabel htmlFor="lastName">Last Name</FormLabel> */}
            <Input
              mb={4}
              value={userData.lastName}
              type="text"
              id="lastName"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="Enter last name"
            />
            {/* <FormLabel htmlFor="email">Email address</FormLabel> */}
            <Input
             mb={4}
              value={userData.email}
              type="email"
              id="email"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="Enter email"
            />
            {/* <FormLabel htmlFor="password">Password</FormLabel> */}
            <Input
             mb={4}
              value={userData.password}
              id="password"
              onChange={(e) => {
                onChangeInput(e);
              }}
              type="password"
              placeholder="Enter password"
            />
             <FormHelperText>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</FormHelperText>
             <FormHelperText>By creating an account, I agree to the Travelocity <Link color="blue" href="https://www.travelocity.com/lp/lg-terms">Terms and Conditions</Link> and <Link color="blue" href="https://www.travelocity.com/lp/lg-privacy">Privacy Statement.</Link></FormHelperText>
            <Button
              w="100%"
              mt={4}
              colorScheme="blue"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Continue
            </Button>
          </FormControl>
        </Flex>
      )}
    </>
  );
}

export default SignUp;

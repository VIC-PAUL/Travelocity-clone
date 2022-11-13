import React from "react";
import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { BiWorld } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { MdOutlineFlight, MdOutlineHolidayVillage } from "react-icons/md";
import { FaCarSide } from "react-icons/fa";
import { VscMultipleWindows } from "react-icons/vsc";
import { GiCruiser } from "react-icons/gi";
import {
  Container,
  Spacer,
  Box,
  Image,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  useMediaQuery,
  Avatar,
  Icon,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverHeader,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Center,
  Heading,
  Tag,
  useToast,
  Button,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
  const [isLargerThan1280] = useMediaQuery("(min-width: 992px)");
  const [isLargerThan576] = useMediaQuery("(min-width: 576px)");
  let hoverColor = "blue.400";
  const Navigate = useNavigate();
  const toast = useToast();
  const { SignOut, currentUser } = useContext(AuthContext);
  const loggedUserName = JSON.parse(localStorage.getItem("loginUser")) || null;
  const handleSignout = (e) => {
    SignOut();
    toast({
      title: "Logged Out Successfully",
      status: "info",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
  };
  const handleTrip = () => {
    if (isAuth) Navigate("/trips");
    else
      toast({
        title: "Please Sign in !!!",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
  };
  const UserLoginSection = () => {
    return (
      <PopoverContent p={5} w="md" border="2px solid gray">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Text mt={5} fontWeight="bold">
          Members can access discounts and special features
          </Text>
          <Button
            mt={5}
            w="100%"
            colorScheme="blue"
            onClick={() => Navigate("/signin")}
          >
            Sign in
          </Button>
          <PopoverFooter>
            <Link to="/signup" mt={10}>
              <Button _hover={{ color: hoverColor }} bg="transparent" alignItems="center" ml={20}>Create a free account</Button>
            </Link>
          </PopoverFooter>
          <PopoverFooter>
            <Link mt={5} to="/favourite">
              <Text _hover={{ color: hoverColor }}>Lists of favourites</Text>
            </Link>
          </PopoverFooter>
        </PopoverBody>
        <PopoverFooter>
          <Link to="/feedback" mt={10}>
            <Text _hover={{ color: hoverColor }} ml={3}>Feedback</Text>
          </Link>
        </PopoverFooter>
      </PopoverContent>
    );
  };
  const SignInSignOutSection = () => {
    return (
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <Center mt="5" mb="5">
            <Heading size="md">Hi , {loggedUserName.firstName}</Heading>
          </Center>
          <Center mb="5">
            <Heading as="h6" size="md">
              {loggedUserName.email}
            </Heading>
          </Center>
        </PopoverHeader>
        <PopoverBody>
          <PopoverFooter>
            <Link to="/account">Account</Link>
          </PopoverFooter>
          <PopoverFooter>
            <Link to="/favourite">Lists of favourites</Link>
          </PopoverFooter>
          <PopoverFooter>
            <Link to="/feedback">Feedback</Link>
          </PopoverFooter>
        </PopoverBody>
        <PopoverFooter>
          <Center>
            <Button
              w="100%"
              colorScheme="blue"
              onClick={(e) => {
                handleSignout(e);
              }}
            >
              Sign out
            </Button>
          </Center>
        </PopoverFooter>
      </PopoverContent>
    );
  };

  return (
    <>
      <Box
        bgColor="#0a438b"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
        w="100%"
        zIndex={10}
        borderBottom="1px"
        borderBottomColor="#c5c7cc"
        pos="sticky"
        top="0"
        color="white"
      >
        <Container maxW="container.xl">
          <Stack direction="row">
            <Box p="4">
              <Stack direction="row" spacing={8}>
                <Link to="/">
                  <Image
                    w="130px"
                    src="https://www.travelocity.com/_dms/header/logo.svg?locale=en_US&siteid=80001&2"
                  />
                </Link>
                {isLargerThan576 ? (
                  <Menu>
                    <MenuButton _hover={{ color: hoverColor }} fontSize={15}>
                      More travel <ChevronDownIcon />
                    </MenuButton>
                    <Portal>
                      <MenuList p={10} fontSize="xl">
                      <MenuItem
                          _hover={{ color: hoverColor }}
                          icon={<VscMultipleWindows />}
                        >
                          Packages
                        </MenuItem>
                        <MenuItem
                          _hover={{ color: hoverColor }}
                          icon={<BsBuilding />}
                        >
                          Stays
                        </MenuItem>
                        <MenuItem
                          _hover={{ color: hoverColor }}
                          icon={<FaCarSide />}
                        >
                          Cars
                        </MenuItem>
                        <MenuItem
                          _hover={{ color: hoverColor }}
                          icon={<MdOutlineFlight />}
                        >
                          Flights
                        </MenuItem>  
                        <MenuItem
                          _hover={{ color: hoverColor }}
                          icon={<GiCruiser />}
                        >
                          Cruises
                        </MenuItem>  
                        <MenuItem
                          _hover={{ color: hoverColor }}
                          icon={<MdOutlineHolidayVillage />}
                        >
                         Things to do
                        </MenuItem>
                        <MenuItem _hover={{ color: hoverColor }}>
                        Trips for me
                        </MenuItem>
                        <MenuItem _hover={{ color: hoverColor }}>
                        Dicover
                        </MenuItem>
                        <MenuItem _hover={{ color: hoverColor }}>
                        Travel deals
                        </MenuItem>
                        <MenuItem _hover={{ color: hoverColor }}>
                        Get inspired
                        </MenuItem>
                      </MenuList>
                    </Portal>
                  </Menu>
                ) : null}
              </Stack>
            </Box>
            <Spacer />
            <Box p="4">
              {isLargerThan1280 ? (
                <Stack
                  direction="row"
                  spacing={8}
                  align="center"
                  p="1"
                  fontSize={17}
                >
                  <Text _hover={{ color: hoverColor }}>
                    <Link to="#">
                     Espanol
                    </Link>
                  </Text>
                  <Text _hover={{ color: hoverColor }}>
                    <Link href="https://apps.expediapartnercentral.com/en_US/list?utm_medium=referral&utm_source=wwwtravelocitycom-en_US&utm_campaign=HomePage&utm_contentewd=pwa-header-btn&siteId=80001&tpid=80001&eapid=0&langId=1033">List your property</Link>
                  </Text>
                  <Text _hover={{ color: hoverColor }}>
                    <Link to="/support">Support</Link>
                  </Text>
                  <Text
                    cursor="pointer"
                    _hover={{ color: hoverColor }}
                    onClick={handleTrip}
                  >
                    Trips
                  </Text>
                  <Popover>
                    <PopoverTrigger>
                      <Text cursor="pointer" _hover={{ color: hoverColor }}>
                        {isAuth ? loggedUserName.firstName : "Sign in"}
                      </Text>
                    </PopoverTrigger>
                    <Portal>
                      {isAuth ? <SignInSignOutSection /> : <UserLoginSection />}
                    </Portal>
                  </Popover>
                </Stack>
              ) : (
                <Stack direction="row" spacing={8} align="center" p="1">
                  {isLargerThan576 ? null : (
                    <Menu>
                      <MenuButton>
                        <Search2Icon />
                      </MenuButton>
                      <Portal>
                        <MenuList>
                          <MenuItem icon={<BsBuilding />}>Stays</MenuItem>
                          <MenuItem icon={<MdOutlineFlight />}>
                            Flights
                          </MenuItem>
                          <MenuItem icon={<FaCarSide />}>Cars</MenuItem>
                          <MenuItem icon={<VscMultipleWindows />}>
                            Packages
                          </MenuItem>
                          <MenuItem icon={<MdOutlineHolidayVillage />}>
                            Holiday activities
                          </MenuItem>
                          <MenuItem>Deals</MenuItem>
                          <MenuItem>Groups and meetings</MenuItem>
                          <MenuItem>Mobile</MenuItem>
                        </MenuList>
                      </Portal>
                    </Menu>
                  )}
                  <Image
                    w="20px"
                    objectFit="cover"
                    src="https://w7.pngwing.com/pngs/751/12/png-transparent-computer-icons-business-briefcase-suitcase-rectangle-people-suitcase.png"
                    alt="Dan Abramov"
                  />
                  <Popover>
                    <PopoverTrigger>
                      <Avatar
                        size="xs"
                        name="Dan Abrahmov"
                        src="https://flyclipart.com/thumb2/user-icon-png-pnglogocom-133466.png"
                      />
                    </PopoverTrigger>
                  </Popover>
                </Stack>
              )}
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;

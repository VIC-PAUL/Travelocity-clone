import {
  Container,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Input,
  InputGroup,
  InputLeftAddon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Portal,
  useMediaQuery,
  Flex,
  Spacer,
  Text,
  useCounter,
  HStack,
  Spinner,
  Heading,
  useToast,
} from "@chakra-ui/react";


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Main() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isLargerThan492] = useMediaQuery("(min-width: 492px)");
  const counter = useCounter({
    max: 10,
    min: 0,
    step: 1,
  });
  let toast = useToast();
  const hoverColor = "blue.400";
  const BoxShadow =
    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px";
  const Stays = () => {
    const [stayData, setStayData] = useState({
      city: "",
      checkin: "",
      checkout: "",
      room: 1,
      adult: 1,
      children: 1,
    });

    const onChangeInput = (e) => {
      const { id, value } = e.target;
      setStayData({ ...stayData, [id]: value });
    };

    const onIncrementCounter = (e) => {
      let { id, value } = e.target;
      if (value >= 10) {
        return false;
      }
      value = parseInt(value);
      console.log(value, typeof value);
      setStayData({ ...stayData, [id]: value + 1 });
    };

    const onDecrementCounter = (e) => {
      let { id, value } = e.target;
      if (
        (id == "room" && stayData.room <= 1) ||
        (id == "adult" && stayData.adult <= 1)
      ) {
        return false;
      }
      if (value <= 0) {
        return false;
      }
      value = parseInt(value);
      setStayData({ ...stayData, [id]: value - 1 });
    };

    let navigate = useNavigate();
    const redirect = (e) => {
      if (
        stayData.city == "" ||
        stayData.checkin == "" ||
        stayData.checkout == ""
      )
        return toast({
          title: "Please fill the details !!",
          status: "error",
          duration: 1500,
          isClosable: true,
          position: "top",
        });
      if (
        stayData.city.toLowerCase().trim() == "goa" ||
        stayData.city.toLowerCase().trim() == "jammu" ||
        stayData.city.toLowerCase().trim() == "bengaluru"
      ) {
        localStorage.setItem("staySearch", JSON.stringify(stayData));
        navigate(`/stays/${stayData.city}`);
      }
    };

    return (
      <>
        <Text pb={4} w="90%" color="blue.500">
          **Search will only work for Goa , Jammu and Bengaluru**
        </Text>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="4"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Going to" : "GT"} />
            <Input
              value={stayData.city}
              type="text"
              id="city"
              onChange={(e) => {
                onChangeInput(e);
              }}
              placeholder="Enter City Name"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-in" : "CI"} />
            <Input
              value={stayData.checkin}
              id="checkin"
              onChange={(e) => {
                onChangeInput(e);
              }}
              type="date"
              placeholder="Basic usage"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-out" : "CO"} />
            <Input
              value={stayData.checkout}
              id="checkout"
              onChange={(e) => {
                onChangeInput(e);
              }}
              type="date"
              placeholder="Basic usage"
            />
          </InputGroup>
          <InputGroup mb="15px">
            <Popover>
              <PopoverTrigger>
                <Button>
                  Travellers :-{" "}
                  {isLargerThan492
                    ? ` ${stayData.room} room , ${
                        stayData.adult + stayData.children
                      } travellers`
                    : `${stayData.room}R ,  ${
                        stayData.adult + stayData.children
                      }T`}
                </Button>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>Travellers</PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverBody>
                    <Flex align="center" gap="4" justify="space-between">
                      <Text>Room</Text>
                      <HStack w="150px" m={2}>
                        <Button
                          id="room"
                          value={stayData.room}
                          onClick={(e) => {
                            onIncrementCounter(e);
                          }}
                        >
                          +
                        </Button>
                        <Input m={2} value={stayData.room} readOnly={true} />
                        <Button
                          id="room"
                          value={stayData.room}
                          onClick={(e) => {
                            onDecrementCounter(e);
                          }}
                        >
                          -
                        </Button>
                      </HStack>
                    </Flex>
                    <Flex align="center" gap="4" justify="space-between">
                      <Text>Adults </Text>
                      <HStack w="150px" m={2}>
                        <Button
                          id="adult"
                          value={stayData.adult}
                          onClick={(e) => {
                            onIncrementCounter(e);
                          }}
                        >
                          +
                        </Button>
                        <Input m={2} value={stayData.adult} readOnly={true} />
                        <Button
                          id="adult"
                          value={stayData.adult}
                          onClick={(e) => {
                            onDecrementCounter(e);
                          }}
                        >
                          -
                        </Button>
                      </HStack>
                    </Flex>
                    <Flex align="center" gap="4" justify="space-between">
                      <Text>Children</Text>
                      <HStack w="150px" m={2}>
                        <Button
                          id="children"
                          value={stayData.children}
                          onClick={(e) => {
                            onIncrementCounter(e);
                          }}
                        >
                          +
                        </Button>
                        <Input
                          m={2}
                          value={stayData.children}
                          readOnly={true}
                        />
                        <Button
                          id="children"
                          value={stayData.children}
                          onClick={(e) => {
                            onDecrementCounter(e);
                          }}
                        >
                          -
                        </Button>
                      </HStack>
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </InputGroup>
        </Flex>
        <Button
          w="xs"
          colorScheme="blue"
          onClick={(e) => {
            console.log(stayData);
            redirect(e);
          }}
        >
          Search
        </Button>
      </>
    );
  };

  const Packages = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Leaving from" : "LF"}
            />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Going to" : "GT"} />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-in" : "CI"} />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-out" : "CO"} />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };

  const Cars = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Pick-up" : "PL"} />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Pick-up date" : "PD"}
            />
            <Input type="date" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Drop-off date" : "DD"}
            />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };

  const Flights = () => {
    return (
      <>
        <Flex
          flexWrap="wrap"
          justify="space-between"
          gap="2"
          w={isLargerThan768 ? "50%" : "90%"}
        >
          <InputGroup>
            <InputLeftAddon
              children={isLargerThan492 ? "Leaving from" : "LF"}
            />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Going to" : "GT"} />
            <Input placeholder="Enter a location" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-in" : "CI"} />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={isLargerThan492 ? "Check-out" : "CO"} />
            <Input type="date" placeholder="Basic usage" />
          </InputGroup>
        </Flex>
        <Button colorScheme="blue">Search</Button>
      </>
    );
  };
  const TabSection = ({ name }) => {
    return (
      <Tab
        _selected={{
          fontSize: "20px",
          boxShadow: "none",
          borderBottom: "2px solid blue",
          color: hoverColor,
        }}
        _hover={{ borderBottom: "1px solid blue", color: hoverColor }}
      >
        {name}
      </Tab>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <Container
      maxW="2xxl"
      mt={-55}
      bgImage="https://forever.travel-assets.com/flex/flexmanager/images/2021/06/25/TVLY_SeizeYourSomeday_lpheroB_1680x945_20210623.jpg?impolicy=fcrop&w=600&h=150&q=medium"
      bgSize="100%"
      bgRepeat="no-repeat"
      bgPos="top"
    >
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
        <>
          <Box
            border="1px"
            borderColor="gray.200"
            borderRadius="10px"
            overflow={"hidden"}
            marginTop="50"
            boxShadow={BoxShadow}
            bgColor="white"
            width={1000}
            ml={250}
            height="370px"
          >
            <Tabs align="center">
              <TabList w="90%">
                <Flex
                  flexWrap="wrap"
                  justify="center"
                  gap={isLargerThan768 ? "2" : null}
                >
                  <TabSection name={"Stays"} />
                  <TabSection name={"Flights"} />
                  <TabSection name={"Cars"} />
                  <TabSection name={"Packages"} />
                  <TabSection name={"Things to do"} />
                </Flex>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stays />
                </TabPanel>
                <TabPanel>
                  <Flights />
                </TabPanel>
                <TabPanel>
                  <Cars />
                </TabPanel>
                <TabPanel>
                  <Packages />
                </TabPanel>
                <TabPanel>
                  <Stays />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>

          <Container>
            <Flex justify="space-around" align="center">
              <Container
                boxShadow={BoxShadow}
                width="500px"
                h="200px"
                mt="80px"
                mr="10px"
                borderRadius="10px"
                bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_FitForYou_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=400&h=171&q=mediumLow')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              >
                <Flex
                  h="200px"
                  direction="column"
                  gap={5}
                  width="400px"
                  // justify="center"
                  // align="center"
                  p={5}
                  textAlign="center"
                  color="white"
                  textShadow="0 0 20px black"
                  fontWeight="bold"
                >
                  <Box>
                    <Heading
                      as="h1"
                      color="white"
                      fontSize="lg"
                      mt="150px"
                      mr="70px"
                    >
                      Find your perfect trip
                    </Heading>
                  </Box>
                  <Box>
                    <Heading as="h4" color="black" fontSize="sm">
                      Plan a trip for the whole family—from family travel tips
                      to family-friendly filters, our tools make it easy.
                    </Heading>
                  </Box>
                </Flex>
              </Container>
              <Container
                boxShadow={BoxShadow}
                width="500px"
                h="200px"
                mt="80px"
                mr="10px"
                borderRadius="10px"
                bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_Transparency_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=400&h=171&q=mediumLow')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              >
                <Flex
                  h="200px"
                  direction="column"
                  gap={5}
                  width="400px"
                  // justify="center"
                  // align="center"
                  p={5}
                  textAlign="center"
                  color="white"
                  textShadow="0 0 20px black"
                  fontWeight="bold"
                >
                  <Box>
                    <Heading
                      as="h1"
                      color="white"
                      fontSize="lg"
                      mt="150px"
                      mr="70px"
                    >
                      Book with flexibility
                    </Heading>
                  </Box>
                  <Box>
                    <Heading as="h4" color="black" fontSize="sm">
                      Looking for a change of scenery, but want something
                      flexible? With free cancellation on most hotels, you can
                      book with peace of mind.{" "}
                    </Heading>
                  </Box>
                </Flex>
              </Container>
              <Container
                boxShadow={BoxShadow}
                width="500px"
                h="200px"
                mt="80px"
                mr="10px"
                borderRadius="10px"
                bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2020/11/12/TVLY_StoreFrontRefresh_BrandPromise_GotYourBack_sfimg_562x240_20201111.jpg?impolicy=fcrop&w=400&h=171&q=mediumLow')"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
              >
                <Flex
                  h="200px"
                  direction="column"
                  gap={5}
                  width="400px"
                  // justify="center"
                  // align="center"
                  p={5}
                  textAlign="center"
                  color="white"
                  textShadow="0 0 20px black"
                  fontWeight="bold"
                >
                  <Box>
                    <Heading
                      as="h1"
                      color="white"
                      fontSize="lg"
                      mt="150px"
                      mr="70px"
                    >
                      We've got your back
                    </Heading>
                  </Box>
                  <Box>
                    <Heading as="h4" color="black" fontSize="sm">
                      Need more help along your journey? We offer 24/7 support
                      on social and through virtual agents onsite.{" "}
                    </Heading>
                  </Box>
                </Flex>
              </Container>
            </Flex>
          </Container>

          <Flex justify="space-around" align="center">
            <Container
              boxShadow={BoxShadow}
              maxW="xl"
              borderRadius="10px"
              bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_AllInclusive_imgB_375x468_20211104.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              mt={"100px"}
              h={"300px"}
              width={800}
            >
              <Flex
                h="full"
                direction="column"
                justify="center"
                align="center"
                p={2}
                textAlign="center"
                color="white"
                textShadow="0 0 20px black"
                fontWeight="bold"
                gap={"30px"}
              >
                <Box>
                  <Heading as="h3" color="white" fontSize="40px">
                    All-inclusive resorts
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h3" color="white" fontSize="15px">
                    Think of nothing beyond having a great time with your family
                  </Heading>
                </Box>
                <Button bgColor="white" color="blue">
                  View Deals
                </Button>
              </Flex>
            </Container>
            <Container
              boxShadow={BoxShadow}
              maxW="xl"
              borderRadius="10px"
              bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_LastMinute_imgB_375x468_20211104.jpg')"
              bgPosition="center"
              bgRepeat="no-repeat"
              bgSize="cover"
              mt={"100px"}
              h={"300px"}
            >
              <Flex
                h="full"
                direction="column"
                justify="center"
                align="center"
                p={2}
                textAlign="center"
                color="white"
                textShadow="0 0 20px black"
                fontWeight="bold"
                gap={"30px"}
              >
                <Box>
                  <Heading as="h3" color="white" fontSize="40px">
                    Last minute getaways
                  </Heading>
                </Box>
                <Box>
                  <Heading as="h3" color="white" fontSize="15px">
                    Celebrate the moment with an unexpected getaway
                  </Heading>
                </Box>
                <Button bgColor="white" color="blue">
                  View Deals
                </Button>
              </Flex>
            </Container>
          </Flex>
        </>
      )}
      <Box ml={20} fontWeight="bold" fontSize="3xl" mt={10}>
        <h1>Start planning your next trip</h1>
      </Box>

      <Container>
        <Flex justify="space-around" align="center">
          <Container
            boxShadow={BoxShadow}
            width="500px"
            h="200px"
            mt="10px"
            mr="10px"
            borderRadius="10px"
            bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Beach_imgB_900x506_20211104.jpg?impolicy=fcrop&w=300&h=200&q=mediumLow')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Flex
              h="200px"
              direction="column"
              gap={5}
              width="300px"
              // justify="center"
              // align="center"
              p={5}
              textAlign="center"
              color="white"
              textShadow="0 0 20px black"
              fontWeight="bold"
            >
              <Box>
                <Heading
                  as="h1"
                  color="white"
                  fontSize="lg"
                  mt="150px"
                  mr="30px"
                >
                  Sunny beach hotel offers
                </Heading>
              </Box>
            </Flex>
          </Container>
          <Container
            boxShadow={BoxShadow}
            width="500px"
            h="200px"
            mt="10px"
            mr="10px"
            borderRadius="10px"
            bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_Car_imgB_900x506_20211104.jpg?impolicy=fcrop&w=300&h=200&q=mediumLow')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Flex
              h="200px"
              direction="column"
              gap={5}
              width="300px"
              // justify="center"
              // align="center"
              p={5}
              textAlign="center"
              color="white"
              textShadow="0 0 20px black"
              fontWeight="bold"
            >
              <Box>
                <Heading
                  as="h1"
                  color="white"
                  fontSize="lg"
                  mt="150px"
                  mr="70px"
                >
                  Car rental deals
                </Heading>
              </Box>
            </Flex>
          </Container>
          <Container
            boxShadow={BoxShadow}
            width="500px"
            h="200px"
            mt="10px"
            mr="10px"
            borderRadius="10px"
            bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_MOD_imgB_900x506_20211104.jpg?impolicy=fcrop&w=300&h=200&q=mediumLow')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Flex
              h="200px"
              direction="column"
              gap={5}
              width="300px"
              // justify="center"
              // align="center"
              p={5}
              textAlign="center"
              color="white"
              textShadow="0 0 20px black"
              fontWeight="bold"
            >
              <Box>
                <Heading
                  as="h1"
                  color="white"
                  fontSize="lg"
                  mt="150px"
                  mr="70px"
                >
                  Member discounts
                </Heading>
              </Box>
            </Flex>
          </Container>

          <Container
            boxShadow={BoxShadow}
            width="500px"
            h="200px"
            mt="10px"
            mr="10px"
            borderRadius="10px"
            bgImage="url('https://forever.travel-assets.com/flex/flexmanager/images/2021/11/08/TVLY_Storefront_VacationRentals_imgB_900x506_20211104.jpg?impolicy=fcrop&w=300&h=200&q=mediumLow')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Flex
              h="200px"
              direction="column"
              gap={5}
              width="300px"
              // justify="center"
              // align="center"
              p={5}
              textAlign="center"
              color="white"
              textShadow="0 0 20px black"
              fontWeight="bold"
            >
              <Box>
                <Heading
                  as="h1"
                  color="white"
                  fontSize="lg"
                  mt="150px"
                  mr="70px"
                >
                  Vacation rental offers
                </Heading>
              </Box>
            </Flex>
          </Container>
        </Flex>
      </Container>

      <Box mt={10} ml={10}>
  <iframe
    title='travelocity'
    src='https://www.youtube.com/embed/ItS8X0SjT4s'
    allowFullScreen
    width='1350px'
    height="500px"
  />
      </Box>
    </Container>
  );
}

export default Main;

import {
  Container,
  Box,
  Image,
  Center,
  Text,
  Stack,
  Heading,
  Flex,
  Spacer,
} from "@chakra-ui/react";

let hoverColor ="blue.400"

function Footer() {
  const MenuItem = ({ name, link }) => {
    return (
      <Text fontSize="sm" textAlign={"left"} _hover={{ color: hoverColor }}>
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      </Text>
    );
  };
  return (
    <Container maxW="container.xl">
      <Box mt="50" mb="50" p="1">
        <Flex flexWrap="wrap">
          <Box>
            <Image
              w="130px"
              src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg"
            />
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="sm" textAlign={"left"}>
                Company
              </Heading>
              <MenuItem
                link={"https://www.expediagroup.com/home/default.aspx"}
                name={"About"}
              />
              <MenuItem
                link={"https://lifeatexpediagroup.com"}
                name={"Jobs"}
              />
              <MenuItem
                link={
                  "https://welcome.expediagroup.com/en/about-us/join-travelocity"
                }
                name={"List your property"}
              />
              <MenuItem
                link={
                  "https://www.expediagroup.com/partner-with-us/default.aspx"
                }
                name={"Partnerships"}
              />
              <MenuItem
                link={
                  "https://www.travelocity.com/pressroom/"
                }
                name={"Newsroom"}
              />
              <MenuItem
                link={
                  "https://www.expediagroup.com/investors/investors-overview/default.aspx"
                }
                name={"Investor Relations"}
              />
              <MenuItem
                link={
                  "https://roaminggnomestore.com/"
                }
                name={"Roaming Gnome Store"}
              />
              <MenuItem
                link={
                  "https://advertising.expedia.com/getting-started/brands/travelocity/"
                }
                name={"Advertising"}
              />
            </Stack>
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="sm" textAlign={"left"}>
                Explore
              </Heading>
              <MenuItem
                link={"https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Hotel-Destinations"}
                name={"Hotels in United States"}
              />
              <MenuItem
                link={
                  "https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Vacation-Rental-Destinations"
                }
                name={"Vacation Rentals in United States"}
              />
              <MenuItem
                link={
                  "https://www.travelocity.com/United-States-Of-America.d201.Destination-Travel-Guides"
                }
                name={"Vacation Packages in United States"}
              />
              <MenuItem
                link={
                  "https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Flight-Destinations"
                }
                name={"Domestic flights"}
              />
              <MenuItem
                link={
                  "https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Car-Rental-Destinations"
                }
                name={"Car Rentals in United States"}
              />
              <MenuItem
                link={"https://www.travelocity.com/reviews/"}
                name={"Travelocity Reviews"}
              />
              <MenuItem
                link={"https://www.travelocity.com/lp/deals/coupons-promo-codes-exclusive-discounts"}
                name={"Travelocity Coupons"}
              />
              <MenuItem
                link={"https://www.travelocity.com/Accommodations"}
                name={"Unique Places to Stay"}
              />
              <MenuItem
                link={"https://www.travelocity.com/inspire"}
                name={"Travel Blog"}
              />
            </Stack>
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="sm" textAlign={"left"}>
                Policies
              </Heading>
              <MenuItem
                link={"https://www.travelocity.com/lp/lg-privacy"}
                name={"Privacy Policy"}
              />
              <MenuItem
                link={"https://www.travelocity.com/lp/lg-terms"}
                name={"Terms of use"}
              />
              <MenuItem
                link={
                  "https://www.vrbo.com/legal/terms-and-conditions"
                }
                name={" Vrbo terms and conditions"}
              />
               <MenuItem
                link={
                  "https://www.travelocity.com/p/info-other/web-accessibility-policy"
                }
                name={"Accessibility"}
              />
               <MenuItem
                link={
                  "https://www.travelocity.com/dnsmpi"
                }
                name={"Do not sell my personal information"}
              />
            </Stack>
          </Box>
          <Spacer />
          <Box mb="50">
            <Stack spacing={3}>
              <Heading as="h6" size="sm" textAlign={"left"}>
                Help
              </Heading>
              <MenuItem
                link={"https://www.travelocity.com/service/"}
                name={"Support"}
              />
              <MenuItem
                link={
                  "https://www.travelocity.com/service/#/articles/418/34/13190"
                }
                name={"Cancel your hotel or vacation rental booking"}
              />
              <MenuItem
                link={
                  "https://www.travelocity.com/service/#/articles/416/34/13148"
                }
                name={"Cancel your flight"}
              />
              <MenuItem
                link={
                  "https://www.travelocity.com/service/#/myTrips/19432"
                }
                name={"Refund timelines, policies & processes"}
              />
              <MenuItem
                link={
                  "https://www.travelocity.com/service/#/article/13185"
                }
                name={"Use a Travelocity coupon"}
              />
            </Stack>
          </Box>
        </Flex>
      </Box>
      <Container maxW="container.xl" borderTop="1px" borderTopColor="#c5c7cc">
        <Box p="5">
          <Text fontSize="sm" mt="10px" textAlign="center">
          © 2022 Travelscape LLC, an Expedia Group Company. All rights reserved.
          </Text>
          <Text fontSize="sm" mt="10px" textAlign="center">
          Travelocity, the Stars Design, and The Roaming Gnome Design are trademarks or registered trademarks of Travelscape LLC. CST# 2056372-50.
          </Text>
        </Box>
      </Container>
    </Container>
  );
}

export default Footer;

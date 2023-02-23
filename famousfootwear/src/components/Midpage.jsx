import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Carousel1 from "./Carousel1";

const Midpage = () => {
  return (
    <VStack spacing={8}>
      <Stack
        direction={{ base: "column", md: "row" }}
        h="400px"
        align={{ base: "center", md: "center" }}
      >
        <Box w={{ base: "100%", md: "50%" }} h="400px">
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_right.jpg"
            alt="Segun Adebayo"
          />
        </Box>
        <Box w={{ base: "100%", md: "50%" }} h="400px">
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_right.jpg"
            alt="Segun Adebayo"
          />
        </Box>
      </Stack>

      <VStack
        spacing={4}
        align="center"
        w={{ base: "40%", md: "50%" }}
        mt="100px"

        // mt={{ base: "27rem", md: "-7.5rem",lg:"2rem"}}
      >
        <Text color="gray.800" fontSize="25px" fontWeight="bold">
          Famous for Converse
        </Text>
        <Text fontWeight="bold" color="gray">
          Elevate your sneaker style with trendy and iconic favorites.
        </Text>
        <Text fontWeight="bolder" color="black.800">
          SHOP CONVERSE
        </Text>
      </VStack>

      <Stack
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "center" }}
        w="100%"
        h="150px"
        bg="rgb(169,203,204)"
      >
        <Box h="70%" w="45%" marginLeft="10rem">
          <Image
            w={{ base: "40%", md: "100%" }}
            h={{ base: "60%", md: "100%" }}
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/promo/promo_up_to_30_off_select_nike_new.png"
            alt="Segun Adebayo"
          />
        </Box>

        <Box h="60%" w="40%">
          <Stack
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "center" }}
          >
            <Box w="40%" h="50%" margin="auto" mt="30px">
              <Text
                color="gray.800"
                fontWeight="bold"
                fontSize="18px"
                textDecoration={{ base: "none", md: "underline" }}
              >
                SHOP THE SALE
              </Text>
            </Box>
            <Box w="40%" h="50%" margin="auto" mt="30px">
              <Text
                color="gray.800"
                fontWeight="bold"
                fontSize="18px"
                textDecoration={{ base: "none", md: "underline" }}
                mt="30px"
              >
                SHOP ALL NIKE
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>

      <Box w="50%" h="20%" border="1 px solid black" m="auto" align="center">
        <Text fontSize="24px" fontWeight="bold">
          Shop by Category
        </Text>
      </Box>

      <Flex
        justifyContent="space-evenly"
        w="100%"
        h="250px"
        mt="2rem"
        border={{ base: "none", md: "1px solid black" }}
      >
        <VStack>
          <Image
            w="100%"
            h="100%"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/categories/wk4_022123_categorybanner_1_newarrivals.jpg"
            alt="img"
          />
          <Text fontWeight="bold">New Arrivals</Text>
        </VStack>
        <VStack>
          <Image
            w="100%"
            h="100%"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/categories/wk4_022123_categorybanner_2_courtsneakers.jpg"
            alt="img"
          />
          <Text fontWeight="bold">Court Sneakers</Text>
        </VStack>
        <VStack>
          <Image
            w="100%"
            h="100%"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/categories/wk4_022123_categorybanner_3_blockheel.jpg"
            alt="img"
          />
          <Text fontWeight="bold">Block Heel Sandals</Text>
        </VStack>
        <VStack>
          <Image
            w="100%"
            h="100%"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/categories/wk51_011523_categorybanner_4_footbeds.jpg"
            alt="img"
          />
          <Text fontWeight="bold">Footbed Sandals</Text>
        </VStack>
      </Flex>

      <VStack  w="80%" >
        <Text fontSize="24px" fontWeight="bold" mt="2rem" >
          Can't Miss Deals
        </Text>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Image src="SS1.PNG" alt="img" />
          </Box>
        </Flex>
      </VStack>

      <Stack
      direction={{ base: "column", md: "row" }}
      w="100%"
      h="350px"
      border="1px solid black"
      >
        <Box w="50%" h="100%" border="1px solid black">
          <Image 
          w="100%"
          h="100%"
          src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk2_020923_hp_experience_1_story_left_bhm.jpg" alt="img" />
        </Box>
        <Box w="50%" h="100%" border="1px solid black">
           
        </Box>
      </Stack>

    </VStack>
  );
};

{
  /* <source data-src="/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_left.mp4" type="video/mp4" src="/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_left.mp4"></source> */
}

export default Midpage;

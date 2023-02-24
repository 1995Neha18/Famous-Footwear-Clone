import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Grid,
} from "@chakra-ui/react";

import Card from "./Card";

const shoes = [
  {
    title: "Nike Air Max 270",
    price: 120,
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://www.famousfootwear.com/blob/product-images/20000/95/13/3/95133_pair_medium.jpg",
    isNew: true,
  },
  {
    title: "Puma RS-X3",
    price: 120,
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://www.famousfootwear.com/blob/product-images/20000/97/56/1/97561_pair_medium.jpg",
    isNew: true,
  },
  {
    title: "Skechers GOwalk Max",
    price: 120,
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://www.famousfootwear.com/blob/product-images/20000/91/07/9/91079_pair_medium.jpg",
    isNew: true,
  },
  {
    title: "Skechers GOwalk Max",
    price: 120,
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://www.famousfootwear.com/blob/product-images/20000/73/97/3/73973_pair_medium.jpg",
    isNew: true,
  },
  {
    title: "Skechers GOwalk Max",
    price: 120,
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://www.famousfootwear.com/blob/product-images/20000/91/20/1/91201_pair_medium.jpg",
    isNew: true,
  },
];

const bags = [
  {
    title: "Nike Air Max 270",
    price: 120,
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://www.famousfootwear.com/blob/product-images/20000/41/04/5/41045_pair_medium.jpg",
    isNew: true,
  },
  {
    title: "Puma RS-X3",
    price: 120,
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://www.famousfootwear.com/blob/product-images/20000/57/36/0/57360_pair_medium.jpg",
    isNew: true,
  },
  {
    title: "Skechers GOwalk Max",
    price: 120,
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://www.famousfootwear.com/blob/product-images/20000/45/51/6/45516_pair_medium.jpg",
    isNew: true,
  },
  {
    title: "Skechers GOwalk Max",
    price: 120,
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://www.famousfootwear.com/blob/product-images/20000/74/89/8/74898_right_medium.jpg",
    isNew: true,
  },
  {
    title: "Skechers GOwalk Max",
    price: 120,
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://www.famousfootwear.com/blob/product-images/20000/38/57/3/38573_right_medium.jpg",
    isNew: true,
  },
];

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
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_experience_1_bhm.gif"
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

      <Box w="50%" h="20%" m="auto" align="center">
        <Text fontSize="24px" fontWeight="bold">
          Shop by Category
        </Text>
      </Box>

      <Flex justifyContent="space-evenly" w="100%" h="250px" mt="2rem">
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

      <VStack w="80%">
        <Text fontSize="24px" fontWeight="bold" mt="2rem">
          Can't Miss Deals
        </Text>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Image src="SS1.PNG" alt="img" />
          </Box>
        </Flex>
      </VStack>

      <Stack direction={{ base: "column", md: "row" }} w="100%" h="380px">
        <Box w="50%" h="100%">
          <Image
            w="100%"
            h="100%"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk2_020923_hp_experience_1_story_left_bhm.jpg"
            alt="img"
          />
        </Box>
        <Box w="50%" h="100%">
          <Image
            w="100%"
            h="100%"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_experience_1_bhm.gif"
            alt="img"
          />
        </Box>
      </Stack>

      <Box w="60%" h="20px">
        <Text fontSize="16px">
          Follow us @famousfootwear to see their creative twists on our shoes
          throughout the month.
        </Text>
      </Box>

      <Stack direction={{ base: "column", md: "row" }} w="100%" h="600px">
        <Box w="100%" h="100%">
          <Image
            w="100%"
            h="100%"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/2-stories/wk4_022123_hp_story_2_a_distorted.jpg"
            alt="img"
          />
        </Box>
        <Box w="100%" h="100%">
          <Image
            w="100%"
            h="100%"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/2-stories/wk4_022123_hp_story_2_b_distortedcrocs.gif"
            alt="img"
          />
        </Box>
      </Stack>

      <Flex
        justifyContent="space-between"
        w={{ base: "100%", md: "80%" }}
        h="150px"
      >
        <Box w="40%" h="100%">
          <VStack spacing={4}>
            <Text fontSize="22px" fontWeight="bold" color="darkgray.100">
              Style of the Week
            </Text>
            <Text fontSize="14px">Trending neutrals + cool retro vibes =</Text>
            <Text fontSize="14px">the perfect sneaker combo.</Text>
            <Text fontSize="18px" fontWeight="bold" textDecoration="underline">
              SHOP NIKE WAFFLE DEBUT
            </Text>
          </VStack>
        </Box>
        <Box w="40%" h="100%">
          <VStack spacing={4}>
            <Text fontSize="22px" fontWeight="bold" color="darkgray.100">
              Turn on the Brights
            </Text>
            <Text fontSize="14px">Make every step more fun</Text>
            <Text fontSize="14px">with bold colors from Crocs.</Text>
            <Text fontSize="18px" fontWeight="bold" textDecoration="underline">
              SHOP CROCS
            </Text>
          </VStack>
        </Box>
      </Flex>

      <Stack direction={{ base: "column", md: "row" }} w="100%" h="380px">
        <Box w="100%" h="100%">
          <Image
            w="100%"
            h="100%"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk3_021223_hp_left_loafers.jpg"
            alt="img"
          />
        </Box>
        <Box w="100%" h="100%">
          <Image
            w="100%"
            h="100%"
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk3_021223_hp_right_loafers.jpg"
            alt="img"
          />
        </Box>
      </Stack>

      <Text>
        The perfect transition shoe from the early spring chill to late spring
        sunshine.
      </Text>
      <Text fontSize="20px" fontWeight="bold" textDecoration="underline">
        SHOP SPRING LOAFERS
      </Text>
      <Text fontSize="22px" fontWeight="bold">
        Best Sellers
      </Text>

      <HStack spacing='5'  w="100%" mx='auto' >
        {shoes.map((shoe, idx) => (
          <Card {...shoe} key={idx} />
        ))}
      </HStack>

      <Text fontSize="24px" fontWeight="bold">
            Gotta-Have Brands
      </Text>

      <Stack w="100%" h="200px" 
      direction={{ base: "column", md: "row" }}
       >
          <Box w="100%" h="100%">
            <Image  w="100%" h="100%" src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/tests/hp-bts-redesign/brands/hp_logo_nike.png" alt="img" />
          </Box>
          <Box w="100%" h="100%">
          <Image  w="100%" h="100%" src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/tests/hp-bts-redesign/brands/hp_logo_converse.png" alt="img" />
          </Box>
          <Box w="100%" h="100%">
          <Image w="100%" h="100%"  src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/logos/hp_logo_vans.jpg" alt="img" />
          </Box>
          <Box w="100%" h="100%">
          <Image w="100%" h="100%"  src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/fall/logos/hp_logo_heydude.png" alt="img" />
          </Box>
          <Box w="100%" h="100%">
          <Image  w="100%" h="100%" src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2022/fall/logos/hp_logo_birkenstock.png" alt="img" />
          </Box>
          <Box w="100%" h="100%">
          <Image w="100%" h="100%"  src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/logos/hp_logo_crocs.jpg" alt="img" />
          </Box>
      </Stack>

      <HStack spacing='5'  w="100%" mx='auto' >
        {bags.map((shoe, idx) => (
          <Card {...shoe} key={idx} />
        ))}
      </HStack>

      <Box w="100%" h="200px" >
          <Image  w="100%" h="100%" src="SS2.PNG" alt="img" />
      </Box>

      <Text fontSize="24px" fontWeight="bold">
            We Love To See Your Style
      </Text>

      <Stack 
      w="100%"
       h="200px" 
       
      direction={{ base: "column", md: "row" }} mb="30px"
      >
            <Box w="100%" h="100%">
              <Image  
              _hover={{ padding: 10 }}
              w="100%" h="100%" src="https://www.famousfootwear.com/blob/product-images/20000/91/39/4/91394_pair_medium.jpg" alt="img" />
            </Box>
            <Box w="100%" h="100%">
              <Image 
              _hover={{ padding: 10 }}
              w="100%" h="100%" src="https://www.famousfootwear.com/blob/product-images/20000/44/93/2/44932_pair_medium.jpg" alt="img" />
            </Box>
            <Box w="100%" h="100%">
              <Image  
              _hover={{ padding: 10 }}
              w="100%" h="100%" src="https://www.famousfootwear.com/blob/product-images/20000/39/31/0/39310_pair_medium.jpg" alt="img" />
            </Box>
            <Box w="100%" h="100%">
              <Image  
              _hover={{ padding: 10 }}
              w="100%" h="100%" src="https://www.famousfootwear.com/blob/product-images/20000/76/52/1/76521_pair_medium.jpg" alt="img" />
            </Box>
            
      </Stack>

      <Text fontSize="22px" fontWeight="bold" textDecoration="underline" color="darkgray">
            GET MORE FRESH INSPO
      </Text>


          

    </VStack>
  );
};

{
  /* <source data-src="/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_left.mp4" type="video/mp4" src="/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_left.mp4"></source> */
}

export default Midpage;

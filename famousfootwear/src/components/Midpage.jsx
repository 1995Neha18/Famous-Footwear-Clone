import React from 'react';
import { Box, Image, Stack, Text } from '@chakra-ui/react';

const Midpage = () => {
  return (
    <div>
      <Stack 
      direction={{ base: "column", md: "row" }}
       >
          <Box w="50%" h="400px">
            <Image src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_right.jpg" alt="Segun Adebayo" />
          </Box>
          <Box w="50%" h="400px">
          <Image src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_right.jpg" alt="Segun Adebayo" />
          </Box>
      </Stack>

      <Box w="40%" border="1px solid red" margin="auto" marginTop="50px" h="150px" textAlign="center">
          <Text color="gray.800" fontSize="25px" fontWeight="bold" >Famous for Converse</Text>
          <Text fontWeight="bold" color="gray" marginTop="20px">Elevate your sneaker style with trendy and iconic favorites.</Text>
          <Text fontWeight="bold" color="gray.800" marginTop="20px">SHOP CONVERSE</Text>
      </Box>
      <Box w="100%" border="1px solid black" margin="auto" marginTop="50px" h="150px">

      </Box>
      
    </div>
  )
}

{/* <source data-src="/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_left.mp4" type="video/mp4" src="/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_converse_left.mp4"></source> */}

export default Midpage;

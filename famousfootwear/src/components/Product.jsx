import React from "react";
import {
  Button,
  Flex,
  Box,
  Text,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  GridItem,
  Grid,
  Center,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Sandles from "./Sandles";
import Pagination from "./Pagination";

const Product = () => {
  const [products, setProducts] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalpages, setTotalpages] = React.useState(1);

  const onchange = (value) => {
    const changeBy = value + page;
    setPage(changeBy);
  };

  function fetchProducts(page) {
    fetch(
      `https://festive-candle-fontina.glitch.me/womenshoes?_page=${page}&_limit=10`
    )
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }

  React.useEffect(() => {
    fetchProducts(page);
  }, [page]);

  return (
    <div>
      <HStack w="100%"
      //  border="1px solid red"
         align={"flex-start"}
      >
        <VStack w="20%"
        //  border="1px solid black"
         >
          <Box>
            <Text fontSize="24px" fontWeight="bold" color="gray.700">
              Women's Shoes
            </Text>
            <Text fontSize="20px" fontWeight="bold" color="gray.600">
              Shoes / Women
            </Text>
          </Box>
          <Box mr="40px">
            <Text>1-42 of 13,290 products</Text>
            <Text fontSize="18px">Sort by</Text>
          </Box>

          <Select placeholder="Featured" w="80%">
            <option value="option1">Newer</option>
            <option value="option2">Price: High to Low</option>
            <option value="option3">Price: Low to High</option>
          </Select>

          <Box width={"75%"} textAlign={"start"}>
            <Text fontSize="12px" textDecoration="underline">
              See More
            </Text>
            <Text fontSize="12px" textDecoration="underline">
              Change Store
            </Text>
          </Box>
          <Divider orientation="horizontal" w="80%" />
          <Box width={"75%"}>
            <Text fontSize="18px">Category</Text>
            <Text fontSize="14px">Boat Shoes</Text>
            <Text fontSize="14px">Boots</Text>
            <Text fontSize="14px">Clog & Mules</Text>
            <Text fontSize="14px">Flats</Text>
            <Text fontSize="14px">Heels</Text>
            <Text fontSize="14px">Loafers & Oxfords</Text>
            <Text fontSize="14px">Slippers</Text>
            <Text fontSize="14px">Sneakers</Text>
          </Box>
          <Divider orientation="horizontal" w="80%" />

          <Box width={"85%"}>
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>Adidas</AccordionPanel>
                <AccordionPanel pb={4}>Sketchers</AccordionPanel>
                <AccordionPanel pb={4}>Puma</AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Color
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>Black</AccordionPanel>
                <AccordionPanel pb={4}>White</AccordionPanel>
                <AccordionPanel pb={4}>Grey</AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Divider orientation="horizontal" w="80%" />
        </VStack>

        <div>
          <Grid templateColumns="repeat(4, 1fr)" gap={2}>
            {products?.length > 0 &&
              products.map((e,idx,arr) => {
                return (
                  <GridItem key={e.id} w="100%">
                    <Sandles
                      id={e.id}
                      Price={e.price}
                      image={e.image[0].src}
                      title={e.title}
                      category={e.category}
                      product={arr[idx]}
                    />
                  </GridItem>
                );
              })}
          </Grid>
          <Pagination
            page={page}
            totalpages={totalpages}
            onchange={(value) => onchange(value)}
          />
        </div>
      </HStack>
    </div>
  );
};

export default Product;

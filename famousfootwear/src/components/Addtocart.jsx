import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaRegTrashAlt } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Link, Link as RouterLink } from "react-router-dom";
import axios from "axios";
const Addtocart = () => {
  //  const [Quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
 
  const getCartItems = async () => {
    try {
      return axios({
        method: "get",
        url: `https://festive-candle-fontina.glitch.me/womenshoes`,
      }).then((res) => setData(res.data));
    } catch (error) {
      console.log("err");
    }
  };

  const handleDelete = async (id) => {
    return axios({
      method: "delete",
      url: `https://festive-candle-fontina.glitch.me/womenshoes`,
    }).then(() => getCartItems());
  };

  useEffect(() => {
    getCartItems();
  }, [data]);

  // Total
  useEffect(() => {
    let Total = 0;
    data?.forEach((item) => (Total += +item.Price * +item.Quantity));
    setTotal(Total);
    console.log(typeof Total);
  }, [data]);

  const handleQuantity = (id, Quantity, val) => {
    data.map((item, index) =>
      item.id === id ? (Quantity = Quantity + val) : Quantity
    );
    axios
      .patch(`https://festive-candle-fontina.glitch.me/womenshoes`, {
        Quantity: Quantity,
      })
      .then(() => getCartItems());
  };

  return (
    <Box mt={"50"} ml={20}>
      <Flex>
        <Grid gap={5}>
          {data?.map((cart) => (
            <GridItem key={cart.id} display="flex">
              <HStack>
                <Box>
                  <Image
                    src={cart.src}
                    alt="cart image"
                    h={150}
                    w={150}
                    boxShadow={
                      "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px ;"
                    }
                    borderRadius={"50%"}
                  />
                </Box>
              </HStack>
              <Box>
                <HStack ml={30}>
                  <VStack mt={10} ml={10}>
                    <Text fontSize={17}>₹{cart.Price}</Text>
                    <Text fontSize={13}>discount :{`${cart.discount}`}</Text>
                  </VStack>
                  {/* Buttons Quantity */}
                  <Box>
                    <HStack mt={10} ml={10}>
                      <Button
                        bg={"red.500"}
                        isDisabled={cart.Quantity === 1}
                        onClick={() =>
                          handleQuantity(cart.id, cart.Quantity, -1)
                        }
                      >
                        -
                      </Button>
                      <Button>{cart.Quantity}</Button>
                      <Button
                        bg={"green.600"}
                        onClick={() =>
                          handleQuantity(cart.id, cart.Quantity, 1)
                        }
                      >
                        +
                      </Button>
                      <Box>
                        <Button
                          bg={"red.600"}
                          onClick={() => handleDelete(cart.id)}
                        >
                          <FaRegTrashAlt />
                        </Button>
                      </Box>
                    </HStack>
                  </Box>
                </HStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
        <Box ml={250}>
          <Text fontSize={20} flex={"flex-end"} mt={200} ml={50} mb={10}>
            Subtotal : ₹{total}
          </Text>
          <RouterLink to="/address">
            <Button bg="#ffc32a " border={"none"} w={300} color={"black"}>
              Place Order
            </Button>
          </RouterLink>
          <Link to={'/payment'}>
            <Button >Payment Now</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Addtocart;

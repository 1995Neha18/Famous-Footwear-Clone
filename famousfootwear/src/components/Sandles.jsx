import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Sandles(props) {
  const { id, image, Price, title, title1, title3 } = props;

  return (
    <Center py={12}>
      <RouterLink to={`/women/${id}`}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"160px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,

              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={200}
              width={210}
              objectFit={"cover"}
              src={image}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"2sm"}
              textTransform={"uppercase"}
              textDecoration={""}
            >
              {Price}
            </Text>
            <Heading fontSize={"2sm"} fontFamily={"body"} fontWeight={500}>
              {title}
            </Heading>

            <Heading fontSize={"sm"} fontFamily={"body"} fontWeight={500}>
              {title1}
            </Heading>
            <Heading fontSize={"sm"} fontFamily={"body"} fontWeight={500}>
              {title3}
            </Heading>
          </Stack>
        </Box>
      </RouterLink>
    </Center>
  );
}

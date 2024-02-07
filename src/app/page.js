"use client";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const App = () => {
  return (
    <Container spacing="8" p="10" textAlign="center" rounded="lg" h="700px">
      <Heading mt="30%" mr="30px">
        Internship Program
      </Heading>
      <Divider orientation="horizontal" mt="50px" />
      <HStack justify="center" mt="50px">
        <Box
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          mr="4"
          borderWidth="1px"
          minW="270px"
          minH="150px"
        >
          <Link href="/title-transformer">
            <Text fontWeight="bold" fontSize="lg" textAlign="left" mb="3">
              Title Transformer <ArrowForwardIcon />
            </Text>
          </Link>
          <Text textAlign="left">A simple title transformation panel</Text>
        </Box>
        <Box
          boxShadow="md"
          p="6"
          rounded="md"
          bg="white"
          mr="4"
          borderWidth="1px"
          minW="270px"
          minH="150px"
        >
          <Link href="/user-fetcher">
            <Text fontWeight="bold" fontSize="lg" textAlign="left" mb="3">
              User Fetcher <ArrowForwardIcon />
            </Text>
            <Text textAlign="left">
              A simple API fetching and rendering process
            </Text>
          </Link>
        </Box>
      </HStack>
    </Container>
  );
};

export default App;

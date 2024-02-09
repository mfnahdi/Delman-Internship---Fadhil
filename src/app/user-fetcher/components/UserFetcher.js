"use client";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const UserFetcher = () => {
  const [data, setData] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  const fetchUserData = () => {
    axios
      .get("https://randomuser.me/api")
      .then((response) => {
        setData(response.data.results[0]);
        setIsFetched(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const buttonText = isFetched ? "Refetch User" : "Fetch User";

  return (
    <Flex flexDirection="column" justifyContent="center">
      <Heading textAlign="center" mt="50px" height="50px">
        User Fetcher
      </Heading>
      <Flex justify="center" mt="90px">
        <Box
          padding="6"
          bg="white"
          width="270px"
          height="300px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          boxShadow={
            data
              ? data.gender === "female"
                ? "0 4px 6px rgba(255, 105, 180, 0.3)"
                : " 0 4px 6px #ADD8E6"
              : "2xl"
          }
        >
          <Box alignSelf="center">
            <Avatar
              size="xl"
              src={data?.picture?.large}
              alt="User Avatar"
              mb={4}
            />
          </Box>

          <Box alignSelf="center">
            {data ? (
              <Box flexDirection="column">
                <Text textAlign="center">
                  {`${data.name.first} ${data.name.last}`}
                </Text>
                <Text color="grey" p={2}>
                  {data.email}{" "}
                </Text>

                <Text
                  textAlign="end"
                  display="flex"
                  justifyContent="space-between"
                  mt={5}
                  fontWeight="500"
                >
                  <Text ml={7}>{data.nat}</Text>
                  <Text mr={7}>{data.dob.age}</Text>
                </Text>
                <Text
                  color="grey"
                  textAlign="end"
                  display="flex"
                  justifyContent="space-between"
                  fontSize="sm"
                >
                  <Text ml={1}>Nationality</Text> <Text mr={6}>Age</Text>
                </Text>
              </Box>
            ) : (
              <SkeletonText
                mt="4"
                noOfLines={8}
                spacing="2"
                skeletonHeight="2"
                w="210px"
              />
            )}
          </Box>
        </Box>
      </Flex>

      <Box display="flex" justifyContent="center" p={2} mt="80px">
        <Button width="270px" onClick={fetchUserData}>
          {buttonText}
        </Button>
      </Box>
    </Flex>
  );
};

export default UserFetcher;

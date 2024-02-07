"use client";
import { useState, useEffect } from "react";
import {
  Button,
  Box,
  Heading,
  Flex,
  Text,
  Divider,
  Container,
} from "@chakra-ui/react";

const TitleTransformer = () => {
  const [titles, setTitles] = useState(["Internship Program - 1"]);
  const [colors, setColors] = useState(["black"]);
  const [duration, setDuration] = useState(0);
  const [isColorChanging, setIsColorChanging] = useState(false);
  const [timer, setTimer] = useState(null);
  const [headingMargin, setHeadingMargin] = useState(0);

  useEffect(() => {
    if (isColorChanging) {
      setTimer(
        setInterval(() => {
          setDuration((prevDuration) => prevDuration + 1);
          setColors(colors.map(getRandomColor));
        }, 1000)
      );
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isColorChanging, colors]);

  const addTitle = () => {
    if (titles.length < 5) {
      const newTitle = `Internship Program - ${titles.length + 1}`;
      setTitles([...titles, newTitle]);
      setColors([...colors, "black"]);
      setHeadingMargin((prevMargin) => prevMargin - 1);
    }
  };

  const removeTitle = () => {
    if (titles.length > 1) {
      const newTitles = titles.slice(0, -1);
      const newColors = colors.slice(0, -1);
      setTitles(newTitles);
      setColors(newColors);
      setHeadingMargin((prevMargin) => prevMargin + 1);
    }
  };

  const toggleColorChanging = () => {
    if (isColorChanging) {
      clearInterval(timer);
      setDuration(0);
      setColors(Array(titles.length).fill("black"));
      setIsColorChanging(false);
    } else {
      setIsColorChanging(true);
    }
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Container mt="200px" maxW="100%" maxH="100%">
      <Box maxW="100%" maxH="100%">
        {titles.map((title, index) => (
          <Heading
            key={index}
            style={{
              color: colors[index],
              position: "relative",
              marginTop: `${headingMargin}rem`,
              marginBottom: "4rem",
            }}
            textAlign="center"
            pb={8}
          >
            {title}
          </Heading>
        ))}
        <Divider w="500px" />
        <Flex p={2} gap={2} justifyContent="center">
          <Text fontSize="md">Running for: {duration}s</Text>
          <Text fontSize="md">Title count: {titles.length}</Text>
        </Flex>

        <Flex gap={8} justifyContent="center">
          <Button onClick={toggleColorChanging}>
            {isColorChanging ? "Clear color" : "Randomize color"}
          </Button>
          <Button
            onClick={addTitle}
            variant={titles.length === 5 ? "outline" : "solid"}
            opacity={titles.length === 5 ? 0.5 : 1}
            cursor={titles.length === 5 ? "not-allowed" : "pointer"}
          >
            Add Title
          </Button>
          <Button
            onClick={removeTitle}
            variant={titles.length === 1 ? "outline" : "solid"}
            opacity={titles.length === 1 ? 0.5 : 1}
            cursor={titles.length === 1 ? "not-allowed" : "pointer"}
          >
            Remove Title
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default TitleTransformer;

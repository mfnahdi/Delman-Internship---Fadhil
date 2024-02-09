import Link from "next/link";

import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="gray.100"
      justify="center"
      align="center"
      direction="column"
    >
      <Image src="/sad-panda.png" alt="Sad panda" w="200px" mb="5" />
      <Text fontSize="2xl" fontWeight="semibold">
        Oh no! The page you're looking for doesn't exist.
      </Text>
      <Text fontSize="md" color="gray.500" mt="3">
        It seems like the page you're trying to access has been moved, deleted,
        or never existed. You can go back to the homepage.
      </Text>
      <Center mt="5">
        <Box bg="gray.800" color="white" p="3" borderRadius="md">
          <Link href="/">
            <Text fontSize="sm">Back to homepage</Text>
          </Link>
        </Box>
      </Center>
    </Flex>
  );
}

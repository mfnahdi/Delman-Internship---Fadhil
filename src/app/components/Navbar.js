"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex p={1}>
      <Text fontSize="2xl" mt={2} ml={3}>
        delman io
      </Text>
      <Flex ml={5} p={1}>
        <Divider orientation="vertical" />
      </Flex>
      <Breadcrumb mt={4} ml={6}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Internship Program</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/title-transformer">
            Title Transformer
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="/user-fetcher">User Fetcher</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};

export default Navbar;

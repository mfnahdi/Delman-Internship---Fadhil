import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  Text,
} from "@chakra-ui/react";

const Navbar = ({ pathname }) => {
  const breadcrumbs = [
    {
      label: "Internship Program",
      href: "/",
    },
  ];

  const getBreadcrumbLabel = (pathname, breadcrumbs) => {
    const matchedBreadcrumb = breadcrumbs.find(
      ({ href }) => pathname && pathname.startsWith(href)
    );
    return matchedBreadcrumb
      ? pathname === matchedBreadcrumb.href
        ? matchedBreadcrumb.label
        : `${matchedBreadcrumb.label} / ${pathname.split("/").pop()}`
      : "";
  };

  const label = getBreadcrumbLabel(pathname, breadcrumbs);

  if (pathname === "/title-transformer") {
    breadcrumbs.push({
      label: "Title Transformer",
      href: "/title-transformer",
    });
  } else if (pathname === "/user-fetcher") {
    breadcrumbs.push({
      label: "User Fetcher",
      href: "/user-fetcher",
    });
  }

  const showBreadcrumbs = pathname
    ? breadcrumbs.some(({ href }) => pathname.startsWith(href))
    : false;

  return (
    <Flex p={1}>
      <Text fontSize="2xl" mt={2} ml={3}>
        delman io
      </Text>
      <Flex ml={5} p={1}>
        <Divider orientation="vertical" />
      </Flex>
      {showBreadcrumbs && (
        <Breadcrumb mt={4} ml={6}>
          {breadcrumbs.map(({ label, href }, index) => (
            <BreadcrumbItem key={href}>
              {index !== breadcrumbs.length - 1 ? (
                <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
              ) : (
                <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
      )}
    </Flex>
  );
};

export default Navbar;

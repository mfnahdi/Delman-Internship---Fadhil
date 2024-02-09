import React from "react";
import UserFetcher from "./components/UserFetcher";
import Navbar from "../components/Navbar";

const page = () => {
  const pathname = "/user-fetcher";
  return (
    <>
      <Navbar pathname={pathname} />
      <UserFetcher />
    </>
  );
};

export default page;

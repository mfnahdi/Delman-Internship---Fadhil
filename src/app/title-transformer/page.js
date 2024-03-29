import TitleTransformer from "./components/TitleTransformer";
import Navbar from "../components/Navbar";

const page = () => {
  const pathname = "/title-transformer";
  return (
    <>
      <Navbar pathname={pathname} />
      <TitleTransformer />
    </>
  );
};

export default page;

import { Heading, Image, Text } from "@chakra-ui/react";
import logo from "../assets/light-bulb.svg";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" />
      <Heading color="white" marginBottom="1rem">
        AI Keywords Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Paste in your text below and we'll extract the keywords for you.
      </Text>
    </Fragment>
  );
};

export default Header;

import { Box, Center, Container, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Flex>
        <Center>
          <Box p="1">
          <Link to={'/'}>Home</Link>
          <Link to={'/dashboard'}>Dashboard</Link>
          
          </Box>
        </Center>

        <Spacer />
        <Center><Box p="1">
          <ColorModeSwitcher justifySelf="flex-end" />
        </Box></Center>
        
      </Flex>
    </Container>
  );
}

export default Header;

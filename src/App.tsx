import * as React from "react";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  GridItem,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import MainTable from "./components/MainTable/MainTable";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
    <Grid
      minH="100vh"
      minW={"100vw"}
      templateAreas={`"header"
                  "main"
                  "footer"`}
      gridTemplateRows={"1fr 10fr 1fr"}
      gridTemplateColumns={"1fr"}
      h="200px"
      gap="0"
    >
      <GridItem pl="2" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" borderTop={"1px solid #fff"} area={"main"}>
      <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
      </GridItem>
      <GridItem pl="2" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
    <Box textAlign="center" fontSize="xl"></Box>

    
    
    
    </BrowserRouter>
   
  </ChakraProvider>
);

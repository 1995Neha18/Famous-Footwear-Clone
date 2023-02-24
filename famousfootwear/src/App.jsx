import "./App.css";

import { Box } from "@chakra-ui/react";
import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Box w="80%" mx="auto">
      <Navbar/>
      <AllRoutes />
      <Footer/>
    </Box>
  );
}

export default App;

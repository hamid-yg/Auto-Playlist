import { useState } from 'react';
import { Box, Button, Image, Stack } from "@chakra-ui/react";
import axios from 'axios';


const Login = () => {
  const setState = useState([]);

  const handleLoginClick = async () => {
    const data = await axios.get('https://auto-playlist.herokuapp.com/auth/spotify');
    console.log(data);
    setState(data);
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor={"black"}
      bgSize={"cover"}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgImage="url('https://v2.cimg.co/news/105948/259006/spotify-web3.jpg')"
    >
        <Box
          mt={"30%"}
          borderWidth="1px"
          borderRadius="lg"
          p="8"
          w={{ base: "90%", md: "400px" }}
          textAlign="center"
        >
          <Button colorScheme="whiteAlpha" onClick={handleLoginClick}>Log in with Spotify</Button>
        </Box>
    </Box>
  );
};

export default Login;

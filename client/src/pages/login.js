import { useState } from 'react';
import { Box, Button, VStack } from "@chakra-ui/react";
import axios from 'axios';


const Login = () => {
  const [state, setState] = useState([]);

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
    >
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p="8"
        w={{ base: "90%", md: "400px" }}
        textAlign="center"
      >
        <Button colorScheme="green" onClick={handleLoginClick}>Log in with Spotify</Button>
      </Box>
    </Box>
  );
};

export default Login;

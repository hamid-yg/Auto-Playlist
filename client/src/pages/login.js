import { Box, Button } from "@chakra-ui/react";
import { loginUrl } from './Login/spotify';

const Login = () => {
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
          <Button colorScheme="whiteAlpha"><a href={loginUrl}>Log in with Spotify</a></Button>
        </Box>
    </Box>
  );
};

export default Login;

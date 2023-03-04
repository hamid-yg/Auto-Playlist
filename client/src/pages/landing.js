import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    chakra,
    Button,
    Image,
    HStack,
    VisuallyHidden,
    Link,
    VStack,
    Spacer,
  } from '@chakra-ui/react';
  import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { AddIcon } from '@chakra-ui/icons';

const Landing = () => {

  return (
      <Box bgColor={"black"} h={"100%"}>
        <Flex justifyContent={'space-evenly'}>
          <VStack alignItems={'start'} spacing={8}>
            <HStack bg={"blackAlpha.900"} w={"100%"} h={"8%"} spacing={8} >
              <Text fontSize={"4xl"} px={3} color={"whiteAlpha.900"}>AutoPlaylist</Text>
            </HStack>
            {/* <Spacer/> */}
            <Content/>
            {/* <Spacer/> */}
            <Footer/>
          </VStack>
        </Flex>
      </Box>
  );
};

  
  const Content = () => {

    return (
      // <Container maxW='container'  bg='#111'>
        <Stack
          align={'center'}
          h={"full"}
          bg='blackAlpha.900'
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          px={4}
          justifyContent={"space-evenly"}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              color={"whiteAlpha.800"}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'green.400',
                  zIndex: -1,
                }}>
                Write once,
              </Text>
              <br />
              <Text as={'span'} color={'green.400'}>
                use everywhere!
              </Text>
            </Heading>
            <Text color={'gray.400'}>
            Autoplaylist is a website that will allow you to create your playlists. 
            With a simple gesture you can add music to your playlists and with a simple click 
            you can create a brand new playlist. All your changes will be made in real time on Spotify. 
            With AutoPlaylist, make your life easier
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'green'}
                bg={'green.400'}
                _hover={{ bg: 'green.500' }}>
                Get started
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'410px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQacILZH-TY4wA2NtsTIUzAwWCMovzDH8QPsA&usqp=CAU"
                 }
              />
            </Box>
          </Flex>
        </Stack>
      // </Container>
    );
  };

  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={'whiteAlpha.100'}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: 'whiteAlpha.200',
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

  const Footer = () => {
    return (
      <Stack
        h={"30%"} 
        bg={'blackAlpha.900'}
        color={'gray.200'}
        w={"100%"}
        >
        
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Text fontSize={"4xl"} color={"whiteAlpha.900"}>AutoPlaylist</Text>
          <Stack direction={'row'} spacing={6}>
            <Link color={"whiteAlpha.900"} href={'#'}>Home</Link>
            <Link color={"whiteAlpha.900"} href={'#'}>About</Link>
            <Link color={"whiteAlpha.900"} href={'#'}>Blog</Link>
            <Link color={"whiteAlpha.900"} href={'#'}>Contact</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={'gray.700'}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2023 Students.com</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Stack>
    );
  }
  
export default Landing;
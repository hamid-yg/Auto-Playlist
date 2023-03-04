import React from 'react';
import { Card, CardHeader, Heading, Image, CardBody, CardFooter, Button, Text, Stack, Box } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons';


function Item ({key, title, author, isIcon, img, color}) {

  return (
    <Stack direction='row' key={key} mb={4}>
      <Image
        boxSize='40px'
        objectFit='cover'
        src={img}
        alt='Dan Abramov'
      />
      <Box>
        <Heading size='xs' color={color} textTransform='uppercase'>
          {title}
        </Heading>
        <Text fontSize='sm' color={color}>
          {author}
        </Text>
      </Box>
      {
        isIcon ? <DeleteIcon/> : <></>
      }
    </Stack>
  )
}

function CardDetails({title, nb, tab}) {

  return (
    <Card align='center' colorScheme={"teal"} borderRadius={16} height={'sm'}>
      <CardHeader>
          <Heading size='md'>{title} - {nb}</Heading>
      </CardHeader>
      <CardBody overflowY="auto">
      { tab.map((item, index) => (
        <Item key={index} title={item.title} img={item.img} author={item.author} isIcon={true}/>
        )) }
      </CardBody>
      <CardFooter>
          <Button bgColor={"#e9f2e9"}>Delete playlist</Button>
      </CardFooter>
    </Card>
  )
};

export { CardDetails, Item };

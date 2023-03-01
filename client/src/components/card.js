import React from 'react';
import { Card, CardHeader, Heading, Image, CardBody, CardFooter, Button, Text } from "@chakra-ui/react";

export default function CardDetails() {
  return (
    <Card>
      <CardHeader>
        <Heading size='xs'>Playlist name</Heading>
          <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View here</Button>
      </CardFooter>
    </Card>
  )
};

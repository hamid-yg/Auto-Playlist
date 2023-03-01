import { useState } from 'react';
import { SimpleGrid, Box, Text, Flex, Container, Input } from "@chakra-ui/react";
import CardDetails from '../components/card';

const Dashboard = () => {
  return (
    <Box>
      <Text>Dashboard</Text>
      <Flex>
        <Container w='25%' bg='blue.500'>
          <Text>Profile</Text>
        </Container>

        <Container w='50%' bg=''>
          <Text>Playlists</Text>
          <Flex>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(100px, 1fr))'>
              <CardDetails />
              <CardDetails />
              <CardDetails />
              <CardDetails />
              <CardDetails />
            </SimpleGrid>
          </Flex>
        </Container>

        <Container w='25%' bg='red.500'>
          <Text>Search the song</Text>
          <Input type='text' placeholder='Enter the song' />
        </Container>
      </Flex>
    </Box>
  );
};

export default Dashboard;

import { ChakraProvider } from '@chakra-ui/react'

function Home({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Home
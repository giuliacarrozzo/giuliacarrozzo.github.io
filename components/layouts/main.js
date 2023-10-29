import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import CatLoader from '../cat-loader'

const LazyCat = dynamic(() => import('../cat'), {
  ssr: false,
  loading: () => <CatLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Giulia's homepage" />
        <meta name="author" content="Giulia Carrozzo" />
        <meta name="author" content="giuliacarrozzo" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Giulia Carrozzo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@giuliacarrozzo" />
        <meta name="twitter:creator" content="@giuliacarrozzo" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Giulia Carrozzo" />
        <meta name="og:title" content="Giulia Carrozzo" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Giulia Carrozzo - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyCat />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main

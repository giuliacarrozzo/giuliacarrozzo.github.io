import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoLinkedin, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import thumbEdo from '../public/images/edo.jpg'
import thumbAsia from '../public/images/asia.jpg'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a <i>twothousand</i>'s girl from Italy!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Giulia Carrozzo
          </Heading>
          <p>Gate/Check-in Agent ( @MXP - Aviapartner )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/giulia.jpg"
              alt="It's me, hi"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Giulia works and is based at the{' '}
          <Link
            as={NextLink}
            href="/info/roadhouse"
            passhref
          >
            Malpensa Airport
          </Link>
          {' '} with a passion for aviation, music and all kinds of art.
          She has a knack for all things regarding organization, from
          planning and designing all the way to solving real-life
          problems in the most analog way. When not online, she loves a
          nice walk or a bicycle ride.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/info"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Como (CO), Italy.
        </BioSection>
        <BioSection>
          <BioYear>2019 - 2023</BioYear>
          <Link
            as={NextLink}
            href="/info/cri"
            passhref
          >
            Red Cross Operator
          </Link>. (Croce Rossa Italiana)
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Diploma in the Scientific-Linguistic High
          School &quot;Paolo Giovio&quot; of Como
        </BioSection>
        <BioSection>
          <BioYear>2020 - 2024</BioYear>
          Working in the{' '}
          <Link
            as={NextLink}
            href="/info"
            passhref
          >
            catering world
          </Link>.
        </BioSection>
        <BioSection>
          <BioYear>2024 - Present</BioYear>
          Finally entered the{' '}
          <Link
            as={NextLink}
            href="/info"
            passhref
          >
            aviation sector
          </Link>!
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          <Link href="https://www.taylorswift.com/" target="_blank">
            Taylor Swift
          </Link>
          , Aviation ✈️, Art, Animals (esp. my {' '}
          <Link href="/info/edo">
            Edo
          </Link>
          !), Home Planning and Flowers!
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" id="on-the-web">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/giuliacarrozzo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @giuliacarrozzo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/giulia-carrozzo-46b38427a/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                Giulia Carrozzo (LinkedIn)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/giuliaacarrozzo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @giuliaacarrozzo
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="/info/edo"
            title="Edo"
            thumbnail={thumbEdo}
          >
            My cat son ❤️
          </GridItem>
          <GridItem
            href="/info/asia"
            title="Asia"
            thumbnail={thumbAsia}
          >
            My adopted sister 🐾
          </GridItem>
        </SimpleGrid>

        <Heading as="h3" variant="section-title">
          Need a chat?
        </Heading>
        <p>
          Whether you need me for a working project or just a chat...
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://www.linkedin.com/in/giulia-carrozzo-46b38427a/"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Contact me!
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getInitialProps  } from '../components/chakra'

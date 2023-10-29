import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center,
  Box,
  Avatar
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/info'
import P from '../../components/paragraph'

const Asia = () => (
  <Layout title="Asia">
    <Container>
      <Title>
        Asia <Badge>2017</Badge>
      </Title>
      <Center my={6}>
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="200px"
          h="200px"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          <Avatar
            src="/images/info/animal_asia1.jpg"
            alt="How magnificient"
            borderRadius="full"
            width="200"
            height="200"
          />
        </Box>
      </Center>
      <P>
        Asia's my big adopted sister.
      </P>
      <P>
        Just like me, she's a little chubby, but ain't she
        cute like she is, innit?
      </P>
      <P>
        She has the amazing skill to pull the most absurd
        expression everytime one takes a picture of her,
        especially when she's on her sofa and can't be
        bothered to do anything.
      </P>
      <P>
        Judge for yourself.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Born</Meta>
          <Link href="https://en.wikipedia.org/wiki/Rome">
            Rome
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Birth Date</Meta>
          <span>2017</span>
        </ListItem>
        <ListItem>
          <Meta>Breed</Meta>
          Asia's one of a kind ;)
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Articles</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://medium.com/@robyndogtalk/look-how-fat-he-is-hes-so-cute-3ac99efc4e1">
            <Badge mr={2}>About</Badge>
              They look so cute with their big belly tho{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/asia.jpg" alt="asia" />
        <WorkImage src="/images/info/animal_asia2.jpg" alt="asia again" />
        <WorkImage src="/images/info/animal_asia3.jpg" alt="asia again" />
        <WorkImage src="/images/info/animal_asia4.jpg" alt="asia again" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Asia
export { getInitialProps  } from '../../components/chakra'

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

const Edo = () => (
  <Layout title="Edo">
    <Container>
      <Title>
        Edoardo <Badge>2023</Badge>
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
            src="/images/info/animal_edo1.jpg"
            alt="LOOK HOW CUTE"
            borderRadius="full"
            width="200"
            height="200"
          />
        </Box>
      </Center>
      <P>
        Edo's my <i>little</i> red cat.
      </P>
      <P>
        As any cat, his pictures <strong>belong</strong> to the internet,
        so here's some :)
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Born</Meta>
          <Link href="https://en.wikipedia.org/wiki/Turin">
            Turin
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Birth Date</Meta>
          <span>04/01/2023</span>
        </ListItem>
        <ListItem>
          <Meta>Breed</Meta>
          Red Tabby European
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Articles</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://en.wikipedia.org/wiki/Cats_and_the_Internet">
            <Badge mr={2}>About</Badge>
              Why do we HAVE TO post pictures of cats online{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/info/animal_edo2.jpg" alt="edo" />
        <WorkImage src="/images/info/animal_edo3.jpg" alt="edo again" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Edo
export { getInitialProps  } from '../../components/chakra'

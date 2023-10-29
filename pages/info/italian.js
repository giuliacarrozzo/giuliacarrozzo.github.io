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
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/info'
import P from '../../components/paragraph'

const Info = () => (
  <Layout title="Italiano">
    <Container>
      <Title>
        italiano <Badge>Madre Lingua</Badge>
      </Title>
      <Center my={6}>
        <Image
          src="/images/info/lang_it.jpg"
          alt="italian"
          borderRadius='7%'
          width='8em'
        />
      </Center>
      <P>
        Sono nata in Italia, quindi parlare italiano dovrebbe venirmi facile.
      </P>
      <P>
        Forse?
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Nascita</Meta>
          <Link href="https://en.wikipedia.org/wiki/Como">
            Como
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Anno</Meta>
          <span>2000</span>
        </ListItem>
        <ListItem>
          <Meta>Dialetti</Meta>
          Sconosciuti
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Around The World</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://mario.nintendo.com/">
            <Badge mr={2}>Moustache Guy</Badge>
            Average Italian Hydraulic{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/info/info_italian1.jpg" alt="stereotype 1" />
        <WorkImage src="/images/info/info_italian2.jpg" alt="stereotype 2" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

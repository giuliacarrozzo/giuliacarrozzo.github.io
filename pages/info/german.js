import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/info'
import P from '../../components/paragraph'

const Info = () => (
  <Layout title="German">
    <Container>
      <Title>
        German <Badge>B1 - Goethe-Institut</Badge>
      </Title>
      <Center my={6}>
        <Image
          src="/images/info/lang_de.jpg"
          alt="german"
          borderRadius='7%'
          width='8em'
        />
      </Center>
      <P>Hallo, ich haiße Giulia!</P>
      <P>⠀</P>
      <P>Ich spreche ein bisschen Deutsch, aber leider habe ich nach all den Jahren das meiste von dem, was ich gelernt habe, vergessen.</P>
      <P>Zumindest weiß ich, was ich für das <strong>Oktoberfest</strong> brauche!</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://www.goethe.de/ins/us/en/index.html">
            Goethe-Institut <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Level</Meta>
          <Link href="https://www.goethe.de/ins/us/en/sta/ney/prf/gzb1.cfm">
            B1 - Goethe-Zertifikat <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Released</Meta>
          <span>08/08/2019</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

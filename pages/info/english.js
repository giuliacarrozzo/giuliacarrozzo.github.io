import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/info'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Info = () => (
  <Layout title="English">
    <Container>
      <Title>
        English <Badge>B2 - Cambridge University</Badge>
      </Title>
      <Center my={6}>
        <Image
          src="/images/info/lang_en.jpg"
          alt="english"
          borderRadius='7%'
          width='8em'
        />
      </Center>
      <P>
        Although not the best tool in my shed, I'm now pretty confident with
        it.
      </P>
      <P>
        My boyfriend will probably blame the songs I listen in loop 500ish
        times a day. Each.
      </P>
      <P>
        Maybe. Just sayin.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://www.cam.ac.uk/">
            University of Cambridge <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Level</Meta>
          <Link href="https://www.cambridgeenglish.org/exams-and-tests/first-for-schools/">
            B2 - FCE/First <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Released</Meta>
          <span>29/05/2019</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

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
  <Layout title="Spanish">
    <Container>
      <Title>
        Spanish <Badge>B2 - Instituto Cervantes</Badge>
      </Title>
      <Center my={6}>
        <Image
          src="/images/info/lang_es.jpg"
          alt="spanish"
          borderRadius='7%'
          width='8em'
        />
      </Center>
      <P>Aunque no es el primer idioma que aprendí, sin duda es lo con que tengo
        más confianza.</P>
      <P>No sólo el italiano y el español comparten gran parte de sus gramática,
        siendo ambos <strong>neolatinos</strong>, sino que la hosipidalidad de
        los italianos y de los españoles es también un factor clave en común.
      </P><P>⠀</P>
      <P>En definitiva, ¡no puedo pensar en otro idioma que ame más que el
        español!</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://cervantes.org/">
            Instituto Cervantes <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Level</Meta>
          <Link href="https://www.dele.org/?page=dele/high-intermediate-level">
            B2 - DELE <ExternalLinkIcon mx="2px" />
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

import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/info'
import P from '../../components/paragraph'

const Info = () => (
  <Layout title="An-225 Mriya">
    <Container>
      <Title>
        Antonov An-225 (Мрія) 🇺🇦 <Badge>1988-2022</Badge>
      </Title>
      <P>
        The Антонов Ан-225 was built during the Cold War from the URSS to
        fight the Space Shuttle program. The An-225 is infact a stretched
        version of the smaller brother - the An-124 - aimed to fly the
        Buran spaceplane.
      </P><P>⠀</P>
      <P>
        It was the biggest plane ever entered in service, and holder of many
        more World Records.
      </P><P>⠀</P>
      <P>
        It was destroyed during the Russian-Ukrainian war while it was
        parked at the Hostomel airport. It was destroyed by a Russian
        missile (due to political resentments) and damaged beyond economical
        and technical repair.
      </P><P>⠀</P>
      <P>
        May the Мрія rest in peace, flying in heaven forever.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Company</Meta>
          <span>Державне підприємство «Антонов» (ex <i>OKB-153</i>)</span>
        </ListItem>
        <ListItem>
          <Meta>NATO Code</Meta>
          <span>Cossak</span>
        </ListItem>
        <ListItem>
          <Meta>Based on</Meta>
          <Link href="https://en.wikipedia.org/wiki/Antonov_An-124_Ruslan">
            An-124 Ruslan (Ан-124 Руслан) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Models Built</Meta>
          <span>1 (another one 70% ready)</span>
        </ListItem>
        <ListItem>
          <Meta>Maiden flight</Meta>
          <span>21/12/1988, <i>URSS</i></span>
        </ListItem>
        <ListItem>
          <Meta>Destroyed</Meta>
          <span>27/02/2022, <i>Ukraine</i></span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/info/info_plane1.jpg" alt="An-225" />
        <WorkImage src="/images/info/info_plane2.jpg" alt="An-225" />
        <WorkImage src="/images/info/info_plane3.jpg" alt="An-225" />
        <WorkImage src="/images/info/info_plane4.jpg" alt="An-225" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

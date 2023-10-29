import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/info'
import P from '../../components/paragraph'

const Info = () => (
  <Layout title="Roadhouse (Team Leader)">
    <Container>
      <Title>
        Roadhouse (Team Leader) <Badge>2022-Present</Badge>
      </Title>
      <P>
        Started as operator, I quickly gained experience and trust, hence
        here I am just shy of a year later as a Team Leader!
      </P>
      <P>
        This job thought me a lot, first and foremost how to treat customers
        with respect and dedication, and also the real value of a great team.
      </P>
      <P>
        My mensions are (but not limited to):
      </P>
      <UnorderedList my={4}>
        <ListItem><strong>Team Leader</strong> - Coordinate and ensure a safe and reliable working environment</ListItem>
        <ListItem><strong>Cook</strong> - Cooking and plating of dishes, desserts assembly</ListItem>
        <ListItem><strong>Waitress</strong> - meal serving, drinks and digestives preparation</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Area</Meta>
          <span>Restauration, Catering</span>
        </ListItem>
        <ListItem>
          <Meta>Company</Meta>
          <Link href="https://www.roadhouse.it/">
            Roadhouse Grill <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Location</Meta>
          <span>Bellinzago Novarese (NO)</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/info/job_roadhouse.jpg" alt="roadhouse" />
        <WorkImage src="/images/info/info_roadhouse1.jpg" alt="roadhouse" />
        <WorkImage src="/images/info/info_roadhouse2.jpg" alt="roadhouse" />
        <WorkImage src="/images/info/info_roadhouse3.jpg" alt="roadhouse" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

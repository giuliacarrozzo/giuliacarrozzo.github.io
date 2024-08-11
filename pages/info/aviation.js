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
  <Layout title="Aviation Jobs">
    <Container>
      <Title>
        Gate & Check-in Agent (@Aviapartner) <Badge>2024-Present</Badge>
      </Title>
      <P>
        I’ve just joined the aviation world as a gate and check-in agent, and
        I’m loving every moment!
      </P>
      <P>
        My day starts with greeting passengers, helping them with check-in,
        and making sure their travel documents are in order. Once that’s done,
        I head to the gate to coordinate boarding. It’s fast-paced and
        exciting, and I’m thrilled to be part of this industry!
      </P>
      <P>
        Here's my current certificates:
      </P>
      <UnorderedList my={4}>
        <ListItem><strong>ENAC</strong> (Italian CAA) - Security, Mod.s A6, A7, A8, A13, A15</ListItem>
        <ListItem><strong>SEA</strong> (MXP Airport Manager) Safety Course</ListItem>
        <ListItem><strong>First Aid</strong> and <strong>CPR</strong></ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Area</Meta>
          <span>Aviation, Airport</span>
        </ListItem>
        <ListItem>
          <Meta>Company</Meta>
          <Link href="https://www.aviapartner.aero/">
            Aviapartner <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Location</Meta>
          <span>MXP Airport - Ferno (VA)</span>
        </ListItem>
      </List>

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/info/info_aviation1.jpg" alt="aviation" />
        <WorkImage src="/images/info/info_aviation2.jpg" alt="aviation" />
        <WorkImage src="/images/info/info_aviation3.jpg" alt="aviation" />
        <WorkImage src="/images/info/info_aviation4.jpg" alt="aviation" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

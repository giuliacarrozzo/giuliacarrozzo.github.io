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
  <Layout title="Catering Jobs">
    <Container>
      <Title>
        Waitress ➡ Cook ➡ Team Leader! <Badge>2020-2024</Badge>
      </Title>
      <P>
        As most of the teenagers finishing school,
        I immediately started looking around to finally gain an
        excerpt of indipendance, at least economically.
      </P>
      <P>⠀</P>
      <P>
        And the combination of <Badge ml='1'>Italy</Badge>+<Badge>
        Student</Badge>+<Badge>Available Jobs</Badge> equals to {' '}
        <Badge colorScheme='red'>waiters</Badge>! (often at a
        pizzeria, like in my case…)
      </P>
      <P>⠀</P>
      <P>
        And so Giulia (metaphorically) hopped on the train and got it going,
        through the good and the bad, headbutting her way into the cruel
        reality of adulthood and work.
      </P>
      <P>
        After hopping to a few different jobs, I came back into the Catering
        world by joining Roadhouse.
        Started as operator, I quickly gained experience and trust, hence
        just shy of a year later I got promoted as a Team Leader!
      </P>
      <P>
        This job thought me a lot, first and foremost how to treat customers
        with respect and dedication, and also the real value of a great team.
      </P>
      <P>
        My mensions were (but not limited to):
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
        <WorkImage src="/images/info/info_catering1.jpg" alt="catering" />
        <WorkImage src="/images/info/info_catering2.jpg" alt="catering" />
        <WorkImage src="/images/info/info_catering3.jpg" alt="catering" />
        <WorkImage src="/images/info/info_catering4.jpg" alt="catering" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

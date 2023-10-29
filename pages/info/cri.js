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
  <Layout title="Red Cross">
    <Container>
      <Title>
        Red Cross (Croce Rossa Italiana) <Badge>2019-2023</Badge>
      </Title>
      <P>
        My time with the Red Cross was not only deeply fulfilling but also
        highly instructive. I appreciated the chance to contribute to my
        community in times of crisis, whether by responding to disasters,
        organizing blood drives, or providing first aid training.
      </P>
      <P>⠀</P>
      <P>
        What I liked most was the strong sense of community and the
        satisfaction that came from helping others. During my involvement,
        I gained valuable skills in disaster preparedness, crisis
        management, empathy, and teamwork.
      </P>
      <P>⠀</P>
      <P>
        This experience left me with a lasting sense of purpose and a
        profound appreciation for the impact that collective action can
        have in improving the world.
      </P>
      <UnorderedList my={4}>
        <ListItem>Dialysis service and medical exams</ListItem>
        <ListItem>Transport of pharmaceuticals</ListItem>
        <ListItem>Disabled children accompaniment on the way school-home</ListItem>
        <ListItem>Temperature measurement at summer centres</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Area</Meta>
          <span>Volunteering</span>
        </ListItem>
        <ListItem>
          <Meta>Support</Meta>
          <Link href="https://cri.it/sostieni-la-croce-rossa-italiana/">
            Donate Here <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Location</Meta>
          <span>Grandate (CO)</span>
        </ListItem>
      </List>

      <WorkImage src="/images/info/info_cri.jpg" alt="cri" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/info/info_cri1.jpg" alt="cri" />
        <WorkImage src="/images/info/info_cri2.jpg" alt="cri" />
        <WorkImage src="/images/info/info_cri3.jpg" alt="cri" />
        <WorkImage src="/images/info/info_cri4.jpg" alt="cri" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

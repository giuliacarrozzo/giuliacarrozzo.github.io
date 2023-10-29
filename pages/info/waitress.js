import {
  Container,
  Badge
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/info'
import P from '../../components/paragraph'

const Info = () => (
  <Layout title="Waitress">
    <Container>
      <Title>
      Waitress <Badge>2020-2021</Badge>
      </Title>
      <P>
        As most of the teenagers turning 18 (not really but anyway),
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
      <P>⠀</P>
      <P>
      Oh dear, how dramatic.
      </P>
      <P>⠀</P>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

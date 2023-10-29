import {
  Container,
  Badge
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/info'
import P from '../../components/paragraph'

const Info = () => (
  <Layout title="Private Teacher">
    <Container>
      <Title>
        Private Teacher <Badge>2021-2022</Badge>
      </Title>
      <P>
        It's been since High School that I give private lessons
        to kids (even not so younger than me), ranging in pretty
        much all subjects - although mainly humantistic,
        scientific and (ouch) algebraic ones.
      </P>
      <P>⠀</P>
      <P>
        On top of that, usually I also complementarily picked up
        or brought the kids in & out of School. When requested,
        I babysat them combining all above.
      </P>
      <P>⠀</P>
      <P>
        Although not economically viable, it is still one of my
        favourite jobs, as it tought me the responisibility and
        gratitude derivign from taking care of the little ones
        (yes, even the more rascal ones!).
      </P>
      <P>⠀</P>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

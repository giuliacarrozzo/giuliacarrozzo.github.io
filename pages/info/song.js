import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  AspectRatio,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/info'
import P from '../../components/paragraph'

const Info = () => (
  <Layout title="Maroon">
    <Container>
      <Title>
        Maroon <Badge>2022</Badge>
      </Title>
      <P><i>
      THEBURGUNDYONMYTSHIRTWHENYOUSPLASHEDYOURWINEINTOMEANDHOWTHEBLOODRUSHEDINTOMYCHEEKS,SOSCARLET,ITWASTHEMARKYOUSAWONMYCOLLARBONE,THERUSTTHATGREWBETWEENTELEPHONESTHELIPSIUSEDTOCALLHOME,SOSCARLET,ITWASMAROON
      </i></P>
      <P>‎</P>
      <P>
        This is how I usually sing it :)
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Artist</Meta>
          <span>Taylor Swift</span>
        </ListItem>
        <ListItem>
          <Meta>Album</Meta>
          <Link href="https://www.youtube.com/playlist?list=PLINj2JJM1jxP5aYiX47uBCRu9g8JItDWp">
            Midnights{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Release Year</Meta>
          <span>2022</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://open.spotify.com/intl-it/track/199E1RRrVmVTQqBXih5qRC?si=d8db008497144b70">
            <Badge mr={2}>Spotify</Badge>
            3am Edition
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://music.apple.com/it/album/maroon/1649434004?i=1649434289">
            <Badge mr={2}>Apple Music</Badge>
            iTunes Store
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/lvHZjvIyqsk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../../components/chakra'

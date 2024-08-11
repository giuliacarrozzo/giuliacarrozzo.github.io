import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { InfoGridItem } from '../components/grid-item'

import thumbLangIT from '../public/images/info/lang_it.jpg'
import thumbLangEN from '../public/images/info/lang_en.jpg'
import thumbLangES from '../public/images/info/lang_es.jpg'
import thumbLangDE from '../public/images/info/lang_de.jpg'

import thumbJobCR from '../public/images/info/job_catering.jpg'
import thumbJobPT from '../public/images/info/job_teacher.jpg'
import thumbJobAV from '../public/images/info/job_aviation.jpg'
import thumbJobCRI from '../public/images/info/job_cri.jpg'

import thumbOtherPlane from '../public/images/info/other_plane.jpg'
import thumbOtherSong from '../public/images/info/other_song.jpg'

const Info = () => (
  <Layout title="Info">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Languages
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <InfoGridItem id="italian" title="Italian" thumbnail={thumbLangIT}>
            Mother Tongue
          </InfoGridItem>
        </Section>
        <Section>
          <InfoGridItem id="english" title="English" thumbnail={thumbLangEN}>
            B2 - Cambridge University
          </InfoGridItem>
        </Section>
        <Section>
          <InfoGridItem id="spanish" title="Spanish" thumbnail={thumbLangES}>
            B2 - Instituto Cervantes
          </InfoGridItem>
        </Section>
        <Section>
          <InfoGridItem id="german" title="German" thumbnail={thumbLangDE}>
            B1 - Goethe-Institut
          </InfoGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Jobs
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <InfoGridItem id="aviation" thumbnail={thumbJobAV} title="Aviation">
            2024-Current
          </InfoGridItem>
        </Section>
        <Section delay={0.3}>
          <InfoGridItem id="catering" thumbnail={thumbJobCR} title="Catering">
            2020-2024
          </InfoGridItem>
        </Section>
        <Section delay={0.3}>
          <InfoGridItem
            id="teacher"
            thumbnail={thumbJobPT}
            title="Private Teacher"
          >
            2021-2022
          </InfoGridItem>
        </Section>
        <Section delay={0.3}>
          <InfoGridItem id="cri" thumbnail={thumbJobCRI} title="Red Cross">
            2019-2023
          </InfoGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          My favourites
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <InfoGridItem id="plane" thumbnail={thumbOtherPlane} title="Ан-225">
            Favourite Plane 🇺🇦
          </InfoGridItem>
        </Section>
        <Section delay={0.5}>
          <InfoGridItem
            id="song"
            thumbnail={thumbOtherSong}
            title="Maroon"
          >
            Favourite Song 🎵
          </InfoGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Info
export { getInitialProps  } from '../components/chakra'

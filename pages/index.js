import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NextLink from 'next/link'
import { Box, Container, Heading, Image, Link, Button } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioDate } from '../components/bio'

export default function Home() {

  return(
    <Layout>
    <Container>
      <Box bgColor="#F2D7D9" borderRadius="lg" p={3} align="center" textColor="black">
        Hi sayang, i have worked very hard on this, i hope you love this
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Welcome to Our Memories
          </Heading>
          <p>This is all of my special memories with you</p>
        </Box>
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
          <Image 
          borderColor="#2C3333" 
          borderWidth={2} 
          borderStyle="solid" 
          maxWidth="100px" 
          display="inline-block" 
          borderRadius="full" 
          src="/images/PIK_profile.jpg"
          alt="profile" />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          From Me
        </Heading>
        <Paragraph>
          It all started with a simple chat. "Regret" opening an instagram story of a beautiful lady, watching a Marvel movie. A  {' '}
          <NextLink href="https://www.instagram.com/aurelius.abuthan/"><Link href="https://www.instagram.com/aurelius.abuthan/">dumb boy</Link></NextLink>
          , blinded from his selfishness, saved by the selflessness of the {' '}
          <NextLink href="https://www.instagram.com/vanniiiaaaaa/"><Link href="https://www.instagram.com/vanniiiaaaaa/">beautiful lady</Link></NextLink>
          . They talked, met, and fell in love. One year later, here we are. Trying to stay alive with the love, struggling to change, for the beautiful lady in distress.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/albums">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="pink">
              Albums
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Date
        </Heading>
        <BioSection>
          <BioDate>
            24-09-2021
          </BioDate>
          First time i DM'd you
        </BioSection>
        <BioSection>
          <BioDate>
            09-10-2021
          </BioDate>
          First time we met
        </BioSection>
        <BioSection>
          <BioDate>
            18-12-2021
          </BioDate>
          Our first movie together "Spiderman: No Way Home"
          </BioSection>
      </Section>
    </Container>
    </Layout>
  )

}

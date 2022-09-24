import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, AlbumImage, Meta } from '../../components/album'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

export default function Album() {
    return(
        <Layout title="Pantai Indah Kapuk">
            <Container>
            <AlbumImage src="/images/PIK/bluesky.jpg" alt="Pantai Indah Kapuk" />
                <Title>
                    Pantai Indah Kapuk <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    A fun whole day, walking around, enjoying the sun, messing around, making memories at this enjoyable place. We walk so much, we can't feel our legs. We eat so much, we can't fit in our pants. I love you so much, I can't help but seeing you as my one and only. All of my attention goes to you. All of these photos of us, are my favourite memories of us. 
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Date</Meta>
                        April 30th 2022
                    </ListItem>
                    <ListItem>
                        <Meta>Moment</Meta>
                        Sunset
                    </ListItem>
                </List>

                <AlbumImage src="/images/PIK/sunset3.jpg" alt="Pantai Indah Kapuk"/>
                <AlbumImage src="/images/PIK/sunset2.jpg" alt="Pantai Indah Kapuk" />
                <AlbumImage src="/images/PIK/sunset1.jpg" alt="Pantai Indah Kapuk" />
                <AlbumImage src="/images/PIK/tower3.jpg" alt="Pantai Indah Kapuk" />
                <AlbumImage src="/images/PIK/tower2.jpg" alt="Pantai Indah Kapuk" />
                <AlbumImage src="/images/PIK/tower1.jpg" alt="Pantai Indah Kapuk" />
            </Container>
        </Layout>
    )
}
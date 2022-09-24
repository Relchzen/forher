import {Container, Badge, List, ListItem} from '@chakra-ui/react'
import { Title, AlbumImage, Meta } from '../../components/album'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

export default function Album() {
    return(
        <Layout title="Kota Tua">
            <Container>
            <AlbumImage src="/images/KotaTua/KotaTua.JPG" alt="Kota Tua" />
                <Title>
                    Kota Tua <Badge>2021</Badge>
                </Title>
                <Paragraph>
                    Need some healing? I'm there for you. I love to spent as much time with you. You're so cute in person. I love every inch of you. Every smile you gave me, every hugs, every blush you get, everything that you do, makes me love you more and more. Everytime you need, just know I will be there for you. &lt;3
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Date</Meta>
                        December 19th 2021
                    </ListItem>
                    <ListItem>
                        <Meta>Moment</Meta>
                        Every Photos of You
                    </ListItem>
                </List>

                <AlbumImage src="/images/KotaTua/KotaTua2.JPG" alt="Kota Tua"/>
                <AlbumImage src="/images/KotaTua/KotaTua3.JPG" alt="Kota Tua"/>
                <AlbumImage src="/images/KotaTua/KotaTua4.JPG" alt="Kota Tua"/>
                <AlbumImage src="/images/KotaTua/KotaTua5.JPG" alt="Kota Tua"/>
                <AlbumImage src="/images/KotaTua/KotaTua6.JPG" alt="Kota Tua"/>
                <AlbumImage src="/images/KotaTua/KotaTua7.JPG" alt="Kota Tua"/>
                <AlbumImage src="/images/KotaTua/KotaTua8.JPG" alt="Kota Tua"/>
                <AlbumImage src="/images/KotaTua/KotaTua9.JPG" alt="Kota Tua"/>
                <AlbumImage src="/images/KotaTua/KotaTua10.JPG" alt="Kota Tua"/>
            </Container>
        </Layout>
    )
}
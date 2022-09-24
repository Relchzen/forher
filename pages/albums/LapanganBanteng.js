import {Container, Badge, List, ListItem} from '@chakra-ui/react'
import { Title, AlbumImage, Meta } from '../../components/album'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

export default function Album() {
    return(
        <Layout title="Lapangan Banteng">
            <Container>
            <AlbumImage src="/images/LapanganBanteng/LapanganBanteng8.jpg" alt="Lapangan Banteng" />
                <Title>
                    Lapangan Banteng <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    Thank you for accompanying me to play Pokemon Go. Playing it has never been more fun than with you. We got some enjoyable moments, sitting at the park, enjoying the view, and eating noodles at Istiqlal. You love that noodle so much. We walk so much but didn't go as vain. I get to spent some quality time with you, and I love you for that. &lt;3
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Date</Meta>
                        June 4th 2022
                    </ListItem>
                    <ListItem>
                        <Meta>Moment</Meta>
                        Picnic
                    </ListItem>
                </List>

                <AlbumImage src="/images/LapanganBanteng/LapanganBanteng1.jpg" alt="LapanganBanteng"/>
                <AlbumImage src="/images/LapanganBanteng/LapanganBanteng2.jpg" alt="LapanganBanteng"/>
                <AlbumImage src="/images/LapanganBanteng/LapanganBanteng3.jpg" alt="LapanganBanteng"/>
                <AlbumImage src="/images/LapanganBanteng/LapanganBanteng4.jpg" alt="LapanganBanteng"/>
                <AlbumImage src="/images/LapanganBanteng/LapanganBanteng5.jpg" alt="LapanganBanteng"/>
                <AlbumImage src="/images/LapanganBanteng/LapanganBanteng6.jpg" alt="LapanganBanteng"/>
                <AlbumImage src="/images/LapanganBanteng/LapanganBanteng7.jpg" alt="LapanganBanteng"/>
                <AlbumImage src="/images/LapanganBanteng/LapanganBanteng9.jpg" alt="LapanganBanteng"/>
                <AlbumImage src="/images/LapanganBanteng/LapanganBanteng10.jpg" alt="LapanganBanteng"/>
            </Container>
        </Layout>
    )
}
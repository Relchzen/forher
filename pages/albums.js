import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { AlbumGridItem } from '../components/grid-items'
import thumbnailPIK from '../public/images/SummerFun.jpg'
import thumbnailKotu from '../public/images/Kotatua.JPG'
import thumbnailBanteng from '../public/images/thumbnailBanteng.jpg'

export default function Albums() {
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Albums
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <AlbumGridItem id="PantaiIndahKapuk" title="Pantai Indah Kapuk" thumbnail={thumbnailPIK}>
                        Summer Fun Adventure
                    </AlbumGridItem>
                </Section>
                <Section>
                    <AlbumGridItem id="LapanganBanteng" title="Lapangan Banteng" thumbnail={thumbnailBanteng}>
                        Greenies
                    </AlbumGridItem>
                </Section>
                <Section>
                    <AlbumGridItem id="KotaTua" title="Kota Tua" thumbnail={thumbnailKotu}>
                        Vintage Vibe
                    </AlbumGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}
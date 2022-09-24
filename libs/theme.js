import { color, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#D3CEDF', '#FFE3E1')(props),
            color: mode('#2C3333', '#2C3333')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#2C3333',
                textDecorationThickness:4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    }, 
    Link: {
        baseStyle: props => ({
            color: mode('#6F38C5', '#6F38C5')(props),
            textUnderlineOffset: 3
        })
    }
}

const fonts = {
    heading: "'Indie Flower'"
}

const colors = {
    violet: '#A66CFF' 
}

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({
    config, styles, components, colors, fonts
})

export default theme
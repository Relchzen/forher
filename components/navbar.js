import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    Iconbutton,
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function LinkItem({ href, path, children }) {
    const active = path === href
    const inactiveColor = '#2C3333'

    return(
        <NextLink href={href}>
            <Link
            p={2}
            bg={active ? '#FF9494' : undefined}
            color={active ? '#2C3333' : inactiveColor}>
            {children}
            </Link>
        </NextLink>
    )
}

export default function Navbar( props ) {
    const { path } = props

    return (
        <Box
            position="fixed"
            as="navbar"
            w="100%"
            bg="#FFE3E1"
            styled={{backdropFilter:'blur(10px'}}
            zIndex={1}
            {...props}
            textColor="#EDF6E5"
        >
            <Container display="flex" p={2} maxW="container.md" align="center" wrap="wrap" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                direction={{base: 'column', md: 'row'}}
                display={{base: 'none', md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={ 1}
                mt={{base: 4, md: 0}}
                >
                    <LinkItem href="/albums" path={path}>
                    Albums
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <Box ml={2} display={{base: 'inline-block', md: 'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>Home</MenuItem>
                                </NextLink>
                                <NextLink href="/albums" passHref>
                                    <MenuItem as={Link}>Albums</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
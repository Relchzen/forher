import NextLink from 'next/link'
import {Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export function Title({children }) {
    return(
        <Box>
            <NextLink href="/albums">
                <Link>Albums</Link>
            </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display='inline-block' as="h3" fontSize={20} mb={4}>
            {children}
            </Heading>
        </Box>
    )
}

export function AlbumImage({src, alt}) {
    return(
        <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
    )
}

export function Meta({children}) {
    return(
        <Badge colorScheme="blue" mr={2}>
            {children}
        </Badge>
    )
}
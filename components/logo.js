import Link from 'next/link'
import Image from 'next/image'
import { Text } from "@chakra-ui/react"
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 22px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

`

export default function Logo() {
    return(
        <Link href="/">
            <a>
                <LogoBox>
                    <Text color="#2C3333"
                    fontFamily="Indie Flower">
                        My Home
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}
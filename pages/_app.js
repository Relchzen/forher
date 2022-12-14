import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import '../styles/globals.css'
import Fonts from '../components/layouts/fonts'
import theme from '../libs/theme'
import { AnimatePresence } from 'framer-motion'

const MyApp = ({Component,pageProps, router}) => {
  return(
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

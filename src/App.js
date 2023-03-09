import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDisclosure, ChakraProvider } from '@chakra-ui/react'
import { Header, Footer } from './components/layout'
import { Menu, ProjectDetails } from './components'
import { theme } from './constants'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Projects = lazy(() => import('./pages/Projects'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const title = 'راه گرد بندر'

  const onMenuOpen = () => onOpen()

  const onMenuClose = () => onClose()

  return (
    <ChakraProvider theme={theme}>
      <Header title={title} onMenuOpen={onMenuOpen} onMenuClose={onMenuClose} />
      <Menu
        title={title}
        placement='right'
        onClose={onClose}
        isOpen={isOpen}
        onMenuClose={onMenuClose}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:slug' element={<ProjectDetails />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer title={title} />
    </ChakraProvider>
  )
}

export default App

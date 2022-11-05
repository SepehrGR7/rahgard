import { Routes, Route } from 'react-router-dom'
import { useDisclosure, ChakraProvider } from '@chakra-ui/react'
import { Home, About, Projects, Services, Contact } from './screens'
import { Header, Footer } from './components/layout'
import { Menu } from './components'
import { theme } from './constants'

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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer title={title} />
    </ChakraProvider>
  )
}

export default App

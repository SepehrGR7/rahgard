import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import NavbarLinks from './NavbarLinks'
import SocialLinks from './SocialLinks'

const Menu = ({ title, placement, onClose, isOpen, onMenuClose }) => {
  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth='1px' className='mt-12'>
          <h2 className='pr-3.5 pb-2 text-3xl'>{title}</h2>
        </DrawerHeader>
        <DrawerBody>
          <NavbarLinks
            showHome
            showIcons
            isCol
            margin='my-2'
            onMenuClose={onMenuClose}
          />
        </DrawerBody>
        <DrawerFooter className='mb-4' style={{ justifyContent: 'center' }}>
          <SocialLinks spacing='mx-2' />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Menu

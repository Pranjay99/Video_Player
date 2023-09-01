import React from 'react'
import {Drawer,DrawerBody,DrawerHeader ,DrawerOverlay,DrawerCloseButton,Button, useDisclosure, DrawerContent, VStack, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { BiMenuAltLeft } from "react-icons/bi"
const Header = () => {

    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
  <>
  <Button
    pos={'fixed'}
    top={'4'} left={'4'} colorScheme='purple' p={0} w={'10'} h={'10'} borderRadius={'full'}
    onClick={onOpen}
    >
    <BiMenuAltLeft size={'20'}/>
  </Button>

  <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
            VIDEO HUB
        </DrawerHeader>
        <DrawerBody>
          <VStack alignItems={'flex-start'}>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
              <Link to='/'> Home</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
              <Link to='/Videos'> Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
              <Link to='/Videos?category=free'> Free Videos</Link>
            </Button>
            <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
              <Link to='/upload'> Upload Videos</Link>
            </Button>
          </VStack>


          <HStack position={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
          <Button onClick={onClose} colorScheme='purple'>
              <Link to='/login' > Log in</Link>
            </Button>
            <Button onClick={onClose} colorScheme='purple' variant={'outline'}>
              <Link to='/signup'> Sign up</Link>
            </Button>
          </HStack>
        </DrawerBody>
    </DrawerContent>
  </Drawer>
  </>
  );
}

export default Header
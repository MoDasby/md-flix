import '@fontsource/roboto';
import '@fontsource/rubik';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  ModalCloseButton,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiSun,
  FiMoon,
  FiSearch,
  FiHeart,
  FiMenu
} from 'react-icons/fi';
import React, { MutableRefObject, useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarItemProps from '../../interfaces/SidebarItemProps';
import SidebarItems from '../../enums/SidebarItems';


const Sidebar = ({ active }: { active: SidebarItems }) => {

  const [activeKey, setActiveKey] = useState<SidebarItems>(active);

  return (

    <>
      <DesktopSidebar>
        <SidebarItem
          redirect='/'
          icon={FiHome}
          text="Home"
          active={activeKey === SidebarItems.Home}
          onClick={() => {
            setActiveKey(SidebarItems.Home);
          }}
        />

        <SidebarItem
          redirect='/search'
          icon={FiSearch}
          text="Buscar"
          active={activeKey === SidebarItems.Search}
          onClick={() => {
            setActiveKey(SidebarItems.Search);
          }}
        />

        <SidebarItem
          redirect='/trending'
          icon={FiTrendingUp}
          text="Em Alta"
          active={activeKey === SidebarItems.Trending}
          onClick={() => {
            setActiveKey(SidebarItems.Trending);
          }}
        />

        <SidebarItem
          redirect='/explore'
          icon={FiCompass}
          text="Explorar"
          active={activeKey === SidebarItems.Explore}
          onClick={() => {
            setActiveKey(SidebarItems.Explore);
          }}
        />

        <SidebarItem
          redirect='/favorites'
          icon={FiHeart}
          text="Favoritos"
          active={activeKey === SidebarItems.Favorites}
          onClick={() => {
            setActiveKey(SidebarItems.Favorites);
          }}
        />
      </DesktopSidebar>

      <MobileSidebar>
        <SidebarItem
          redirect='/'
          icon={FiHome}
          text="Home"
          active={activeKey === SidebarItems.Home}
          onClick={() => {
            setActiveKey(SidebarItems.Home);
          }}
        />

        <SidebarItem
          redirect='/search'
          icon={FiSearch}
          text="Buscar"
          active={activeKey === SidebarItems.Search}
          onClick={() => {
            setActiveKey(SidebarItems.Search);
          }}
        />

        <SidebarItem
          redirect='/trending'
          icon={FiTrendingUp}
          text="Em Alta"
          active={activeKey === SidebarItems.Trending}
          onClick={() => {
            setActiveKey(SidebarItems.Trending);
          }}
        />

        <SidebarItem
          redirect='/explore'
          icon={FiCompass}
          text="Explorar"
          active={activeKey === SidebarItems.Explore}
          onClick={() => {
            setActiveKey(SidebarItems.Explore);
          }}
        />

        <SidebarItem
          redirect='/favorites'
          icon={FiHeart}
          text="Favoritos"
          active={activeKey === SidebarItems.Favorites}
          onClick={() => {
            setActiveKey(SidebarItems.Favorites);
          }}
        />
      </MobileSidebar>
    </>
  )
}

const DesktopSidebar = ({ children }: { children: React.ReactNode }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Stack
      as="aside"
      h="100vh"
      w={{ base: "15vw", md: "20vw", lg: "15vw" }}
      bg={useColorModeValue("gray.100", "blackAlpha.200")}
      spacing="2rem"
      boxShadow="0 5px 15px #0000007f"
      pos="fixed"
      top="0"
      zIndex="1"
      display={{ base: "none", md: "block" }}
    >

      <Flex
        as="header"
        w="100%"
        justify="space-between"
        align="center"
        p="2"
      >
        <Link
          to="/"
        >
          <Heading
            as="h1"
            fontSize={{ base: ".8rem", md: "2rem" }}
            fontFamily="Rubik"
          >
            Md-Flix
          </Heading>
        </Link>

        <Button
          p="1rem"
          bg="transparent"
          onClick={toggleColorMode}
          transition="0.3s"
          _focus={{ outline: "none" }}
          _hover={{ bg: "none" }}
        >
          <Icon
            as={colorMode === "light" ? FiSun : FiMoon}
            color={useColorModeValue("blackAlpha.800", "white")}
            fontSize={{ md: "1.5rem" }}
          />
        </Button>
      </Flex>

      <Box>
        {children}
      </Box>
    </Stack>
  )
}

const MobileSidebar = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const boxRef = React.useRef() as MutableRefObject<HTMLDivElement>;


  document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      boxRef.current.style.backgroundColor = '#0000007f';
    } else {
      boxRef.current.style.backgroundColor = 'transparent';
    }
  });

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1"
      w="100vw"
      h="10vh"
      display={{ base: "flex", md: "none" }}
      alignItems="center"
      justifyContent="space-around"
      ref={boxRef}
    >
      <Link
        to="/"
      >
        <Heading
          as="h1"
          fontSize={{ base: "1.5rem", md: "2rem" }}
          fontFamily="Rubik"
        >
          Md-Flix
        </Heading>
      </Link>

      <Button
        variant={"transparent"}
        onClick={onOpen}
      >
        <FiMenu
          size="30px"
        />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            as="header"
            w="100%"
            justify="space-between"
            align="center"
            p="2"
          >
            <ModalCloseButton />

            <Button
              p="1rem"
              bg="transparent"
              onClick={toggleColorMode}
              transition="0.3s"
              _focus={{ outline: "none" }}
              _hover={{ bg: "none" }}
            >
              <Icon
                as={colorMode === "light" ? FiSun : FiMoon}
                color={useColorModeValue("blackAlpha.800", "white")}
                fontSize={{ md: "1.5rem" }}
              />
            </Button>
          </Flex>

          <DrawerBody>
            {children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

const SidebarItem = ({ icon, text, active, redirect, onClick }: SidebarItemProps) => {
  return (
    <Link
      to={redirect}
    >
      <Flex
        w="100%"
        p="2"
        align="center"
        fontFamily="Roboto"
        cursor="pointer"
        transition="0.3s"
        onClick={onClick}
      >
        <Icon
          as={icon}
          marginRight="1rem"
          marginLeft="1rem"
          {...(active ? { color: "purple.500" } : { color: "gray.600" })}
        />
        <Text
          {...(active ? {} : { color: "gray.600" })}
          letterSpacing=".2rem"
        >
          {text}
        </Text>

        {
          active &&
          <Box
            h="20px"
            w="5px"
            borderRightRadius="5px"
            bg="purple.700"
            pos="absolute"
            left="0"
          >
          </Box>
        }
      </Flex>
    </Link>
  )
}

export default Sidebar;
